import { Container, Grid, Select, MenuItem } from "@mui/material";
import Card from "../card/Card";
import { useState } from "react";
import styles from "./TrendingSection.module.scss";

function Trending({ cards }) {
  const [time, setTime] = useState("");

  const selectMenuHandler = (e) => {
    setTime(e.target.value);
  };

  return (
    <div className={styles.wrapper}>
      <Container className={styles.container} maxWidth="xl">
        <Grid container className={styles.gridContainer}>
          <Grid item className={styles.titleWrapper}>
            <div className={styles.title}>Trending</div>
          </Grid>
          <Grid item className={styles.selectWrapper}>
            <Select
              className={styles.select}
              value={time}
              onChange={selectMenuHandler}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem value="">This week</MenuItem>
              <MenuItem value={10}>Today</MenuItem>
              <MenuItem value={20}>This month</MenuItem>
              <MenuItem value={30}>This year</MenuItem>
            </Select>
          </Grid>
        </Grid>
        <Grid container spacing={2} item className={styles.cards} xl>
          {cards.map((card) => (
            <Grid item xs={3} md={3}>
              <Card key={card.key} {...card} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}
export default Trending;
