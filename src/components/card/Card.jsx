import CardMedia from "@mui/material/CardMedia";
import CardWrap from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "../avatar/Avatar.jsx";
import CardContent from "@mui/material/CardContent";
import styles from "./Card.module.scss";
import Chip from "@mui/material/Chip";
import millify from "millify";
import { useState, useEffect } from "react";
import Favorite from "@mui/icons-material/Favorite";
import Countdown from "react-countdown";
import LiveIcon from "@mui/icons-material/FiberManualRecord";
import Grid from "@mui/material/Grid";

function Card({
  name,
  likes,
  mediaUrl,
  user = {},
  price,
  currency,
  timeLeft = 0,
 
}) {

  const [color, setColor] = useState("outlined");

  const likesHandleBtn = () => {
    {
      color == "filled" ? setColor("outlined") : setColor("filled");
    }
  };
  return (
    <CardWrap className={styles.wrapper} sx={{ maxWidth: 500 }}>
      <CardHeader
        avatar={<Avatar size={33} url={user.avatarUrl} verified={user.verified} />}
      ></CardHeader>
      {timeLeft ? <LiveCard timeLeft={timeLeft} /> : null}
      <CardMedia
        className={styles.media}
        component="img"
        image={mediaUrl}
      ></CardMedia>
      <CardContent className={styles.content}>
        <div className={styles.content__info}>
          <h4>{name}</h4>
          <p>
            ~{price} {currency}
          </p>
        </div>
        <Chip
          className={styles.chip}
          label={millify(likes)}
          icon={<Favorite />}
          onClick={likesHandleBtn}
          variant={color}
          color="success"
        />
      </CardContent>
    </CardWrap>
  );
}

function LiveCard({ timeLeft = 0 }) {
  return (
    <div className={styles.liveCard}>
      <Grid className={styles.grid}>
        <Grid className={styles.badge}>
          <LiveIcon color="primary" />
          <div className={styles.live}>Live</div>
        </Grid>
        <Grid className={styles.counterWrapper}> 
            <Countdown
              className={styles.counter}
              date={Date.now() + timeLeft * 10000}
            />
        </Grid>
      </Grid>
    </div>
  );
}
export default Card;
