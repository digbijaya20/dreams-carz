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


const useStyles = makeStyles((theme) => ({
  imageStyle: {
    width: "90%",
  },
  subText: {
    color: "rgba(0, 0, 0, 0.54)",
    marginTop: "7px",
  },
  cardStyle: {
    // maxWidth: 350,
    // color: 'rgba(0, 0, 0, 0.45)',
    marginTop: "30px",
    backgroundColor: "#ecf9ff",
    boxShadow: "none",

    "&:hover": {
      backgroundColor: "#70d1e0",
      boxShadow: " 0 3px 10px rgb(0 0 0 / 0.2)",
    },
  },
  btnStyle: {
    marginTop: "10px",
    backgroundColor: "#70d1e0",
  },
  headingStyle: {
    // color: "#70d1e0",
    // fontSize: "30px",
    fontWeight: "bold",
    paddingTop: "30px",
    paddingButtom: "30px",
  },
  headingSubText: {
    color: "rgba(0, 0, 0, 0.54)",
    fontSize: "15px",
    fontWeight: "bold",
    // marginTop:"7px",
  },
  headingBorder: {
    borderTop: "4px solid #70d1e0",
    width: "30%",
    display: "inline-block",
  },
  cardTitle: {
    fontSize: "20px",
    fontWeight: "bold",
    marginTop: "20px",
  },
  cardText: {
    fontSize: "15px",
    marginTop: "20px",
    fontWeight: "bold",
    color: "rgba(0, 0, 0, 0.45)",
  },
}));
const Contact = () => {
  const classes = useStyles();
  return (
    <Container>
      <Box textAlign="center" mb={5}>
        <Typography
          variant="h3"
          component="h5"
          className={classes.headingStyle}
        >
          Contact Us
        </Typography>
        <Box className={classes.headingBorder}></Box>
        <Typography
          variant="h6"
          className={classes.headingSubText}
          component="h6"
        >
          Our team of customer care ninjas is ready to here from you
        </Typography>
      </Box>

      <Grid container spacing={3}>
        <Grid item sm={12} xs={12} md={6} lg={6}>
          <Typography variant="h4">Reah out to us!</Typography>
          <Typography>
            Got a question about thebigbreak? Are you intrested in partnering
            with us? Have some suggestion or just want to say hi? Contact us:
          </Typography>
        </Grid>
        <Grid item sm={12} xs={12} md={6} lg={6}>
          <Typography variant="h4">Customer Care</Typography>
          <Typography>
            Not sure where to start? Need help adding thet extra mojo to your
            landing page? Just visit our help center or get in touch with us:
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contact;
