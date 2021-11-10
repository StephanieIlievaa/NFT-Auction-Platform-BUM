import styles from "./ProductImage.module.scss";
import Paper from "@mui/material/Paper";

export default function ProductImage({url=[]}) {
  return (
    <div className={styles.product-image}>
      <Paper>
        <img className={styles.image} src={url} />
      </Paper>
    </div>
  );
}

