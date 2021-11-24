import styles from "./ProductContainer.module.scss";
import { Grid } from "@mui/material";
import ProductImage from "./ProductImage.jsx";
import ProductInfo from "./ProductInfo.jsx";
//ProductImage, ProductInfo, ProductTabs, ProductActions

export default function ProductContainer({
  name ="Shallow Son",
  owner,
  price = 3,
  currency ='ETH',
  likes= 1100,
  auction_end = true,
  details,
  bids,
  source="https://s3-alpha-sig.figma.com/img/5700/961d/873ed585dda6af33c56c3e41f33c9c2b?Expires=1638144000&Signature=ZWUd1hrG9OIlbvmcltFV7maszJObLjtULkpt0t0CV7~Gj9nAfS2Ef3r6oaOY9aGJbTJu5kd4WebJX1LPv2Apo~VSx56u1MfgS-ltnMKOZTnv6St1hxdTxcGViTxqhQtbkSJUdpyZVZCPUtfqQiXR~JesFf0~3-oTdrKGsdfPo9KRKnH3v7Ks3xyXRQB2K6e9AdP40cnktBog-hN9vefW1OkGJJfSCOaQH37k8RWYjIqa6DmYhKst4dHVrQV9uPtdQBPA6Q~H7QOfvH3s1gjOOhrQ81p~hvaue5ySJVXH47cNVnshMUWavYa-Nufl5vwu9eIPJbCUnF0hQQ63BGYdVg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
}) {
  return (
    <div className={`${styles['product-container']}`}>
      <Grid container className={styles.container}>
        <Grid item xs={6}><ProductImage url={source}/></Grid>
        <Grid item xs={5}><ProductInfo title={name} price={price} currency={currency} isLive={auction_end ? true :false} likes={likes}></ProductInfo></Grid>
      </Grid>
      <Grid></Grid>
    </div>
  );
}
