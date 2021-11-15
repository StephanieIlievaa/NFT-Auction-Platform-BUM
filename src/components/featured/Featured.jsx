import styles from "./Features.module.scss";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Container from "@mui/material/Container";
import { useRouter } from "next/router";

export default function Featured({ items = [] }) {
  return (
    <div>
      <Container className={styles.container}>
        <ImageList className={styles.imageList} cols={6}>
          {items.map((item, index) => (
            <ImageListItem
              className={styles.imageListItem}
              key={index}
              cols={item.cols}
              rows={item.rows}
            >
              <img
                className={styles.image}
                src={item.image}
                alt={item.title}
                onClick={() => useRouter().push(item.href)}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Container>
    </div>
  );
}
