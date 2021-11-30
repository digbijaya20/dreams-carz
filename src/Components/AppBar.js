import React from "react";
import {makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";

import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";
import logoLandscape from "../Assets/Logos/logo_landscape.png"
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  menuItems: {
    color: "#000",
    paddingLeft: "10px",
    paddingRight: "10px",
    fontSize: "17px",
    [theme.breakpoints.up("md")]: {
      marginRight: "20px",
      fontSize: "18px",
    },

    "&:hover": {
      color: "#EF4444",
      cursor: "pointer",
    },
  },
  title: {
    display: "block",
    fontWeight: "bold",
    color: "#000",
  },
  
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  imge:{
    width:'200px'
    
  }
}));

export default function NavBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <Link className="link-test" to="about">
      <Typography className={classes.menuItems} variant="h6" noWrap>
        About
      </Typography>
      </Link>
      <Link className="link-test" to="services">
      <Typography className={classes.menuItems} variant="h6" noWrap>
        Services
      </Typography>
      </Link>
      <Link className="link-test" to="contact">
      <Typography className={classes.menuItems} variant="h6" noWrap>
        Connect
      </Typography>
      </Link>
      <Link className="link-test" to="contact">
      <Typography className={classes.menuItems} variant="h6" noWrap>
        Blog
      </Typography>
      </Link>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar
        position="static"
        style={{
          borderRadius: "4px",
          backgroundColor: "#fff",
          boxShadow: "none",
        }}
      >
        <Toolbar>
          <Link className="link-test" to="/">
            {/* <Typography className={classes.title} variant="h2" noWrap>
              Dreams<span style={{ color: "#EF4444" }}>Carz</span>
            </Typography> */}
            <img src={logoLandscape} alt="logo" className={classes.imge}/>
          </Link>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
          <Link className="link-test" to="about">
            <Typography className={classes.menuItems} variant="h6" noWrap>
              About
            </Typography>
            </Link>
            <Link className="link-test" to="services">
            <Typography className={classes.menuItems} variant="h6" noWrap>
              Services
            </Typography>
            </Link>
            <Link className="link-test" to="contact">
              <Typography className={classes.menuItems} variant="h6" noWrap>
                Connect
              </Typography>
            </Link>
            <Link className="link-test" to="contact">
            <Typography className={classes.menuItems} variant="h6" noWrap>
              Blog
            </Typography>
            </Link>
            
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              style={{ color: "#000" }}
            >
              <MenuIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}
