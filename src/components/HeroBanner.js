import {Box, Button, Typography} from "@mui/material";
import HeroBannerImage from "../assets/images/banner.png"

export default function HeroBanner() {
    return (
        <Box sx={{mt: {lg: "212px", xs: "70px"}, ml: {sm: "50px"}}} position={"relative"} p="20px">
            <Typography color="#ff2625" fontWeight="600" fontSize="26px">
                Fitness Club
            </Typography>
            <Typography fontWeight={700} sx={{fontSize: {lg: "44px", xs: "40px"}}} mb="30px" mt="30px">
                Sweat, Smile <br/> And Repeat
            </Typography>
            <Typography fontSize={"22px"} lineHeight="35px" mb={4}>
                Check out the most effective exercises.
            </Typography>
            <Button variant="contained" href="#exercises" color="error"
                    sx={{backgroundColor: "#ff2625", padding: "10px 15px"}}>
                EXPLORE EXERCISES
            </Button>
            <Typography fontWeight={600} color="#ff2625" sx={{display: {lg: "block", xs: "none"}, opacity: 0.1}}
                        fontSize={"200px"}>
                Exercise
            </Typography>
            <img src={HeroBannerImage} alt="hero" className="hero-banner-img"/>
            {/*<Stack>*/}

            {/*</Stack>*/}
        </Box>
    );
}