import Container from "@mui/material/Container";
import styles from "./Avatar.module.scss";

function Avatar({ size = 90, url, verified = false }) {
  return (
    <div className={styles.wrapper}>
      <Container
        className={styles.container}
        sx={{ width: size, height: size }}
      >
        <img
          className={styles.image}
          src={
            "https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554__480.jpg"
          }
        />
        {verified ? (
          <img className={styles.badge} src={"/images/verified.svg"} />
        ) : null}
      </Container>
    </div>
  );
}
export default Avatar;
