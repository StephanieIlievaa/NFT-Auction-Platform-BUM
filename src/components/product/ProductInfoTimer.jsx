import styles from "./ProductInfoTitle.module.scss";
import { formatDistance } from "date-fns";
import { parseISO } from "date-fns";
import Countdown from "react-countdown";

export default function ProductInfoTitle({timeEnd, onTimeEnd }) {
  
  
  const timer =
  <Countdown
      date={timeEnd}
      className={classNames(styles["active"])}
      children={<div>{onTimeEnd}</div>}
  />

const timerComponent =

  <div className={classNames(styles["timer"])}>
      <label className={classNames(styles["title"])}>Ends in</label>
      {timer}
  </div>

return (
  <div className={classNames(styles["product-info-timer"])}>
      {timeEnd ? timerComponent : <div className={classNames(styles["timer"])}></div>}
  </div>

)
}

