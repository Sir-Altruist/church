import React from "react";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { NavLink } from "react-router-dom";
import { Box, Menu, Container, MenuItem } from "@mui/material";
import AdbIcon from "@mui/icons-material/Adb";
import IconButton from "@mui/material/IconButton";
// import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
// import Tooltip from "@mui/material/Tooltip";
import MenuIcon from "@mui/icons-material/Menu";

// const useStyles = makeStyles((theme) => ({
//   navLinks: {
//     display: "flex",
//     marginLeft: theme.spacing(5),
//   },
// }));

// const pages = ["Products", "Pricing", "Blog"];
// const settings = ["Profile", "Account", "Dashboard", "Logout"];
const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  // const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  // const handleOpenUserMenu = (event) => {
  //   setAnchorElUser(event.currentTarget);
  // };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  // const handleCloseUserMenu = () => {
  //   setAnchorElUser(null);
  // };
  return (
    <AppBar position="static" sx={{ background: "transparent" }}>
      <Container maxWidth="xl">
        <Toolbar>
          <Box sx={{ ml: "30px", display: { xs: "none", md: "flex" } }}>
            <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component={NavLink}
              to="/"
              sx={{
                mr: 1,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              LOGO
            </Typography>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
                height: "70%",
              }}
            >
              <MenuItem
                component={NavLink}
                to={`/about-us`}
                // sx={{ width: "300px" }}
                onClick={handleCloseNavMenu}
              >
                <Typography textAlign="center">About</Typography>
              </MenuItem>
              <MenuItem
                component={NavLink}
                to={`/event`}
                sx={{ width: "300px" }}
                onClick={handleCloseNavMenu}
              >
                <Typography textAlign="center">Blog</Typography>
              </MenuItem>
              <MenuItem
                component={NavLink}
                to={`/blog`}
                sx={{ width: "300px" }}
                onClick={handleCloseNavMenu}
              >
                <Typography textAlign="center">Event</Typography>
              </MenuItem>
              <MenuItem
                component={NavLink}
                to={`/sermon`}
                sx={{ width: "300px" }}
                onClick={handleCloseNavMenu}
              >
                <Typography textAlign="center">Sermon</Typography>
              </MenuItem>
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component={"a"}
            href=""
            sx={{
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button
              component={NavLink}
              to={`/about`}
              sx={{
                my: 2,
                fontWeight: "bold",
                color: "white",
                display: "block",
              }}
            >
              About
            </Button>
            <Button
              component={NavLink}
              to={`/event`}
              sx={{
                my: 2,
                fontWeight: "bold",
                color: "white",
                display: "block",
              }}
            >
              Event
            </Button>
            <Button
              component={NavLink}
              to={`/blog`}
              sx={{
                my: 2,
                fontWeight: "bold",
                color: "white",
                display: "block",
              }}
            >
              Blog
            </Button>
            <Button
              component={NavLink}
              to={`/sermon`}
              sx={{
                my: 2,
                fontWeight: "bold",
                color: "white",
                display: "block",
              }}
            >
              Sermon
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
