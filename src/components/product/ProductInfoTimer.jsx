import styles from "./ProductInfoTimer.module.scss";
import { formatDistance } from "date-fns";
import { parseISO } from "date-fns";
import Countdown from "react-countdown";
import React, { useState, useEffect } from "react";

export default function ProductInfoTimer({ timeEnd, onTimeEnd }) {
  const timer = <Countdown className={styles.active} date={timeEnd} children={<div>{onTimeEnd}</div>} />;
  const [time, setTime] = useState(false);

  const setTimer = () => {
    if (timeEnd !== "") {
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

  return (
    <div
      onChange={onTimeEnd}
      className={time ? styles["product-info-timer"] : styles["color-gray"]}
    >
      {time ? (
        <>
          <label className={styles.title}>
            <h5>Ends in</h5>
          </label>
          <div className={styles.timer}>
            <span>{timer}</span>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}
