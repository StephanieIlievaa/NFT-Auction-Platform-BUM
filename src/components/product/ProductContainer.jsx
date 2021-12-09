import Grid from "@mui/material/Grid";
import styles from "./ProductContainer.module.scss";
import ProductImage from "./ProductImage.jsx";
import ProductInfo from "./ProductInfo.jsx";
import ProductTabs from "./ProductTabs.jsx";
import ProductActions from "./ProductActions.jsx";

//ProductImage, ProductInfo, ProductTabs, ProductActions

export default function ProductContainer({
  name,
  owner,
  price ,
  currency,
  likes,
  auction_end,
  details,
  bids,
  source,
}) {
  
  return (
    <div className={`${styles["product-container"]}`}>
    <Grid container >
      <Grid item xs={6} sm={6} lg={6}>
        <ProductImage url={source?.url} />
      </Grid>
      <Grid item  xs={5}  sm={5} lg={5} sx={{ px: 5 }}>
        <ProductInfo
          title={name}
          price={price}
          currency={currency}
          isLive={auction_end}
          timeEnd={auction_end}
          onTimeEnd
          likes={likes}
          creator={owner}
        />
        <Grid item sm={12} lg={12}>
          <ProductTabs text={details} bids={bids} />
        </Grid>

        <Grid item sm={12} lg={12}>
          <ProductActions
            isLive={auction_end}
            currency={currency}
            buyAmount={price}
            bidAmount={price}
            onBuy={() => {alert(`You have placed a bid on ${name} for ${price} ${currency}.`)}}
            onBid={() => {alert(`You have bought ${name} for ${price} ${currency}.`)}}
          />
        </Grid>
      </Grid>
    </Grid>
    </div>
  );
}
