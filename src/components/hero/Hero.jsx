import Typography from "@mui/material/Typography";
import styles from './Hero.module.scss'

export default function Hero({ text = 'HOW IT WORKS' }) {
  return (
    <div className={styles.hero}>
      <Typography className={styles.text} sx={{color: 'white'}} variant="h1">{text}</Typography>
    </div>
  );
}
