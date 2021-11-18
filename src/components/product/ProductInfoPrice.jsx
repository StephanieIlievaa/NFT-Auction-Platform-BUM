import styles from "./ProductInfoPrice.module.scss";
import Paper from "@mui/material/Paper";

export default function ProductInfoPrice({ currency, amount = 0 }) {
  return (
    <div className={styles.wrapper}>
      <div className={`${styles["product-info-price"]}`}>
        <Paper variant="p" className={styles.titleSale}>
          ON SALE FOR {amount} {currency}
        </Paper>
      </div>
    </div>
  );
}
