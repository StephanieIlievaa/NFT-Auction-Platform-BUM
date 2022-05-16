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
    <AppBar sx={{ mx: "auto" }} className={styles.wrapper} position="static">
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
                variant="outlined"
                onClick={handleCloseNavMenu}
                sx={{ m: 1, color: "#e1e1fc", display: "block" }}
              >
                {page}
              </Button>
            ))}
            <Button
              className={styles.exploreBtn}
              variant="outlined"
              sx={{ m: 1, display: "block" }}
            >
              Explore
            </Button>
            <Button
              className={styles.signUpBtn}
              variant="contained"
              sx={{
                m: 1,
                color: "#e1e1fc",
                backgroundColor: "white",
                display: "block",
              }}
            >
              Sign Up
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
