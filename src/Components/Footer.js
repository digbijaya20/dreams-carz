import {
  Box,
  Container,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  TableFooter,
  Typography,
} from "@material-ui/core";
import React from "react";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { makeStyles } from "@material-ui/core/styles";


import { faEnvelope, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  imageStyle: {
    width: "90%",
  },
  mainList: {},
  itemList: {
    paddingLeft: "0px",
    paddingBottom: "0px",
    color: "#A8AACE",
    "&:hover": {
      color: "#fff",
    },
  },
  iconList: {
    minWidth: "20px",
  },
  styleIcon: {
    fonnSize: "1rem",
    width: "0.6em",
    color: "#A8AACE",
  },
  footerTitle: {
    // color: "#A8AACE",
    color: "#CECEF2",
    fontWeight: "bold",
  },
  tagLine: {
    color: "#A8AACE",
    marginTop: "1rem",
  },

  footerIcon: {
    color: "#A8AACE",
  },
  fontStyleIcon: {
    color: '#EF4444'
  },
  linkStyle:{
    color:'inherit',
    textDecoration:'none'
  }
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <Container>
      <Grid container>
        <Grid item lg={2} md={3} sm={6} xs={6}>
          <Typography variant="h6" className={classes.footerTitle}>
            Our Links
          </Typography>
          <List
            // component="nav"
            // disablePadding="false"
            aria-label="main mailbox folders"
            className={classes.mainList}
          >
            <ListItem className={classes.itemList}>
              <ListItemIcon className={classes.iconList}>
                <ArrowForwardIosIcon className={classes.styleIcon} />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem className={classes.itemList}>
              <ListItemIcon className={classes.iconList}>
                <ArrowForwardIosIcon className={classes.styleIcon} />
              </ListItemIcon>
              <ListItemText primary="About Us" />
            </ListItem>
            <ListItem className={classes.itemList}>
              <ListItemIcon className={classes.iconList}>
                <ArrowForwardIosIcon className={classes.styleIcon} />
              </ListItemIcon>
              <ListItemText primary="Services" />
            </ListItem>
            <ListItem className={classes.itemList}>
              <ListItemIcon className={classes.iconList}>
                <ArrowForwardIosIcon className={classes.styleIcon} />
              </ListItemIcon>
              <ListItemText primary="Models" />
            </ListItem>
            <ListItem className={classes.itemList}>
              <ListItemIcon className={classes.iconList}>
                <ArrowForwardIosIcon className={classes.styleIcon} />
              </ListItemIcon>
              <ListItemText primary="Blog" />
            </ListItem>
          </List>
        </Grid>
        <Grid item lg={2} md={3} sm={6} xs={6}>
          <Typography variant="h6" className={classes.footerTitle}>
            Other Links
          </Typography>
          <List
            // component="nav"
            // disablePadding="false"
            aria-label="main mailbox folders"
            className={classes.mainList}
          >
            <ListItem className={classes.itemList}>
              <ListItemIcon className={classes.iconList}>
                <ArrowForwardIosIcon className={classes.styleIcon} />
              </ListItemIcon>
              <Link to='term-condition' className={classes.linkStyle}>
              <ListItemText primary="FAQ" />
              </Link>
            </ListItem>
            <ListItem className={classes.itemList}>
              <ListItemIcon className={classes.iconList}>
                <ArrowForwardIosIcon className={classes.styleIcon} />
              </ListItemIcon>
              <Link to='term-condition' className={classes.linkStyle}>
              <ListItemText primary="Contact Us" />
              </Link>
            </ListItem>
            <ListItem className={classes.itemList}>
              <ListItemIcon className={classes.iconList}>
                <ArrowForwardIosIcon className={classes.styleIcon} />
              </ListItemIcon>
              <Link to='term-condition' className={classes.linkStyle}>
              <ListItemText primary="Privacy Policy" />
              </Link>
            </ListItem>
            <ListItem className={classes.itemList}>
              <ListItemIcon className={classes.iconList}>
                <ArrowForwardIosIcon className={classes.styleIcon} />
              </ListItemIcon>
              <Link to='term-condition' className={classes.linkStyle}>
              <ListItemText primary="Terms & Conditions" />
              </Link>
            </ListItem>
          </List>
        </Grid>
        <Grid item lg={2} md={3} sm={6} xs={6}>
          <Typography variant="h6" className={classes.footerTitle}>
            Call Now
          </Typography>
          <List
            // component="nav"
            // disablePadding="false"
            aria-label="main mailbox folders"
            className={classes.mainList}
          >
            <ListItem className={classes.itemList}>
              <ListItemIcon className={classes.iconList}>
                <FontAwesomeIcon icon={faPhoneAlt} className={classes.fontStyleIcon} />
                {/* <ArrowForwardIosIcon className={classes.styleIcon} /> */}
              </ListItemIcon>
              <ListItemText primary="+91 700-842-5519" />
            </ListItem>
            <ListItem className={classes.itemList}>
              <ListItemIcon className={classes.iconList}>
                <FontAwesomeIcon icon={faPhoneAlt} className={classes.fontStyleIcon} />
                {/* <ArrowForwardIosIcon className={classes.styleIcon} /> */}
              </ListItemIcon>
              <ListItemText primary="+91 775-107-2229" />
            </ListItem>

          </List>
        </Grid>
        <Grid item lg={2} md={3} sm={6} xs={6}>
          <Typography variant="h6" className={classes.footerTitle}>
            Mail
          </Typography>
          <List
            // component="nav"
            // disablePadding="false"
            aria-label="main mailbox folders"
            className={classes.mainList}
          >
            <ListItem className={classes.itemList}>
              <ListItemIcon className={classes.iconList}>
                <FontAwesomeIcon icon={faEnvelope} className={classes.fontStyleIcon} />              </ListItemIcon>
              <ListItemText primary="contact.dreamcars@gmail.com" />
            </ListItem>

          </List>
        </Grid>
        <Grid item lg={4} md={12} sm={12} xs={12}>
          <Box textAlign="center">
            <Typography variant="h2">
              <span style={{ color: "#ffffff" }}>Dreams</span>
              <span style={{ color: "#EF4444" }}>Carz</span>
            </Typography>
            <Typography className={classes.tagLine}>
              DreamsCarz is a Car renting and selling company located in Bhubaneswar which has high quality cars and top rated service.
            </Typography>
            <Box className={classes.footerIcon} mt={2} mb={2}>
              <FacebookIcon />

              <TwitterIcon style={{ color: "#00E6CD" }} />
              <a href="https://www.instagram.com/thebigbreak.in/">
                <InstagramIcon />
              </a>
              <WhatsAppIcon style={{ color: "#00E6CD" }} />
              <LinkedInIcon />

              {/* <InstagramIcon /> */}
            </Box>
            <Typography style={{ color: "#E7E9EB" }}>Copyright
              &copy;<span>2021 DreamsCarz. All rights reserved.</span>
            </Typography>
            <Typography style={{ color: "#E7E9EB" }}>
              Manage and Mainained by{" "}<a target='_blank' rel='sgsgs' href="https://thebigbreak.in/">thebigbreak.in</a>
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Footer;
