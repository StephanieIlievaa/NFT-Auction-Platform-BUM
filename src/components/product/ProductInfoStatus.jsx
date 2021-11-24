import styles from "./ProductInfoStatus.module.scss";
import { Chip } from "@mui/material";

export default function ProductInfoStatus({ isLive }) {
let liveStatus = <div className={`${styles["product-info-status"]}`}>
        <Chip className={styles.status} label="LIVE" color="success" /> 
    </div>
  return (
   <>{isLive ? liveStatus : <div></div>}</>
  );
}
