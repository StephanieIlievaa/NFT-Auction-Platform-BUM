import styles from "./ProductInfo.module.scss";
import ProductInfoCreator from "./ProductInfoCreator.jsx";
import ProductInfoLikes from "./ProductInfoLikes.jsx";
import ProductInfoPrice from "./ProductInfoPrice.jsx";
import ProductInfoStatus from "./ProductInfoStatus.jsx";
import ProductInfoTitle from "./ProductInfoTitle.jsx";
import ProductInfoTimer from "./ProductInfoTimer.jsx"
import { Grid } from "@mui/material";
//ProductTitle, ProductInfoPrice, ProductInfoStatus, ProductInfoLikes, ProductInfoCreator, ProductInfoTimer

export default function ProductInfo({
  title,
  creator,
  price,
  currency,
  likes,
  onTimeEnd,
  timeEnd,
  isLive,
}) {
  return (
    <div className={styles.wrapper}>
      <div className={`${styles["product-info"]}`}>
        <Grid container >
          <ProductInfoTitle text={title} />
          <Grid container>
            <Grid item xs={3} sm={3} md={6}>
              <ProductInfoPrice amount={price} currency={currency} />
            </Grid>
            <Grid item xs={3} sm={3} md={3}>
              <ProductInfoStatus isLive={isLive} />
            </Grid>
            <Grid item xs={3} sm={3} md={3}>
              <ProductInfoLikes amount={likes} />
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={12} sm={12} md={6}>
              <ProductInfoCreator
                name={creator.name}
                avatar={creator.avatar}
                verified={creator.verified}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <ProductInfoTimer timeEnd={timeEnd} onTimeEnd={"auction ended"} />
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
