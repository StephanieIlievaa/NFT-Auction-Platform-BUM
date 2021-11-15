import styles from "./User.module.scss";
import Avatar from "../avatar/Avatar.jsx";
import Box from "@mui/material/Box";

export default function User({
  size = 55,
  name = "",
  info = "",
  avatar = "",
  verified = false,
}) {
  return (
    <div className={styles.user}>
      <Avatar verified={verified} url={avatar} size={size}></Avatar>
      <Box className={styles.wrapper}>
        <div className={styles.name}>{name}</div>
        <div className={styles.info}>{info} Items</div>
      </Box>
    </div>
  );
}

