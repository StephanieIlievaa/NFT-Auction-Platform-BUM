import styles from "./ProductContainer.module.scss";
import { Grid } from "@mui/material";
import ProductImage from "./ProductImage.jsx";
import ProductInfo from "./ProductInfo.jsx";
//ProductImage, ProductInfo, ProductTabs, ProductActions

export default function ProductContainer({
  name ="Shallow Son",
  owner ={
    name: "toadnft",
    avatar: "https://s3-alpha-sig.figma.com/img/e8c9/9cd5/9b8596b5f1e73a55d94965e77c2e61cd?Expires=1638748800&Signature=XspoIh30aak1LnUYl~ONT8Q0a6DAIY-rc9rHD3YRwn03ZfMyoyLdJaKhIblbdfapTaiTnnqe7d79~ASFQ~oXpWt6oWwkeLtt36wVyQ-HSIlOxHtnF55NjgS4eR43hCt19ziKPXPtiTIMx~hjx4TrrF6Y1E5dDfeh7FL70-xUU9G9QouUNhXWyMvDBsJOfWVOGqr8nn1K-~nr5PZRGk1ywVAqwKzovJ3CWbq7-KPuKQ~jRRURcHTZx-68c1cYzki0lxyfNSNQtQuqgSt9JuXg2gulOs9CJglABaKQJCPNsLYZL00KzRILcvoKtTk7CVQkxdq92r6FY7GNPJZNehgGUw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    verified: true,

  },
  price = 3,
  currency ='ETH',
  likes= 1300,
  auction_end = true,
  details,
  bids,
  source="https://s3-alpha-sig.figma.com/img/5700/961d/873ed585dda6af33c56c3e41f33c9c2b?Expires=1638144000&Signature=ZWUd1hrG9OIlbvmcltFV7maszJObLjtULkpt0t0CV7~Gj9nAfS2Ef3r6oaOY9aGJbTJu5kd4WebJX1LPv2Apo~VSx56u1MfgS-ltnMKOZTnv6St1hxdTxcGViTxqhQtbkSJUdpyZVZCPUtfqQiXR~JesFf0~3-oTdrKGsdfPo9KRKnH3v7Ks3xyXRQB2K6e9AdP40cnktBog-hN9vefW1OkGJJfSCOaQH37k8RWYjIqa6DmYhKst4dHVrQV9uPtdQBPA6Q~H7QOfvH3s1gjOOhrQ81p~hvaue5ySJVXH47cNVnshMUWavYa-Nufl5vwu9eIPJbCUnF0hQQ63BGYdVg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
}) {
  return (
    <div className={`${styles['product-container']}`}>
      <Grid container className={styles.container}>
        <Grid item xs={6}><ProductImage url={source}/></Grid>
        <Grid item xs={5}><ProductInfo title={name} price={price} currency={currency} isLive={auction_end ? true :false} likes={likes} creator={owner}></ProductInfo></Grid>
      </Grid>
      <Grid></Grid>
    </div>
  );
}
