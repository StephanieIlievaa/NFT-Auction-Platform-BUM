import CardMedia from "@mui/material/CardMedia";
import CardWrap from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "../avatar/Avatar.jsx";
import CardContent from "@mui/material/CardContent";
import styles from "./Card.module.scss";
import Chip from "@mui/material/Chip";
import millify from "millify";
import { useState } from "react";
import Favorite from "@mui/icons-material/Favorite";
import Countdown from "react-countdown";
import FiberManualRecord from "@mui/icons-material/FiberManualRecord";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Stack } from "@mui/material";

export default function Card({
  name = "",
  likes = 0,
  mediaUrl = "",
  user = {},
  price = 0,
  currency = "",
  timeLeft = 0,
  trending,
}) {
  const [color, setColor] = useState("outlined");

  const likesHandleBtn = () => {
    color == "filled" ? setColor("outlined") : setColor("filled");
  };

  return (
    <CardWrap
      className={styles.card}
      sx={{
        maxWidth: 500,
        backgroundColor: `${trending ? "#181828" : "#0E231B"}`,
      }}
    >
      <CardHeader
        avatar={
          <Avatar size={33} url={user.avatar.url} verified={user.verified} />
        }
      ></CardHeader>
      {timeLeft ? (
        <LiveCard className={styles.liveColorWrapper} timeLeft={timeLeft} />
      ) : null}
      <CardMedia
        className={styles.media}
        component="img"
        image={mediaUrl}
      ></CardMedia>
      <CardContent className={styles.content}>
        <Box className={styles.content__info}>
          <div className={styles.title}>{name}</div>
          <div className={styles.price}>
            {trending ? `~${price} ${currency}` : `${price} ${currency}`}
          </div>
        </Box>
        <Stack>
          <Chip
            className={styles.likes}
            label={millify(likes)}
            icon={<Favorite />}
            onClick={likesHandleBtn}
            variant={color}
            color="success"
          />
        </Stack>
      </CardContent>
    </CardWrap>
  );
}

function LiveCard({ timeLeft = 0 }) {
  return (
    <Grid className={styles.liveCardWrapper}>
      <Grid className={styles.badge}>
        <FiberManualRecord sx={{ width: 15, height: 15, color: "#181828" }} />
        <div className={styles.live}>LIVE</div>
      </Grid>
      <Grid className={styles.counterWrapper}>
        <Countdown
          className={styles.counter}
          date={Date.now() + timeLeft * 10000}
        />
      </Grid>
    </Grid>
  );
}
