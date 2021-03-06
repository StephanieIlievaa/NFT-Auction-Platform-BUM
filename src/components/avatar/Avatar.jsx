import Container from "@mui/material/Container";
import styles from "./Avatar.module.scss";

export default function Avatar({ size = 90, url, verified = false }) {
  return (
    <div className={styles.wrapper}>
      <Container
        className={styles.avatar}
        sx={{ width: size, height: size }}
      >
        <img
          className={styles.image}
          src={url}
        />
        {verified ? 
          <img className={styles.badge} src={"/images/verified.svg"} />
        : null}
      </Container>
    </div>
  );
}
