import styles from "./ProductInfoCreator.module.scss";
import User from "../user/User.jsx";
import { Grid } from "@mui/material";
import { height } from "@mui/material/node_modules/@mui/system";

export default function ProductInfoCreator({
  name = "",
  avatar = "",
  verified = false,
}) {
  return (
    <div className={`${styles["product-info-creator"]}`}>
      <div className={styles.creatorContainer}>
        <span className={styles.title}>CREATOR</span>
      </div>
      <div className={`${styles["user-container"]}`}>
        <User name={name} avatar={avatar} verified={verified} />
      </div>
    </div>
  );
}
