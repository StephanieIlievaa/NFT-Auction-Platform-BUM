import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Logo from "../logo/Logo";
import SearchBar from "../SearchBar/SearchBar";
import styles from "./Header.module.scss";

const pages = ["Home", "Activity"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  // const handleOpenUserMenu = (event) => {
  //   setAnchorElUser(event.currentTarget);
  // };
  
  // const handleCloseUserMenu = () => {
  //   setAnchorElUser(null);
  // };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar 
    sx={{ mx: 'auto' }}
    className={styles.wrapper} position="static">
      <Container className={styles.container} maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 5, display: { xs: "none", md: "flex" } }}
          >
            <Logo className={styles.logo} />
          </Typography>
          <SearchBar />

          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            <Logo />
          </Typography>
          <Box
            sx={{
              justifyContent: "flex-end",
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              gap: "10px",
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
            <Button
              className={styles.exploreBtn}
              variant="contained"
              sx={{ color: "#e1e1fc", justifyContent: "center" }}
            >
              Explore
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;

// import Container from "@mui/material/Container";
// import Grid from "@mui/material/Grid";
// import Logo from "../logo/Logo";
// import Link from "../link/Link.jsx";
// import styles from "./Header.module.scss";
// import SearchBar from "../SearchBar/SearchBar";
// import Button from "@mui/material/Button";

// export default function Header() {
//   return (
//     <div className={styles.wrapper} >
//       <Container className={styles.container} >
//         <Grid container>
//           <Grid item className={styles.logo}>
//             <Logo />
//           </Grid>
//           <Grid item className={styles.searchBar}>
//             <SearchBar />
//           </Grid>
//           <Grid item>
//             <Button
//               className={styles.homeBtn}
//               component={Link}
//               sx={{ color: "#e1e1fc" }}
//               noLinkStyle
//               href="/"
//             >
//               Home
//             </Button>
//             <Button className={styles.activityBtn} sx={{ color: "#e1e1fc" }}>
//               Activity
//             </Button>
//             <Button
//               className={styles.exploreBtn}
//               variant="contained"
//               sx={{ color: "#e1e1fc",justifyContent: 'center' }}
//             >
//               Explore
//             </Button>
//           </Grid>
//         </Grid>
//       </Container>
//     </div>
//   );
// }
