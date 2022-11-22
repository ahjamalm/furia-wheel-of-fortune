import "./styles.css";
import { useState } from "react";
import { Wheel } from "./components/Roulette";
import Grow from "@mui/material/Grow";
import { makeStyles, Modal } from "@material-ui/core";
import BGPrize from "./assets/bg_prize.png";
import Logo from "./assets/Logo5x.png";
import TextLogo from "./assets/text.png";

import Podium from "./assets/Podium.png";
import PrizeFrame from "./assets/prize_frame.gif";
import { useDispatch, useSelector } from "react-redux";
import { SetLogRecord } from "./reducers/logs";
import { GetNextPrizeIndex, mockData } from "./helpers";
import LongMenu from "./components/menu";
import moment from "moment-timezone";
moment.tz.setDefault('Asia/Riyadh');

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
  },
  wheelPodium: {
    width: "100vw",
    height: "30vw",
    position: "absolute",
    top: "calc(100vh - 23vw)",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: 'contain',
    backgroundImage: `url(${Podium})`,
    zIndex: -10,
    filter: "drop-shadow(-4px 12px 12px #00000040)",

  },
}));

export default function App() {
  const classes = useStyles();
  const records = useSelector(state => state.log?.records?.[moment().format('DD/MM/yyyy')]);
  const [couponNum, setCouponNum] = useState(1);
  const [mustSpin, setMustSpin] = useState(false);
  const [counter, setCounter] = useState(0);
  const [open, setOpen] = useState(false);
  const [endOfSpins, setEndOfSpins] = useState(false);
  const [spinning, setSpinning] = useState(false);
  const dispatch = useDispatch()
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setEndOfSpins(false)
    if (counter > 5) {
      window.location.reload()
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

  // useEffect(() => {
  //   dispatch(ResetLog())
  // }, [])
  return (
    <div className="App">
      <div className="background" >
        {/* <iframe src="https://giphy.com/embed/VQ7BcoWeTichjgUBdv" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/isaidyes-shesaidyes-thewhiteflowerbridalboutique-VQ7BcoWeTichjgUBdv">via GIPHY</a></p> */}
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '16px' }}>
        <LongMenu />
        <div style={{
          backgroundImage: `url(${Logo})`,
          backgroundSize: 'cover',
          width: '15vw',
          minWidth: '100px',
          aspectRatio: '2.32',
        }}
        />

      </div>
      <div className="bannar" style={{
        display: 'flex',
        justifyContent: 'center',
        position: "absolute",
        top: "calc(50% - 33vw)",
        left: "18%",
      }}>
        <div style={{
          backgroundImage: `url(${TextLogo})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: 'cover',
          width: '65vw',
          height: '160px',
        }} ></div>
      </div>

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
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        className={classes.modal}
      >
        <Grow in={open}>
          <div className={classes.paper0}>
            <div className={classes.paper}>
              <div className={classes.paper2}>
                <div style={{ display: 'flex', justifyContent: [4, 8].includes(mockData[couponNum - 1].index) ? 'center' : 'center', alignItems: 'center', width: '65%' }}>
                  {
                    [4, 8].includes(mockData[couponNum - 1].index) ?
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


      <div className="wheelPodium" />

    </div>
  );
}
