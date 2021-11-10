import styles from "./ProductInfoLikes.module.scss";
import Chip from "@mui/material/Chip";
import Favorite from "@mui/icons-material/Favorite";

export default function ProductInfoLikes({ amount = 0 }) {
  const [color, setColor] = useState("outlined");

  const likesHandleBtn = () => {
    {
      color == "filled" ? setColor("outlined") : setColor("filled");
    }
  };
  return (
    <div className={styles.product-info-likes}>
      <Chip
        className={styles.likes}
        label={millify(amount)}
        icon={<Favorite />}
        onClick={likesHandleBtn}
        variant={color}
        color="success"
      />
    </div>
  );
}
