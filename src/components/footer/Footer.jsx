import Grid from "@mui/material/Grid";
import Logo from "../logo/Logo.jsx";
import Button from "@mui/material/Button";
import styles from "./Footer.module.scss";
import Container from "@mui/material/Container";

export default function Footer() {
  return (
    <div className={styles.wrapper}>
      <Container className={styles.footerContainer} maxWidth="xl">
        <Grid container >
          <Grid item sx={6}sx={{display: "flex-start", paddingTop: "20px"}}>
            <Logo type="muted"  />
          </Grid>
          <Grid
            item xs={6}
            className={styles.allRights}
            sx={{ display: "flex", paddingLeft: '500px', paddingTop: "25px" }}
          >
            <p>Bum All Rights Reserved 2021</p>
          </Grid>
          <Grid item xs sx={{ display: "flex", justifyContent: "flex-end", paddingTop: "15px" }}>
            <Button sx={{ color: "#e1e1fc" }}>Privacy Policy</Button>
            <Button sx={{ color: "#e1e1fc" }}>Cookie Policy</Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
