import { Container, Grid, Select, MenuItem } from "@mui/material";
import Card from '../card/Card.jsx'
import { useState } from "react";
import styles from "./Auctions.module.scss";
import { height } from "@mui/material/node_modules/@mui/system";

function Auctions({cards = []}) {
    const [time, setTime] = useState("");

    const selectMenuHandler = (e) => {
      setTime(e.target.value);
    };
  
    return (
      <div className={styles.wrapper}>
        <Container className={styles.container} maxWidth="xl">
          <Grid container className={styles.gridContainer}>
            <Grid item className={styles.titleWrapper}>
              <div className={styles.title}>🔥 Live Auctions</div>
            </Grid>
            <Grid item className={styles.selectWrapper}>
              <Select
              
                className={styles.select}
                value={time}
                onChange={selectMenuHandler}
                displayEmpty
              >
                <MenuItem value="">This week</MenuItem>
                <MenuItem value={10}>Today</MenuItem>
                <MenuItem value={20}>This month</MenuItem>
                <MenuItem value={30}>This year</MenuItem>
              </Select>
            </Grid>
          </Grid>
          <Grid container spacing={2} item xl>
            {cards.map((card) => (
              <Grid className={styles.card}  item xs={3} md={3}>
                <Card  key={card.key} {...card} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </div>
    );
}
export default Auctions;