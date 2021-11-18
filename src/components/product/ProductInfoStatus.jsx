import styles from './ProductInfoStatus.module.scss'
import { Chip } from '@mui/material';
export default function ProductInfoStatus({isLive}) {
    return( <div className={`${styles["product-info-status"]}`}>
        
        <Chip className={styles.status} label="LIVE" color="success" /></div>);
}