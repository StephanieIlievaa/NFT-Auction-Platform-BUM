import styles from "./ProductInfoStatus.module.scss";
import { Chip } from "@mui/material";

export default function ProductInfoStatus({ isLive }) {
  let liveStatus = (
    <div>
      <Chip className={styles.status} label="LIVE" color="success" />
    </div>
  );

  return (
    <div className={`${styles["product-info-status"]}`}>
      {isLive ? liveStatus : <div></div>}
    </div>
  );
}
