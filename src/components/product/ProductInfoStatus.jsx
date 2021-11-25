import styles from "./ProductInfoStatus.module.scss";
import { Chip } from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { useState, useEffect } from "react";

export default function ProductInfoStatus({ isLive }) {

  let statusLive = <Chip className={styles.chip} label="⬤ LIVE"></Chip>;
  let liveComp = (
    <div className={styles.status}>{isLive ? statusLive : <div></div>}</div>
  );

  const [live, setLive] = useState(false);

  const setTimer = () => {
    if (isLive !== null) {
      setLive(true);
    } else {
      setLive(false);
    }
  };


  useEffect(() => {
    setLive();
  }, [liveComp]);

 
  return <div className={`${styles["product-info-status"]}`}>{liveComp}</div>;
}
