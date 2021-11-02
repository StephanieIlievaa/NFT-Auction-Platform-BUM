import styles from "./User.module.scss"
import Avatar from "../avatar/Avatar.jsx"
import Box from "@mui/material/Box"

function User({ name='', info='', avatar='', size = 55, verified = false }) {
return(
<div className={styles.user}>
<Avatar verified={verified} url={avatar} size={size}></Avatar>
<Box className={styles.wrapper}>
<div className={styles.name}>{name}</div>
<div className={styles.info}>{info}</div>
</Box>
</div>

);
}
export default User;