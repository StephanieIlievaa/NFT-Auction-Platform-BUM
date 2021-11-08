import Collector from "../collector/Collector.jsx";
import styles from "./CollectorsColumn.module.scss";
//implement map on the array
function CollectorsColumn({ items = [] }) {
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
export default CollectorsColumn;
