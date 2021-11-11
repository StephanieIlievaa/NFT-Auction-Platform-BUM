import Card from "../card/Card.jsx";
import { useState } from "react";
import styles from "./Trending.module.scss";
import { Container, Grid, Select, MenuItem } from "@mui/material";

export default function Trending({ cards = [] }) {
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
          <Grid item>
            <Select
              style={{ width: 220, height: 50 }}
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
        <Grid container spacing={2} item className={styles.cards} xl>
          {cards.map((card) => (
            <Grid item xs={3} md={3}>
              <Card trending {...card} key={card.key} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}
