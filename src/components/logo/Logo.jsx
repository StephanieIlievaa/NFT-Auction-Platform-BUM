import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Link from "../link/Link";
import styles from "./Logo.module.scss";
import classNames from "classnames";


export default function Logo(props) {
    
    return (
      <div className={classNames(styles.wrapper)}>
        <Container className={classNames(styles.container)} maxWidth="xl">
          <Paper className={classNames(styles.paper)}>
            <Link href="/about" color="secondary">
             
            </Link>
          </Paper>
        </Container>
      </div>
    );
  }