import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import styles from "./TrendingSection.module.scss";
import Card from "../card/Card.jsx";
import  MenuItem from "@mui/material/MenuItem";
import setState from 'react';
import Select from "@mui/material/Select";

function Trending({props}) {

const [time, setTime] = setState('');

 //handler for the select menu 
const selectMenuHandler = (e) => {
   setTime(e.target.value)

}

  let cards = props.data.map((card, i) => {
    return <Card card={card} key={i} />;
  });

  return (
    <div>
      <Container>
        <Grid container>
          <Grid>
            <div>Trending</div>
          </Grid>
          <Grid>
            <Select 
            onChange={selectMenuHandler}
            value={time}>
              <MenuItem value="">This week</MenuItem>
              <MenuItem value={10}>Today</MenuItem>
              <MenuItem value={20}>This month</MenuItem>
              <MenuItem value={30}>This year</MenuItem>
            </Select>
          </Grid>
          <Grid className={styles.cards}>{cards}</Grid>
        </Grid>
      </Container>
    </div>
  );
}
export default Trending;
