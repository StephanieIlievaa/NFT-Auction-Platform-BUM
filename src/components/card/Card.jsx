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

//     name: String,
//     "likes": Number,
//     "mediaUrl": String,
//     "user":{
//         "avatarUrl": String,
//         "verified": Boolean
//     },
// "price": String,
// "verified": String
//     }

function Card({ name, likes, mediaUrl, user = {}, price, currency, time = 0 }) {
  const [color, setColor] = useState("outlined");
    
 
  console.log(setColor);
  const likesHandleBtn = () => {
    if (color == 'filled') {
      setColor('outlined');
    } else {
      setColor('filled');
    }
  }
  return (
    <CardWrap crassName={styles.wrapper} sx={{ maxWidth: 500 }}>
      <CardHeader
        avatar={<Avatar user={user.avatarUrl} verified={user.verified} />}
      ></CardHeader>
      <CardMedia
        crassName={styles.media}
        component="img"
        image={mediaUrl}
      ></CardMedia>
      <CardContent crassName={styles.content}>
        <div>{name}</div>
        <div>
          {price} {currency}
        </div>
        <Chip
          className={styles.secondary}
          label={millify.likes}
          icon={<Favorite />}
          onClick={likesHandleBtn}
          variant={color}
          color='success'
        ></Chip>
      </CardContent>
    </CardWrap>
  );
}

function LiveCard({ time = 0 }) {
  return <div></div>;
}
export default Card;
