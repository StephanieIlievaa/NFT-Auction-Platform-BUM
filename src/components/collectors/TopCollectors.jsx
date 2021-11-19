import styles from "./TopCollectors.module.scss";
import { useState } from "react";
import { Container, Grid, Select, MenuItem } from "@mui/material";
import CollectorColumn from "./CollectorColumn.jsx";
import _ from "lodash";

export default function TopCollectors({ collectors = [] }) {

  const [time, setTime] = useState("");
  const selectMenuHandler = (e) => {
    setTime(e.target.value); 
  }; 
  
  let sortedCollectors = collectors.sort((a,b) => b.id - a.id).slice(0, 12);
 
 
  return (
    <div maxWidth="xl" className={styles.wrapper}>
      <Container container direction="row" className={styles.gridContainer}>
        <Grid container direction="row" className={styles.gridContainer}>
          <Grid item className={styles.header}>
            <div className={styles.title}>Top Collectors</div>
            <Select
              className={styles.select}
              style={{ width: 220, height: 50 }}
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
          <Grid item className={styles.collectors} xl>

          {_.chunk(sortedCollectors, 3).map((collector, index) => (
              <CollectorColumn key={index} items={collector} />
            ))}
             
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
