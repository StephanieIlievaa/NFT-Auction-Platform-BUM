import styles from "./ProductImage.module.scss";
import Paper from "@mui/material/Paper";

export default function ProductImage({url=[]}) {
  return (
    <div className={styles.wrapper}>
    <div className={`${styles['product-image']}`}>
     
        <img className={styles.image} src={url} />
     
    </div>
    </div>
  );
}

