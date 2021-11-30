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

import { makeStyles } from "@material-ui/core/styles";
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
        borderTop: "4px solid #EF4444",
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
    termHeading: {
        fontWeight: 600,
    }
}));
const TermAndCondition = () => {
    const classes = useStyles();
    return (
        <Container>
            <Box textAlign="center" mb={5}>
                <Typography
                    variant="h3"
                    component="h5"
                    className={classes.headingStyle}
                >
                    Terms And Conditions
                </Typography>
                <Box className={classes.headingBorder}></Box>
                <Typography
                    variant="h6"
                    className={classes.headingSubText}
                    component="h6"
                >
                    Work in Progress.....
                </Typography>
            </Box>

            <Box>
                <Typography variant='h5' className={classes.termHeading}>Payment process</Typography>
                <ul>
                    <li>Rental charges has to be paid online for the duration chosen while booking the bike</li>
                </ul>
                <Typography variant='h5' className={classes.termHeading}>Delay</Typography>
                <ul>
                    <li>A fee of min Rs.200 per hour will be charged for vehicle being returned after the grace period of 30 mins.</li>
                </ul>
                <Typography variant='h5' className={classes.termHeading}>Documents</Typography>
                <ul>
                    <li>Members should have a valid Four-wheeler driving license which has to be uploaded along with Aadhar card or Passport as a proof.</li>
                    <li>Original Driving license is to be deposited before picking up the vehicle and the same Will be returned once the vehicle is dropped.</li>
                </ul>

                <Typography variant='h5' className={classes.termHeading}>Handover process</Typography>
                <ul>
                    <li>Lessee(a person who holds the lease of a property) has to inform us 2 hrs in advance before the end of the contract Period.</li>
                    <li>Pick-up date and time will be mutually decided by lessee and us. The drop –off location will be the same as the pick-up location.</li>
                    <li>Lessee has to be present at the agreed date and time.</li>
                </ul>
                <Typography variant='h5' className={classes.termHeading}>Damage policy</Typography>
                <ul>
                    <li>The Lessee agrees to pay for any damage to, loss of, or any theft (disappearance) of parts of car, regardless of cause or fault. Item damaged beyond repair will be paid for at its Market Price.</li>
                    <li>Pick-up date and time will be mutually decided by lessee and us. The drop –off location will be the same as the pick-up location.</li>
                    <li>Lessee has to be present at the agreed date and time.</li>
                </ul>
                <Typography variant='h5' className={classes.termHeading}>Fuel Policy</Typography>
                <ul>
                   
                    <li>Fuel is client’s responsibility. We will be giving you sufficient fuel to reach the nearest fuel pump.</li>
                </ul>
                <Typography variant='h5' className={classes.termHeading}>Maintenance</Typography>
                <ul>
                   
                    <li>The customer is liable for maintaining the vehicle while on road. Any mechanical failures should be reported immediately.</li>
                    <li>Customers may be held responsible in case of a mechanical failure resulting due to negligence of the normal maintenance while on the trip.</li>
                </ul>
                <Typography variant='h5' className={classes.termHeading}>Over speeding</Typography>
                <ul>
                   
                    <li>The cars have to be ridden within permissible limits. The speed limit for each vehicle is different which will be specified at the time of booking.</li>
                    <li> You have to be under the speed limit specified by the company(i.e 100 KM/hr) or the speed limit specified by the governing authority, whichever is lesser.</li>
                    <li>If the speed limit exceed from 100 km/hr then fine amount will be Rs. 1000/-.</li>
                </ul>
                <Typography variant='h5' className={classes.termHeading}>Cap on riding km</Typography>
                <ul>
                   
                    <li>Maximum distance to be covered on 24 hours is 300km. for extension of distance will be charged Rupees 5/- per Km.</li>
                    
                </ul>
                <Typography>BY AGREEING TO THIS RELEASE, THE RIDER CERTIFIES THAT HE/SHE HAS READ THIS RELEASE AND FULLY UNDERSTAND IT AND NOT RELYING ON ANY STATEMENTS OR REPRESNTATIONS OF ANY OF THE RELEASED PARTIES, AND HAVE BEEN GIVEN THE OPPORTUNITY AND SUFFICIENT TIME TO READ AND ASK QUESTIONS REGARDING THIS RELEASE.</Typography>
            </Box>
        </Container>
    );
};

export default TermAndCondition;
