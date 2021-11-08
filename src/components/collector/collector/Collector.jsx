import { Grid } from "@mui/material";
import styles from "./Collector.module.scss";
import User from "../../user/User.jsx";

//every second collector in a column should have a ligther backgroun-color
//to use rgba func => ) for every second user => className={ligth}
// others => rgba(21, 15, 52) == #150F34

function Collector({ items = [], type = "" }) {

  const Opacity = () => {
  if( type == "light"){
      return 'rgba(28, 18, 73)'
} 
  }
  
  return (
    <div className={styles.container} style={{ backgroundColor: Opacity() }}>
      <Grid container direction="row" className={styles.column}>
        <Grid item className={styles.id}>
          {items.id}
        </Grid>
        <Grid item className={styles.user}>
          {" "}
          <User
            name={items.name}
            info={items.nftsCount}
            size={53}
            avatar={items.avatar}
            verified={items.verified}
          />
        </Grid>
      </Grid>
    </div>
  );
}
export default Collector;
