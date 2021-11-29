import Card from "../card/Card.jsx";
import { useState } from "react";
import styles from "./Trending.module.scss";
import { Container, Grid, Select, MenuItem } from "@mui/material";

export default function Trending({ cards = [], trendingMenu }) {
  const [menu, setMenu] = useState("");

  const selectMenuHandler = (e) => {
    setValueMenu(e.target.value);
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
              value={0}
              onChange={selectMenuHandler}

              displayEmpty
            >
              <MenuItem value={0}>This week</MenuItem>
              {trendingMenu.map(item => {
              return <MenuItem value={item.value} key={item.value}>{item.label}</MenuItem>
              })}
            
             
            </Select>
          </Grid>
        </Grid>
        <Grid container spacing={2} item className={styles.cards} xl>
          {cards.map((card) => (
            <Grid item xs={3} md={3}>
              <Card
                trending
                name={card.name}
                user={card.owner}
                mediaUrl={card.source.url}
                likes={card.likes}
                price={card.price}
                currency={card.currency}
                key={card.id}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}
