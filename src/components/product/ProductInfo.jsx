import styles from "./ProductInfo.module.scss";
import ProductInfoCreator from "./ProductInfoCreator.jsx";
import ProductInfoLikes from "./ProductInfoLikes.jsx";
import ProductInfoPrice from "./ProductInfoPrice.jsx";
import ProductInfoStatus from "./ProductInfoStatus.jsx";
import ProductInfoTitle from "./ProductInfoTitle.jsx";

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
        <ProductInfoTitle text={title} />
        <ProductInfoPrice amount={price} currency={currency}/>
        <ProductInfoStatus isLive={isLive}/>
        <ProductInfoLikes amount={likes}/>
        <ProductInfoCreator name={creator.name} avatar={creator.avatar} verified={creator.verified}/>

      </div>
    </div>
  );
}
