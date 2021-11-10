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
import LiveIcon from "@mui/icons-material/FiberManualRecord";
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
}) {
  const [color, setColor] = useState("outlined");

  const likesHandleBtn = () => {
    {
      color == "filled" ? setColor("outlined") : setColor("filled");
    }
  };
  return (
    <CardWrap className={styles.card} sx={{ maxWidth: 500, color: "" }}>
      <CardHeader
        avatar={
          <Avatar size={33} url={user.avatarUrl} verified={user.verified} />
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
          <h4 className={styles.title}>{name}</h4>
          <p className={styles.price}>
            {price} {currency}
          </p>
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
