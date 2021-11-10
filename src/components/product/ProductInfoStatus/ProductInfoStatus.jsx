import styles from './ProductInfoStatus.module.scss'

export default function ProductInfoStatus() {
    return( <div className={styles.product-info-status}>
        <Chip className={styles.status} label="LIVE" color="success" /></div>);
}