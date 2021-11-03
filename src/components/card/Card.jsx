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
import { positions } from "@mui/system";

function Card({ name, likes, mediaUrl, user = {}, price, currency, timeLeft = 0 }) {
  const [color, setColor] = useState("outlined");

  const likesHandleBtn = () => {
    {
      color == "filled" ? setColor("outlined") : setColor("filled");
    }
  };
  return (
    <CardWrap className={styles.wrapper} sx={{ maxWidth: 500 }}>
      <CardHeader
        avatar={<Avatar user={user.avatarUrl} verified={user.verified} />}
      ></CardHeader>
      <CardMedia
        className={styles.media}
        component="img"
        image={mediaUrl}
      ></CardMedia>
      <CardContent className={styles.content}>
        <div className={styles.content__info}>
          <h4>{name}</h4>
          <p>~{price} {currency}</p>
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

function LiveCard({ time = 0 }) {
  return <div></div>;
}
export default Card;
