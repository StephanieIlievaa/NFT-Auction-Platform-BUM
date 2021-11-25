import styles from "./ProductInfoTimer.module.scss";
import { formatDistance } from "date-fns";
import { parseISO } from "date-fns";
import Countdown from "react-countdown";
import React, { useState, useEffect } from "react";

export default function ProductInfoTimer({ timeEnd, onTimeEnd }) {
  const timer = (
    <Countdown
      className={styles.active}
      date={timeEnd}
      children={<div>{onTimeEnd}</div>}
    />
  );
  const [time, setTime] = useState(false);

  const setTimer = () => {
    if (timeEnd !== null) {
      setTime(true);
    } else {
      setTime(false);
    }
  };

  console.log(timeEnd);
  console.log(onTimeEnd);

  useEffect(() => {
    setTimer();
  }, [timer]);

  const component = (
    <div className={styles.timer}>
      <div className={styles.title}>
        <label >
          <span>ENDS IN</span>
        </label>
      </div>
      <div className={styles.timerWrapper}>{timer}</div>
    </div>
  );

  return (
    <div className={styles["product-info-timer"]}>
      {timeEnd ? (
        component
      ) : (
        <div style={{ display: "none" }} className={styles.timer}></div>
      )}
    </div>
  );
}
