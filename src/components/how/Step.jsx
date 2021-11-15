import styles from "./Step.module.scss";
import Grid from "@mui/material/Grid";

export default function Step({number = 0, title ='', description=''}) {
    return (
    <div className={styles.wrapperStep}>
    <Grid container direction='row' className={styles.container}>
      <Grid xs={6} item className={styles.numWrapper}>  
        <div className={styles.number}>{number}</div>
      </Grid>
      <Grid  item className={styles.content}>
        <h5 className={styles.title}>{title}</h5>
        <p  className={styles.description}>{description}</p>
      </Grid>
    </Grid>
  </div>
  );
  
}
