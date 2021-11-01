import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import styles from "./TrendingSection.module.scss";
import Card from "../card/Card.jsx";
import { MenuItem } from "@mui/material";

function Trending(props) {
  let cards = props.data.map((card, i) => {
    return <Card card={card} key={i} />;
  });
  //handler for the select menu => useState
  return (
    <div>
      <Container>
        <Grid container>
          <Grid>
            <div>Trending</div>
          </Grid>
          <Grid>
            <Select>
              <MenuItem>This week</MenuItem>
              <MenuItem>Today</MenuItem>
              <MenuItem>This month</MenuItem>
              <MenuItem>This year</MenuItem>
            </Select>
          </Grid>
          <Grid className={styles.cards}>{cards}</Grid>
        </Grid>
      </Container>
    </div>
  );
}
export default Trending;
