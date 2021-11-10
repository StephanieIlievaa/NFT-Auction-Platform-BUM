import styles from "./ProductInfoCreator.module.scss";
import User from "../../user/User.jsx";
export default function ProductInfoCreator({
  name = "",
  avatar = "",
  verified = false,
}) {
  return (
    <div className="styles.product-info-creator">
      <Grid>
        <Grid className={styles.title}>Creator</Grid>
        <Grid className={styles.user-container}>
          <User
            name={name}
            avatar={avatar}
            verified={verified}
          />
        </Grid>
      </Grid>
    </div>
  );
}
