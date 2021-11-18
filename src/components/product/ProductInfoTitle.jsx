import styles from "./ProductInfoTitle.module.scss";
import { Container, Typography } from "@mui/material";

export default function ProductInfoTitle({title = []}) {
  
  return (
    <div className={styles.wrapper}>
      <Container className={`${styles["product-info-title"]}`}>
        <Typography className={styles.title} variant="h1">
          {title}

        </Typography>
      </Container>
    </div>
  );
}
