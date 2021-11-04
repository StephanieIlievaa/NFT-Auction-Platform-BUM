import styles from "./How.module.scss";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Step from "../step/Step.jsx";

function How({description='', title='', items=[], link=''}) {
  return (
    <div className={styles.wrapper}>
      <Grid maxWidth="lg" className={styles.container}>
        <Grid>
          <h1 className={styles.titleHow}>{title} </h1>
          <p className={styles.paragraph}>{description} </p>
          <Button
            className={styles.buttonLearn}
            href={link}
          >
            LEARN MORE
          </Button>
        </Grid>
        <Grid item className={styles.items}>
        { items.map( (item , index ) => <EachStep key={index} item={item} />)}
        </Grid>
      </Grid>
    </div>
  );
}

function EachStep({ item = [] }) {
  return (
    <Grid item className={styles.item}>
      <Step
        number={item.number}
        title={item.title}
        description={item.description}
      />
    </Grid>
  );
}
export default How;
