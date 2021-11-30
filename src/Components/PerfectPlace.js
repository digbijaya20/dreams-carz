import { Box, Button, Card, CardContent, Grid, Typography } from '@material-ui/core';
import perfectPlace from '../Assets/images/blob.svg';
import mclarenBig from '../Assets/images/mclaren-orange-big.png';

import { makeStyles } from '@material-ui/core/styles';
// import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles((theme) => ({
    // imageContainer:{
    //       position:'relative',
    // },
    //   imageOBox:{
    //     width: '30em',
    //     height: '10em',
    //     position: 'absolute',
    //     right: '-5em',
    //     top: '-12em',
    //     zIndex: '-1',
    //     transform: 'rotate(-30deg)',
        
    // },
    // imageOStyle: {
    //     width: '100%',
    //     height: 'auto',
    //     maxHeight: 'max-content',
    //   },
    mainHeading:{
        fontWeight: 700,
        fontSize:"50px",
    },
    subHeading:{
        fontWeight: "bold",
    },
    subText:{
        color:'rgba(0, 0, 0, 0.54)',
        marginTop:"7px",
        fontWeight: "bold",
    },
    cardStyle: {
        maxWidth: 350,
        color:'rgba(0, 0, 0, 0.45)',
        marginTop:"15px",
        // boxShadow:'none',
      },
      btnStyle:{
        marginTop:"10px",
        marginRight:'10px',
      },
      imageBStyle:{
          width:'650px',
          height:'100%'
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
                    <Button className={classes.btnStyle} color='primary' variant='contained'>
                        Book Your Ride 
                    </Button>
                    <Button className={classes.btnStyle} color='primary' variant= 'outlined'>
                        Sell Your Car 
                    </Button>
                
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