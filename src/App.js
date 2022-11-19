import "./styles.css";
import { useEffect, useState } from "react";
import { Wheel } from "./components/Roulette";
import Grow from "@mui/material/Grow";
import { makeStyles, Modal } from "@material-ui/core";
import BGPrize from "./assets/bg_prize.png";
import PrizeFrame from "./assets/prize_frame.gif";
import { useDispatch, useSelector } from "react-redux";
import { SetLogRecord } from "./reducers/logs";
import { GetNextPrize, mockData } from "./helpers";
import LongMenu from "./components/menu";
import moment from "moment-timezone";
moment.tz.setDefault('Asia/Riyadh');

const useStyles = makeStyles(() => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundImage: `url(${BGPrize})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "60%",
    width: "100%",
    outline: "none",
    position: "absolute",
  },
  paper2: {
    backgroundImage: `url(${PrizeFrame})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    fontSize: "6vw",
    textAlign: "center",
    color: "white",
    height: "100%",
    width: "100%",
    outline: "none",
    position: "absolute",
  },
  wheelContainer: {
    width: "47%",
    height: "47vw",
    position: "absolute",
    top: "18%",
    left: "26%",
  },
  prize: {
    margin: 0,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    textShadow: "1px 1px 10px #ffffffcc, 1px 1px 10px #ccc",
  },
}));

export default function App() {
  const classes = useStyles();
  const records = useSelector(state => state.log?.records?.[moment().format('DD/MM/yyyy')]);
  console.log("recordsrecords", records);
  const [couponNum, setCouponNum] = useState(1);
  const [mustSpin, setMustSpin] = useState(false);
  const [open, setOpen] = useState(false);
  const [spinning, setSpinning] = useState(false);
  const dispatch = useDispatch()
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    window.location.reload()
  };

  const onClick = () => {
    if (!spinning) {
      setSpinning(true);
      // const newCouponNum = 1;
      const newCouponNum = GetNextPrize(records);
      setCouponNum(newCouponNum);
      dispatch(SetLogRecord(newCouponNum))
      console.log(newCouponNum);
      setMustSpin(true);
    }
  };

  // useEffect(() => {
  //   dispatch(ResetLog())
  // }, [])
  return (
    <div className="App">
      <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '16px' }}>
        <LongMenu />
      </div>

      <div className={classes.wheelContainer}>
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
          <div className={classes.paper}>
            <div className={classes.paper2}>
              <p className={classes.prize}>{mockData[couponNum - 1].name}</p>
            </div>
          </div>
        </Grow>
      </Modal>
    </div>
  );
}
