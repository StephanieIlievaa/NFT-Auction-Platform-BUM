import styles from "./ProductContainer.module.scss";
import { Grid } from "@mui/material";
import ProductImage from "./ProductImage.jsx";
import ProductInfo from "./ProductInfo.jsx";
import ProductTabs from "./ProductTabs.jsx";
//ProductImage, ProductInfo, ProductTabs, ProductActions

export default function ProductContainer({
  name = "Shallow Son",
  owner = {
    name: "toadnft",
    avatar:
      "https://s3-alpha-sig.figma.com/img/e8c9/9cd5/9b8596b5f1e73a55d94965e77c2e61cd?Expires=1638748800&Signature=XspoIh30aak1LnUYl~ONT8Q0a6DAIY-rc9rHD3YRwn03ZfMyoyLdJaKhIblbdfapTaiTnnqe7d79~ASFQ~oXpWt6oWwkeLtt36wVyQ-HSIlOxHtnF55NjgS4eR43hCt19ziKPXPtiTIMx~hjx4TrrF6Y1E5dDfeh7FL70-xUU9G9QouUNhXWyMvDBsJOfWVOGqr8nn1K-~nr5PZRGk1ywVAqwKzovJ3CWbq7-KPuKQ~jRRURcHTZx-68c1cYzki0lxyfNSNQtQuqgSt9JuXg2gulOs9CJglABaKQJCPNsLYZL00KzRILcvoKtTk7CVQkxdq92r6FY7GNPJZNehgGUw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    verified: true,
  },
  price = 3,
  currency = "ETH",
  likes = 1300,
  auction_end = "2022-10-11T12:04:48.511Z",
  details = "Explicabo saepe unde et culpa placeat quam saepe praesentium doloribus. Aliquam eum vitae voluptas adipisci.",
  bids= [{"id":120,"user":{"id":424,"username":"Aubree38","email":"Desmond30@yahoo.com","provider":null,"confirmed":true,"blocked":null,"role":1,"verified":true,"info":"Commodi velit et quisquam laboriosam doloremque eveniet ipsam consequuntur in.","created_at":"2021-10-22T08:29:22.200Z","updated_at":"2021-11-12T14:44:14.734Z","avatar":"http://nft-auction.herokuapp.com/uploads/0xd8a833cd9ccca1fcbc81d81a88fcef03e5efd0f1_150e2878c2.jpg","name":"Aubree38"},"amount":0.09,"date":"2021-09-18T17:02:53.158Z","nft":361,"created_at":"2021-11-09T14:34:07.771Z","updated_at":"2021-11-09T14:34:07.776Z"},{"id":135,"user":{"id":409,"username":"Afton89","email":"Arlie_Cassin17@yahoo.com","provider":null,"confirmed":true,"blocked":null,"role":1,"verified":true,"info":"Eligendi aut consequatur fuga consectetur ut perspiciatis.","created_at":"2021-10-22T08:29:20.669Z","updated_at":"2021-11-12T14:44:14.091Z","avatar":"http://nft-auction.herokuapp.com/uploads/0xbf9572dee0ce4be2fbc21404f5046be1c1f6e6a3_ae7ca14bec.jpg","name":"Afton89"},"amount":0.777,"date":"2021-09-15T23:57:45.936Z","nft":361,"created_at":"2021-11-09T14:34:08.171Z","updated_at":"2021-11-09T14:34:08.175Z"}],
  source = "https://s3-alpha-sig.figma.com/img/5700/961d/873ed585dda6af33c56c3e41f33c9c2b?Expires=1638144000&Signature=ZWUd1hrG9OIlbvmcltFV7maszJObLjtULkpt0t0CV7~Gj9nAfS2Ef3r6oaOY9aGJbTJu5kd4WebJX1LPv2Apo~VSx56u1MfgS-ltnMKOZTnv6St1hxdTxcGViTxqhQtbkSJUdpyZVZCPUtfqQiXR~JesFf0~3-oTdrKGsdfPo9KRKnH3v7Ks3xyXRQB2K6e9AdP40cnktBog-hN9vefW1OkGJJfSCOaQH37k8RWYjIqa6DmYhKst4dHVrQV9uPtdQBPA6Q~H7QOfvH3s1gjOOhrQ81p~hvaue5ySJVXH47cNVnshMUWavYa-Nufl5vwu9eIPJbCUnF0hQQ63BGYdVg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
}) {
  return (
    <Grid container className={`${styles["product-container"]}`}>
      <Grid item sm={12} lg={6}>
        <ProductImage url={source} />
      </Grid>
      <Grid sx={{ px: 5 }} item sm={12} lg={6}>
        <ProductInfo
          title={name}
          price={price}
          currency={currency}
          isLive={auction_end}
          timeEnd={auction_end}
          onTimeEnd={"auction ended"}
          likes={likes}
          creator={owner}
        />
        <Grid  item sm={12} lg={6}><ProductTabs text={details} bids={bids}/></Grid>
      </Grid>
    </Grid>
  );
}
