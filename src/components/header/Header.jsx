import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Logo from "../logo/Logo";
import Link from "../link/Link.jsx";
import styles from "./Header.module.scss";
import SearchBar from "../SearchBar/SearchBar";
import Button from "@mui/material/Button";

function Header() {
  return (
    <div className={styles.wrapper} >
      <Container className={styles.container} >
        <Grid>
          <Grid>
            <Logo className={styles.logo} />
          </Grid>
          <Grid item className={styles.searchBar}>
            <SearchBar />
          </Grid>
          <Grid>
            <Button
              className={styles.homeBtn}
              component={Link}
              sx={{ color: "#e1e1fc" }}
              noLinkStyle
              href="/"
            >
              Home
            </Button>
            <Button className={styles.activityBtn} sx={{ color: "#e1e1fc" }}>
              Activity
            </Button>
            <Button
              className={styles.exploreBtn}
              variant="contained"
              sx={{ color: "#e1e1fc",justifyContent: 'center' }}
            >
              Explore
            </Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Header;
