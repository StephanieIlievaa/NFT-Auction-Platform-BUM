import styles from "./ProductInfoCreator.module.scss";
import User from "../user/User.jsx";
import { Grid } from "@mui/material";
export default function ProductInfoCreator({
  name = "",
  avatar = "",
  verified = false,
}) {
  return (
    <div className={`${styles['product-info-creator']}`}>
      <div>
        <span className={styles.title}>Creator</span>
        <div className={`${styles['user-container']}`}>
          <User
            name={name}
            avatar={avatar}
            verified={verified}
          />
        </div>
      </div>
    </div>
  );
}
