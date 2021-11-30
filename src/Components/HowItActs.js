import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@material-ui/core";

import {  makeStyles } from "@material-ui/core/styles";
// import DeleteIcon from '@material-ui/icons/Delete';

import {
  faCalendarAlt,
  faCarSide,
  faMapMarkedAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



const useStyles = makeStyles((theme) => ({
  imageStyle: {
    width: "90%",
  },
  subText: {
    color: "rgba(0, 0, 0, 0.54)",
    marginTop: "7px",
  },
  mainCardContent:{
    display:'flex',
    justifyContent:'center',
    flexDirection:'column', 
    alignItems:'center'
  },
  cardStyle: {
    // maxWidth: 350,
    // color: 'rgba(0, 0, 0, 0.45)',
    marginTop: "30px",
    // backgroundColor: "#ecf9ff",
    boxShadow: "none",

    
  },
  btnStyle: {
    marginTop: "10px",
    backgroundColor: "#70d1e0",
  },
  headingStyle: {
    // color: "#70d1e0",
    // fontSize: "30px",
    fontSize:"40px",
    fontWeight: 700,
    paddingTop: "30px",
    paddingButtom: "30px",
  },
  headingSubText: {
    color: "rgba(0, 0, 0, 0.54)",
    // fontSize: "15px",
    fontWeight: "bold",
    // marginTop:"7px",
  },
  headingBorder: {
    borderTop: "4px solid #EF4444",
    width: "30%",
    display: "inline-block",
  },
  cardTitle: {
    fontSize: "20px",
    fontWeight: "bold",
    marginTop: "50px",
    textAlign:'center',
  },
  cardText: {
    fontSize: "15px",
    marginTop: "20px",
    fontWeight: "bold",
    textAlign:'center',
    color: "rgba(0, 0, 0, 0.45)",
  },
  iconStyle:{
    boxShadow:'0 1.3px 12px -3px rgba(0, 0, 0, 0.4)',
    textAlign:'center',
    color:'#EF4444',
    fontSize:'2rem',
    width:'22%',
    padding:'1rem'
  },
}));
const HowItActs = () => {
  const classes = useStyles();
  return (
    <Container>
      <Box textAlign="center" pb={4}>
        <Typography
          variant="h1"
          className={classes.headingStyle}
        >
          Our Working Steps
        </Typography>
        <Box className={classes.headingBorder}></Box>
        <Typography
          variant="h5"
          className={classes.headingSubText}
          component="h5"
        >
          Businesses generally promote their brand, products, and services by
          identifying audiance
        </Typography>
      </Box>

      <Grid container spacing={3}>
        <Grid item sm={12} xs={12} md={4} lg={4}>
          <Card className={classes.cardStyle}>
            <CardContent className={classes.mainCardContent}>
              <CardMedia className={classes.iconStyle}>
              <FontAwesomeIcon icon={faMapMarkedAlt} />
              </CardMedia>

              <Typography
                className={classes.cardTitle}
                variant="h5"
                component="h5"
              >
                Choose Location
              </Typography>
              <Typography variant="h6" className={classes.cardText}>
              Find the nearest DreamsCarz point and book your car.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item sm={12} xs={12} md={4} lg={4}>
          <Card className={classes.cardStyle}>
            <CardContent className={classes.mainCardContent}>
            <CardMedia className={classes.iconStyle} style={{backgroundColor:'#EF4444', color:'#fff'}}>
              <FontAwesomeIcon icon={faCalendarAlt} />
              </CardMedia>
              <Typography
                className={classes.cardTitle}
                variant="h5"
                component="h5"
              >
                Pick-Up Date
              </Typography>
              <Typography variant="h6" className={classes.cardText}>
              Pickup the Best Date to rent a car for you.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item sm={12} xs={12} md={4} lg={4}>
          <Card className={classes.cardStyle}>
            <CardContent className={classes.mainCardContent}>
            <CardMedia className={classes.iconStyle} >
              <FontAwesomeIcon icon={faCarSide} />
              </CardMedia>
              <Typography
                className={classes.cardTitle}
                variant="h5"
                component="h5"
              >
                Book Your Car
              </Typography>
              <Typography variant="h6" className={classes.cardText}>
              Book your nice car with ease in one single click
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default HowItActs;
