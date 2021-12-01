import styles from "./ProductActions.module.scss";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

export default function ProductActions({
  isLive = false,
  currency = "",
  buyAmount = 0,
  bidAmount = 0,
  onBuy,
  onBid,
}) {
  return (
    <div className={`${styles["product-actions"]}`}>
      <Grid container>
        <Grid item xs={7} pr={1}>
          {isLive ? (
            <Button
              className={styles.button}
              variant="contained"
              onClick={onBuy}
              sx={{ width: "100%" }}
            >
              BUY FOR {buyAmount} {currency}
            </Button>
          ) : (
            <Button
              className={styles.button}
              disabled
              variant="contained"
              onClick={onBuy}
            >
              BUY FOR {buyAmount} {currency}
            </Button>
          )}
        </Grid>
        <Grid item xs={5} pl={1}>
          {isLive ? (
            <Button
              className={styles.button}
              variant="outlined"
              color="success"
              onClick={onBid}
              sx={{ width: "100%" }}
            >
              BUY FOR {bidAmount} {currency}
            </Button>
          ) : (
            <Button
              className={styles.button}
              disabled
              variant="outlined"
              color="success"
              onClick={onBid}
            >
              PLACE BID FOR {bidAmount} {currency}
            </Button>
          )}
        </Grid>
      </Grid>
    </div>
  );
}
