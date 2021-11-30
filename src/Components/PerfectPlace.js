import { Box, Button, Card, CardContent, Grid, Typography } from '@material-ui/core';
import perfectPlace from '../Assets/images/blob.svg';
import mclarenBig from '../Assets/images/mclaren-orange-big.png';

import { makeStyles } from '@material-ui/core/styles';
// import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles((theme) => ({
    mainHeading:{
        fontWeight: 700,
        fontSize:"50px",
        [theme.breakpoints.down("md")]: {
            fontSize:"30px",
            textAlign:'center'
          },
    },
    subHeading:{
        fontWeight: "bold",
        [theme.breakpoints.down("md")]: {
            // fontSize:"40px",
            textAlign:'center'
          },
    },
    subText:{
        color:'rgba(0, 0, 0, 0.54)',
        marginTop:"7px",
        fontWeight: "bold",
        [theme.breakpoints.down("md")]: {
            // fontSize:"40px",
            textAlign:'center'
          },
    },
    cardStyle: {
        maxWidth: 350,
        color:'rgba(0, 0, 0, 0.45)',
        marginTop:"15px",
      },
      btnStyle:{
        marginTop:"10px",
        marginRight:'10px',
        
      },
      btnCont:{
        [theme.breakpoints.down("md")]: {
            textAlign:'center'
          },
      },
      imageBStyle:{
          width:'650px',
          height:'100%',
          [theme.breakpoints.down("md")]: {
            width:'350px',
          },
      }
     


}))
const PerfectPlace = () =>{
    const classes = useStyles();
    return(
        <Box mt={4}>
            <Grid container alignItems='center'>
                <Grid item sm={12} xs={12} md={6} lg={6} >
                    <Typography className={classes.mainHeading} variant="h1" >
                    Rent The Best Qulity Car's With Us
                    </Typography>
                    <Typography className={classes.subText} variant="h5" color="default" >
                    Always choose the best car from our local stores or order it remotely at the best price for you and get the best quality cars for as long as you like
                    </Typography>
                    <Box className={classes.btnCont}>
                    <a target="_blank" rel="noreferrer" href="https://forms.gle/sTbXWVcjn5zFtWVt5">
                    <Button className={classes.btnStyle} color='primary' variant='contained'>
                        Book Your Ride 
                    </Button>
                    </a>
                    <a target="_blank" rel="noreferrer" href="https://forms.gle/sTbXWVcjn5zFtWVt5">
                    <Button className={classes.btnStyle} color='primary' variant= 'outlined'>
                        Sell Your Car 
                    </Button>
                    </a>
                    </Box>
                
                </Grid>
                <Grid item sm={12} xs={12} md={6} lg={6} className={classes.imageContainer} >
                <Box 
                // className={classes.imageOBox}
                 >
                    {/* <img src={perfectPlace} alt="perfct Place"  className={classes.imageOStyle} /> */}
                    <img src={mclarenBig} alt="perfct Place"  className={classes.imageBStyle} />
                </Box>
                <Box>

                </Box>
                </Grid>
            </Grid>
            
        </Box>
    )
}

export default PerfectPlace;