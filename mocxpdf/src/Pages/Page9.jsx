import { Box, Typography } from '@mui/material';
import React from 'react';
import DualSideChart from '../Components/DualSideChart';
// import bgTable from "../Assets/images/bgTable.png";

const Page9 = () => {
    return (
        <Box >
            <Box></Box>
            <Box sx={{ display:'flex', flexDirection:"column", gap:"1rem", fontSize:"15px"}}>
                <Typography variant="p" >A personality test is a tool to understand <b>who you are as a person</b>. This is important for an organisation because people with different personalities approach a given task in different ways.</Typography>
                <Typography variant="p" >Below map classifies your personality based on the traits of the <b>"Big Five"</b> Model. Remember that a low percentile does not mean bad performance and high percentile does not mean good performance, as there is no concept of performance in personality.</Typography>
                <Typography variant="p" >The personality map below shows where your position is relative to the population across different personality traits. Each bar represents your Z-score for a personality trait.</Typography>
                <Box 
                // sx={{ height:"540px", backgroundImage: `url(${bgTable})`, backgroundRepeat:"no-repeat", backgroundSize:"1330px", backgroundPosition:"center" }}
                >
                    <DualSideChart />
                </Box>
                <Box sx={{ display:'flex', flexDirection:"column"}}>
                    <Typography variant="p" sx={{fontWeight:"bold"}} >The Z-Score</Typography>
                    <Typography variant="p" >For each trait, a Z-score is provided. The Z-score measures the number of standard deviations the score is away from mean of norm. A Z-score more than +0.44 means the candidate is in the top 33%, whereas a Z-score of less than -0.44 represents the candidate is in the lowest 33%.</Typography>
                </Box>
                <Box sx={{ display:'flex', flexDirection:"column"}}>
                    <Typography variant="p" sx={{fontWeight:"bold"}} >What does "Low", "Medium" or "High" mean?</Typography>
                    <Typography variant="p" >The classification above in terms of "Low", "Medium" or "High" is a relative positioning of you as compared to the large sample of entry level candidates that have been assessed. For instance, a person who is high on Extraversion is as extraverted as the top 33% people in the control group .He/She may not still be extraverted enough for a given role or a standard set by another individual.</Typography>
                </Box>
                <Box sx={{ display:'flex', flexDirection:"column"}}>
                    <Typography variant="p" sx={{fontWeight:"bold"}} >"Low" does not mean "Bad"</Typography>
                    <Typography variant="p" >A trait score of HIGH or LOW does not classify someone as GOOD or BAD. Every individual has a unique personality and different people in different kind of jobs need different personality combinations. A person with a given personality profile may be inclined to perform better in a sales job while another with a different personality may be more suitable for a software development role.</Typography>
                </Box>
            </Box>
            <Box></Box>
        </Box>
    )
}

export default Page9
