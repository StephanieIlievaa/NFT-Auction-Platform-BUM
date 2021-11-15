import Collector from "./Collector.jsx";
import styles from "./CollectorColumn.module.scss";
//implement map on the array

export default function CollectorsColumn({ items = [] }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        {items.map((item, index) => (
          <Collector
            items={item}
            key={index}
            type={index % 2 != 0 ? "light" : ""}
          />
        ))}
      </div>
    </div>
  );
}
