import { Box, Typography } from "@mui/material"
import LinearWithValueLabel from "./percentageBar";

const PersonalityProgress = ({ messageData, messagesArray, scoreData })=>{
    return(
        <Box sx={{ display: "flex", alignItems: "center", gap: "20px", borderBottom:"3px solid lightgray", paddingBottom:"2rem" }}>
                        <Typography sx={{ width: "15%", paddingLeft: "25px" }} >{messageData}</Typography>
                        <Box sx={{ width:"80%"}}>
                            <Box sx={{display:"flex",paddingRight:"12.5px"}}>
                                {messagesArray.map((msg, index) => (
                                    <Typography
                                        key={index}
                                        sx={{
                                            width: '17%',
                                            paddingLeft: '25px',
                                            fontWeight: scoreData > index * 20 && scoreData <= (index + 1) * 20 ? 'bold' : 'normal',
                                            borderLeft:"2px solid gray",
                                            borderRight:"2px solid gray",
                                        }}
                                    >
                                        {msg}
                                    </Typography>
                                ))}
                            </Box>
                            <LinearWithValueLabel scoreData={scoreData} />
                        </Box>
                    </Box>
    )
}
export default PersonalityProgress;