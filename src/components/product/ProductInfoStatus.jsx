import styles from "./ProductInfoStatus.module.scss";
import { Chip } from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { useState, useEffect } from "react";

export default function ProductInfoStatus({ isLive }) {

  let statusLive = <Chip className={styles.chip} label="⬤ LIVE"></Chip>;
  let liveComponent = (
    <div className={styles.status}>{isLive ? statusLive : <div></div>}</div>
  );

 
  return <div className={`${styles["product-info-status"]}`}>{liveComponent}</div>;
}
