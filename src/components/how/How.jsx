import styles from "./How.module.scss";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Step from "../step/Step.jsx";

export default function How({
  description = "",
  title = "",
  items = [],
  link = "",
}) {
  return (
    <div className={styles.wrapper} maxWidth="xl">
      <Grid className={styles.container}>
        <Grid item>
          <h1 className={styles.titleHow}>{title} </h1>
          <p className={styles.paragraph}>{description} </p>
          <Button className={styles.buttonLearn} href={link}>
            LEARN MORE
          </Button>
        </Grid>
        <Grid container direction="column" className={styles.items}>
          {items.map((item, index) => (
            <EachStep key={index} item={item} />
          ))}
        </Grid>
      </Grid>
    </div>
  );
}

function EachStep({ item = [] }) {
  return (
    <Grid item spacing={2} className={styles.item}>
      <Step
        number={item.number}
        title={item.title}
        description={item.description}
      />
    </Grid>
  );
}
