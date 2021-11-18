import styles from "./ProductInfo.module.scss";
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
        <ProductInfoTitle title={title} />
        <ProductInfoPrice amount={price} currency={currency}/>
        <ProductInfoStatus isLive={isLive}/>
        <ProductInfoLikes amount={likes}/>
      </div>
    </div>
  );
}
