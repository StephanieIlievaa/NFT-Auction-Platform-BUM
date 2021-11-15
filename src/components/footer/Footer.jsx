import Grid from "@mui/material/Grid";
import Logo from "../logo/Logo.jsx";
import Button from "@mui/material/Button";
import styles from "./Footer.module.scss";
import Container from "@mui/material/Container";

export default function Footer() {
  return (
    <div className={styles.wrapper}>
      <Container className={styles.footerContainer} maxWidth="xl">
        <Grid container direction="row">
          <Grid item>
            <Logo type="muted" className={styles.logo} />
          </Grid>
          <Grid
            item xs
            className={styles.allRights}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <p>Bum All Rights Reserved 2021</p>
          </Grid>
          <Grid item xs sx={{ display: "flex", justifyContent: "flex-end", paddingTop: "25px" }}>
            <Button sx={{ color: "#e1e1fc" }}>Privacy Policy</Button>
            <Button sx={{ color: "#e1e1fc" }}>Cookie Policy</Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
