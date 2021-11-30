import {
    Box,
    
    Container,
    Grid,
    Typography,
} from "@material-ui/core";
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from "@material-ui/core/styles";

import { useState } from "react";



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
    root: {
        width: '100%',
    },
    heading: {
        fontSize: '20px',
        fontWeight:600,
        flexBasis: '33.33%',
        flexShrink: 0,
        marginLeft:'30px',
        marginTop:'20px'
    },
    secondaryHeading: {
        fontSize: '15px',
        fontWeight:600,
        
    },
}));
const OurProducts = () => {
    const classes = useStyles();
    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    return (
        <Container>
            <Box textAlign="center" pb={4}>
                <Typography
                    variant="h1"
                    className={classes.headingStyle}
                >
                    Our Products
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

            <Grid container className={classes.root} spacing={4}>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <Accordion expanded={expanded === 'panel4'}  style={{backgroundColor:'#EF4444',color:'#fff'}}  onChange={handleChange('panel4')}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon style={{fontSize:'20px'}} />}
                            aria-controls="panel4bh-content"
                            id="panel4bh-header"
                            style={{paddingBottom:'25px',paddingTop:'25px'}}
                            
                        >
                            {/* <img src={carRent} height='50px'/> */}
                            <img src="https://img.icons8.com/pastel-glyph/64/ffffff/car-rental--v1.png" alt='icon'/>
                            <Typography className={classes.heading}>Car Rental</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography className={classes.secondaryHeading}>
                            Always choose the best car from our local stores or order it remotely at the best price for you and get the best quality cars for as long as you like
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} >
                    <Accordion expanded={expanded === 'panel1'}
                    style={{backgroundColor:'#ffb400',color:'#fff'}}
                     onChange={handleChange('panel1')}
                     >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel4bh-content"
                            id="panel4bh-header"
                            style={{paddingBottom:'32px',paddingTop:'32px'}}
                        >
                            <img src="https://img.icons8.com/ios/50/ffffff/car--v1.png" alt='resell'/>
                            <Typography className={classes.heading}
                            style={{marginTop:'10px'}}
                             >
                                 Car Dealership
                                 </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography className={classes.secondaryHeading}>
                                Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros,
                                vitae egestas augue. Duis vel est augue.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </Grid>
            </Grid>
        </Container>
    );
};

export default OurProducts;
