import styles from "./Featured.module.scss";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Container from "@mui/material/Container";
import { useRouter } from "next/router";
import { useState } from "react";
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";

export default function Featured({ items = [] }) {
  const [selectedId, setSelectedId] = useState(null);
  return (
    <div>
      <Container className={styles.container}>
        |{" "}
        <AnimateSharedLayout type="crossfade">
          
            {items.map((item, index) => (
              // <motion.img
              //   className={styles.imageListItem}
              //   key={item.id}
              //   cols={index === 0 ? 3 : 1}
              //   rows={index === 0 ? 2 : 1}
              // >
              <motion.img
                className={styles.image}
                src={item.source.url}
                srcSet={item.title}
                alt={item.title}
                //product + item.id
                onClick={() => useRouter().push(item.href)}
              />
              // </ImageListItem>
            ))}
         <AnimatePresence>
  {productIds.map(id => (
    <ProductImage id={id} key={id} onExpand={setAsPrimary} />
  ))}
</AnimatePresence>
        </AnimateSharedLayout>
      </Container>
    </div>
  );
}
