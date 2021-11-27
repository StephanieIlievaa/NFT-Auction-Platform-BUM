import styles from "./ProductInfo.module.scss";
import ProductInfoCreator from "./ProductInfoCreator.jsx";
import ProductInfoLikes from "./ProductInfoLikes.jsx";
import ProductInfoPrice from "./ProductInfoPrice.jsx";
import ProductInfoStatus from "./ProductInfoStatus.jsx";
import ProductInfoTitle from "./ProductInfoTitle.jsx";
import ProductInfoTimer from "./ProductInfoTimer.jsx";
import { Grid, Stack } from "@mui/material";
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
    <div className={`${styles["product-info"]}`}>
      <Grid container>
        <Grid sx={{ textAlign: "left" }} item xs={12} lg={12}>
          <ProductInfoTitle sx={{ mb: 5 }} text={title} />
        </Grid>
        <Grid sx={{ mt: 3 }} item xs={12} lg={12}>
          <hr className={styles.line} />
        </Grid>

        <Grid container>
          <Grid item xs={4} md={6} lg={8}>
            <ProductInfoPrice amount={price} currency={currency} />
          </Grid>
          <Grid
            sx={{ display: "flex", gap: "10px", justifyContent: "flex-end" }}
            item
            xs={4}
            md={6}
            lg={4}
          >
            {isLive && <ProductInfoStatus isLive={isLive} />}
            <ProductInfoLikes amount={likes} />
          </Grid>
        </Grid>

        <Grid container>
          <Grid sx={{ pr: 2 }} item xs={7} sm={12} md={7} lg={7}>
            <ProductInfoCreator
              name={creator.name}
              avatar={creator.avatar}
              verified={creator.verified}
            />
          </Grid>
          <Grid sx={{ pl: 2 }} item xs={5} sm={5} md={5} lg={5}>
            <ProductInfoTimer timeEnd={timeEnd} onTimeEnd={onTimeEnd} />
          </Grid>
        </Grid>
      </Grid>
      <Grid>
        <Stack className={styles.stats}></Stack>
      </Grid>
    </div>
  );
}

{
  /* <div className={styles.wrapper}>
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
        <ProductInfoTimer timeEnd={timeEnd} onTimeEnd={onTimeEnd} />
      </Grid>
    </Grid>

  </Grid>
  <Stack className={styles.stats}>

  </Stack>
</div>
</div> */
}
