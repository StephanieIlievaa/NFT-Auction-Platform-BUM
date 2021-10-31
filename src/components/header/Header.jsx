import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Logo from "../logo/Logo";
import Link from "../link/Link.jsx"
import styles from "./Header.module.scss"
import SearchBar from "../SearchBar/SearchBar";
import  Button  from "@mui/material/Button";


 function Header() { 
  return (
    <div className={styles.wrapper}>
     
      <Container className={styles.container} maxWidth="xl">
        <Grid container direction='row' columnSpacing={5} sx={{ justifycontent: 'center' , display: 'contents' }}>
          <Grid item sx={{  display: 'contents' , justifyContent: 'flex-start' }}>
            <Logo />
          </Grid>
          <Grid item className={styles.searchBar}>
            <SearchBar />
          </Grid> 
          <Grid item xs   sx={{ display: 'flex',
          justifyContent: 'flex-start',
          p: 1,
          m: 1,  }}>
            <Button component={Link} sx={{ color: '#e1e1fc' }}  noLinkStyle href="/">Home</Button>
            <Button sx={{ color: '#e1e1fc' }} >Activity</Button>
            <Button variant='contained' sx={{  color: '#e1e1fc' }}>Explore</Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Header;