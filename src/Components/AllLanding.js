import { Box, Button, Container } from "@material-ui/core";

import PerfectPlace from "./PerfectPlace";
import HowItActs from "./HowItActs";
import BestCustomerExp from "./BestCustomerExp";
import OurProducts from "./OurProducts";
import OurFleet from "./OurFleet";
// import Booking from "./Booking";

function AllLanding() {
  return (
    <Box className="App" mt={5}>
      <Container>
        <PerfectPlace />
        {/* <Booking/> */}
        <Box display='flex' justifyContent='center'  alignItems='center'>
        <a target="_blank" rel="noreferrer" href="https://forms.gle/sTbXWVcjn5zFtWVt5">
        <Button variant='contained' size='large' color='primary'>Book Now</Button>
        </a>
        </Box>
      </Container>
      
      <Box  mt={4} pb={4}>
        <HowItActs />
      </Box>
      <Box  mt={4} pb={4}>
        <OurFleet />
      </Box>
      <Box  mt={4} pb={4}>
        <OurProducts />
      </Box>
      <Box  mt={4} pb={4}>
        <BestCustomerExp />
      </Box>
    </Box>
  );
}

export default AllLanding;
