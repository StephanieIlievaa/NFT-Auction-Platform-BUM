import styles from "./Features.module.scss";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Container from "@mui/material/Container";
import { useRouter } from "next/router";
function Featured({ items }) {
  return (
    <div>
      <Container className={styles.container} maxWidth="sm">
        <ImageList
          className={styles.imageList}
          sx={{ width: 1500, height: 
            482 }}
          cols={6}
          rowHeight={120}
        >
          {items.map((item, index) => (
            <ImageListItem
              key={index}
              cols={item.cols || 1}
              rows={item.rows || 1}
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

export default Featured;
