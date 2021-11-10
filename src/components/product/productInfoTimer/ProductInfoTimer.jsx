import styles from "./ProductInfoTitle.module.scss";
import Grid from '@mui/material/Grid';
import Countdown from "react-countdown";

export default function ProductInfoTitle({timeEnd, onTimeEnd }) {
    const [timeEnd, setTimeEnd] = useState("");

    const onTimeEnd = () => {
      {
        timeEnd < 0 ? setColor("hidden") : setTimeEnd("");
      }
    }

  return ( 
    <div className={styles.product - info - title}>
      <Grid className={styles.grid}>
        </Grid>
        <Grid  className={styles.counterWrapper}> 
            <Countdown
            onChange={onTimeEnd}
              className={styles.counter}
              date={Date.now() + timeEnd * 10000}
            />
        </Grid>
      
    </div>
  );
}
