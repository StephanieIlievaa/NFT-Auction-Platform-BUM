import styles from "./Featured.module.scss";
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
              key={item.id}
              cols={index === 0 ? 3 : 1}
              rows={index === 0 ? 2 : 1}
            >
              <img
                className={styles.image}
                src={item.source.url}
                srcSet={item.title}
                alt={item.title}
                //product + item.id 
                onClick={() => useRouter().push(item.href)}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Container>
    </div>
  );
}
