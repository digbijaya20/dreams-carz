import {
    Box, List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Container, Grid, Typography
} from '@material-ui/core';
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
import jeep from '../Assets/images/jeep.png';


import { makeStyles } from '@material-ui/core/styles';
// import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles((theme) => ({
    headingStyle: {
        // color: "#70d1e0",
        // fontSize: "30px",
        fontSize: "40px",
        fontWeight: 700,
        paddingTop: "30px",
        paddingButtom: "30px",
        [theme.breakpoints.down("md")]: {
            fontSize:"30px",
            textAlign:'center'
          },
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
    mainHeading: {
        fontWeight: 700,
        fontSize: "50px",
    },
    subHeading: {
        fontWeight: "bold",
    },
    subText: {
        color: 'rgba(0, 0, 0, 0.54)',
        marginTop: "7px",
        fontWeight: "bold",
    },
    iconList: {
        minWidth: "30px",
        color:'#EF4444'
      },
    imageBStyle: {
        width: '100%',
        height: '100%'
    },
    listText:{
        fontWeight: 600,
        fontSize:'20px'

    }



}))
const BestCustomerExp = () => {
    const classes = useStyles();

    const listIteams = [
        'Competitive Pricing ', 
        'Easier Rent on Your Budget', 
        'Most Flexible Payment Plans', 
        'Assistance 24/7', 
        'Best Used Car Dealership', 
        'The Best Extented Auto Warranties', 
        
    ]
    return (
        <Container>

            <Box textAlign="center" pb={4}>
                <Typography
                    variant="h1"
                    className={classes.headingStyle}
                >
                    Best Customer Experience
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
            <Grid container alignItems='center'>
                <Grid item sm={12} xs={12} md={6} lg={6} className={classes.imageContainer} >
                    <Box
                    // className={classes.imageOBox}
                    >
                        {/* <img src={perfectPlace} alt="perfct Place"  className={classes.imageOStyle} /> */}
                        <img src={jeep} alt="perfct Place" className={classes.imageBStyle} />
                    </Box>
                    <Box>

                    </Box>
                </Grid>
                <Grid item sm={12} xs={12} md={6} lg={6} >
                    <List >
                        {listIteams.map((each) => {
                            return (
                                <ListItem className={classes.listText}>
                                    <ListItemIcon className={classes.iconList}>
                                        <DoubleArrowIcon />
                                    </ListItemIcon>
                                    <ListItemText classes={{primary:classes.listText}} primary={each} />
                                </ListItem>
                            )
                        })}
                    </List>

                </Grid>

            </Grid>

        </Container>
    )
}

export default BestCustomerExp;