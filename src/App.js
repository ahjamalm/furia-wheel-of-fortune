import "./styles.css";
import { useEffect, useRef, useState } from "react";
import { Wheel } from "./components/Roulette";
import Grow from "@mui/material/Grow";
import { makeStyles, Modal } from "@material-ui/core";
import BGPrize from "./assets/bg_prize.png";
import Logo from "./assets/Logo5x.png";
import TextLogo from "./assets/text.png";
import PrizeFrame from "./assets/prize_frame.gif";
import { useDispatch, useSelector } from "react-redux";
import { SetLogRecord } from "./reducers/logs";
import { GetNextPrize, GetNextPrizeIndex, mockData } from "./helpers";
import LongMenu from "./components/menu";
import moment from "moment-timezone";
import audioFile from '../src/assets/sound.wav'

moment.tz.setDefault('Asia/Riyadh');
const beep = new Audio(audioFile)

const useStyles = makeStyles(() => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper0: {
    height: "70%",
    width: '100vw',
    outline: "none",
    position: "absolute",
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex'

  },
  paper: {
    backgroundImage: `url(${BGPrize})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
    outline: "none",

  },
  paper2: {
    backgroundImage: `url(${PrizeFrame})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    fontSize: "4vw",
    justifyContent: 'center',
    // textAlign: "center",
    color: "white",
    height: "100%",
    width: "100%",
    outline: "none",
    display: 'flex',
    alignItems: 'center'
  },
  prize: {
    margin: 0,
    // position: "absolute",
    // top: "50%",
    // left: "50%",
    // transform: "translate(-50%, -50%)",
    textShadow: "1px 1px 10px #ffffffcc, 1px 1px 10px #ccc",
  }
}));

export default function App() {
  const classes = useStyles();
  const records = useSelector(state => state.log?.records?.[moment().format('DD/MM/yyyy')]);
  const [couponNum, setCouponNum] = useState(1);
  const [mustSpin, setMustSpin] = useState(false);
  const [counter, setCounter] = useState(0);
  const [open, setOpen] = useState(false);
  const [endOfSpins, setEndOfSpins] = useState(false);
  const ref = useRef()
  const [spinning, setSpinning] = useState(false);
  const dispatch = useDispatch()
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setEndOfSpins(false)
    if (counter > 5) {
      // window.location.reload()
    }
    setCounter(counter + 1)
  };

  const onClick = () => {
    if (!spinning) {
      setSpinning(true);
      // const newCouponNum = 1;
      const newCouponNum = GetNextPrizeIndex(records);
      if (newCouponNum) {
        setCouponNum(newCouponNum);
        dispatch(SetLogRecord(newCouponNum))
        console.log(newCouponNum);
        setMustSpin(true);
      } else {
        setSpinning(false);
        setEndOfSpins(true)
      }

    }
  };
  function musicPlay() {
    beep.loop = true;
    beep.play()
    document.removeEventListener('click', musicPlay);
  }
  // useEffect(() => {
  //   console.log("recordsrecords", records);
  //   const newCouponNum = GetNextPrizeIndex(records);
  //   if (newCouponNum) {
  //     setCouponNum(newCouponNum);
  //     dispatch(SetLogRecord(newCouponNum))
  //   }
  // }, [records])
  useEffect(() => {
    document.addEventListener('click', musicPlay);
  }, [])
  return (
    <div ref={ref} className="App">


      <div className="background" >
        {/* <iframe src="https://giphy.com/embed/VQ7BcoWeTichjgUBdv" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/isaidyes-shesaidyes-thewhiteflowerbridalboutique-VQ7BcoWeTichjgUBdv">via GIPHY</a></p> */}
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px', height: '15vh' }}>
        <LongMenu />
        <div style={{
          backgroundImage: `url(${TextLogo})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: 'contain',
          flex: 3,
          margin: '0 13vw',
          aspectRatio: '1',
        }} ></div>
        <div style={{
          flex: 1,
          backgroundImage: `url(${Logo})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: 'contain',
          aspectRatio: '2.32',
        }}
        />
      </div>

      <div className="wheelParent">
        <div className='wheelContainer'>
          <Wheel
            mustStartSpinning={mustSpin}
            prizeNumber={couponNum}
            onClick={() => onClick()}
            onStopSpinning={() => {
              setSpinning(false);
              setMustSpin(false);
              handleOpen();
            }}
          />
        </div>
        <div className="wheelPodium" />
      </div>


      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        className={classes.modal}
        onClick={handleClose}
      >
        <Grow in={open}>
          <div className={classes.paper0}>
            <div className={classes.paper}>
              <div className={classes.paper2}>
                <div style={{ display: 'flex', justifyContent: [8].includes(mockData[couponNum - 1].index) ? 'center' : 'center', alignItems: 'center', width: '65%' }}>
                  {
                    [8].includes(mockData[couponNum - 1].index) ?
                      <div />
                      :
                      <div >
                        <img src={mockData[couponNum - 1].img} width={200} height={200} />
                      </div>
                  }
                  <p className={classes.prize}>{mockData[couponNum - 1].name}</p>
                </div>
              </div>
            </div>
          </div>

        </Grow>
      </Modal>

      {
        endOfSpins &&
        <Modal
          keepMounted
          open={endOfSpins}
          onClose={handleClose}
          className={classes.modal}
        >
          <Grow in={endOfSpins}>
            <div className={classes.paper0}>
              <div className={classes.paper}>
                <div className={classes.paper2}>
                  <div style={{ display: 'flex', justifyContent: 'center', textAlign: 'center', alignItems: 'center', width: '65%' }}>
                    <p className={classes.prize}>{"Thanks for your participation, Join us later for the next activation"}</p>
                  </div>
                </div>
              </div>
            </div>

          </Grow>
        </Modal>
      }

      <div style={{ position: 'absolute', bottom: '120px', right: '20px', fontSize: '40px', fontWeight: 700, color: '#ed1c23', border: '6px solid #ed1c23', borderRadius: '8px', padding: '8px 40px' }}>{records?.length || 0}</div>

    </div>
  );
}
