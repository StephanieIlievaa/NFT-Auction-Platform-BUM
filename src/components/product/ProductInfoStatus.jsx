import styles from "./ProductInfoStatus.module.scss";
import { Chip } from "@mui/material";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

export default function ProductInfoStatus({ isLive }) {
    
  let statusLive = <Chip className={styles.chip} label="⬤ LIVE"></Chip>;
  return (
    <div className={`${styles["product-info-status"]}`}>
      <div className={styles.status}>{isLive ? statusLive : <div></div>}</div>
    </div>
  );
}
