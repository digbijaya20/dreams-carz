import {
    Box,

    Container,
    Grid,
    Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
    imageStyle: {
        width: "90%",
    },
    subText: {
        color: "rgba(0, 0, 0, 0.54)",
        marginTop: "7px",
    },
    mainCardContent: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center'
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
        fontSize: "40px",
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
    root: {
        textAlign: 'center',
        padding:'15px'
    },
    title:{
        fontSize:'20px',
        fontWeight:600,
    },
    img:{
        width:'100px'
    },
    price:{
        fontSize: "15px",
        fontWeight: "bold",
        color:'#EF4444'
    }

}));
const OurFleet = () => {
    const classes = useStyles();
    const cardData = [
        {
            id: 1,
            title: 'Micro',
            price:70,
            image: 'https://img.icons8.com/external-konkapp-detailed-outline-konkapp/64/EF4444/external-car-transportation-konkapp-detailed-outline-konkapp-5.png',
        },
        {
            id: 2,
            title: 'Mini',
            price:100,
            image: 'https://img.icons8.com/external-konkapp-detailed-outline-konkapp/64/EF4444/external-car-transportation-konkapp-detailed-outline-konkapp.png',
            
        },
        {
            id: 3,
            title: 'Prime Sedan',
            price:200,
            image: 'https://img.icons8.com/external-konkapp-detailed-outline-konkapp/64/EF4444/external-car-transportation-konkapp-detailed-outline-konkapp-6.png',
        },
        {
            id: 4,
            title: 'Prime SUV',
            price:250,
            image: 'https://img.icons8.com/external-konkapp-detailed-outline-konkapp/64/EF4444/external-car-transportation-konkapp-detailed-outline-konkapp-1.png',
        },
    ]
    return (
        <Container>
            <Box textAlign="center" pb={4}>
                <Typography
                    variant="h1"
                    className={classes.headingStyle}
                >
                    Our Awesome Fleet
                </Typography>
                <Box className={classes.headingBorder}></Box>
                <Typography
                    variant="h5"
                    className={classes.headingSubText}
                    component="h5"
                >
                    The widest variety of cars to choose from
                </Typography>
            </Box>

            <Grid container className={classes.root} spacing={4}>

                {cardData.map((each) => {
                    return (
                        <Grid item xs={12} sm={6} md={3} lg={3}>
                            <Card className={classes.root}>
                                <CardContent>
                                    <img src={each.image}alt={each.title} />
                                    <Typography className={classes.title}  gutterBottom>
                                        {each.title}
                                    </Typography>
                                    <Typography className={classes.price}  gutterBottom>
                                       <span style={{color:'#EF4444'}}>₹</span> {each.price}{"/- Hr"}
                                    </Typography>

                                </CardContent>
                                <CardActions>
                                    <Button variant='contained' fullWidth color='primary' size="medium">Book Now</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    )
                })}
            </Grid>
        </Container>
    );
};

export default OurFleet;
