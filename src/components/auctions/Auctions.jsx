import { Container, Grid, Select, MenuItem } from "@mui/material";
import Card from '../card/Card.jsx'
import { useState } from "react";
import styles from "./Auctions.module.scss";


export default function Auctions({cards = [], menu}) {
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
               <MenuItem value={0}>This week</MenuItem>
              {menu.map(item => {
              return <MenuItem value={item.value} key={item.label}>{item.label}</MenuItem>
              })}
              </Select>
            </Grid>
          </Grid>
          <Grid container spacing={2} item xl>
            {cards.map((card) => (
              <Grid className={styles.card}  item xs={3} md={3}>
                <Card  name={card.name}
                user={card.owner}
                mediaUrl={card.source.url}
                likes={card.likes}
                price={card.price}
                currency={card.currency}
                key={card.id} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </div>
    );
}
