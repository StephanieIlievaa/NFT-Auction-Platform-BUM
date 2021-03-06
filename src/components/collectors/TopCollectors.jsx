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
  // how to sort the collectors in descending order - by id, nftsCount or else ...
  let sortedCollectors = collectors.sort((a, b) => b.nftsCount - a.nftsCount);

  let topCollectors = sortedCollectors.slice(0, 12);

  collectors.map((collector, index) => {
    if (index < 12) {
      collector.id = index + 1;
    }
  });

  const chunked = _.chunk(topCollectors, 3);

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
            {chunked.map((collectors, index) => {
              return (
                <CollectorColumn
                  key={index}
                  items={collectors}
                ></CollectorColumn>
              );
            })}
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
