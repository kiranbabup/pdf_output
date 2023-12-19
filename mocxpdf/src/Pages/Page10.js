import { Box, Typography } from "@mui/material"
import dataset from "../Assets/data/personalityData.json"
import PersonalityProgress from "../Components/PersonalityProgress";

const Page10 = () => {
    const minValue = -2;
    const maxValue = 2;
    const convertToPercentage = (value) => {
        const clampedValue = Math.max(minValue, Math.min(maxValue, value));
        const percentage = ((clampedValue - minValue) / (maxValue - minValue)) * 100;
            return percentage;
    };
    
    const OpennessScore = convertToPercentage(dataset[0].zscore);
    const ConscientiousnessScore = convertToPercentage(dataset[1].zscore);
    const ExtraversionScore = convertToPercentage(dataset[2].zscore);
    const AgreeablenessScore = convertToPercentage(dataset[3].zscore);
    const EmotionalStabilityScore = convertToPercentage(dataset[4].zscore);

    const OpennessMessages = dataset[0].message;
    const ConscientiousnessMessages = dataset[1].message;
    const ExtraversionMessages = dataset[2].message;
    const AgreeablenessMessages = dataset[3].message;
    const EmotionalStabilityMessages = dataset[4].message;

    const addMessageData = (score, msg )=>{
        if (score >= 0 && score <= 20) {
            return msg[0];
        } else if (score > 20 && score <= 40) {
            return msg[1];
        } else if (score > 40 && score <= 60) {
            return msg[2];
        } else if (score > 60 && score <= 80) {
            return msg[3];
        } else if (score > 80 && score <= 100) {
            return msg[4];
        } else {
            return msg[0];
        }
    };
    const setOpennessMessage = addMessageData(OpennessScore, OpennessMessages);
    const setConscientiousnessMessage = addMessageData(ConscientiousnessScore, ConscientiousnessMessages);
    const setExtraversionMessage = addMessageData(ExtraversionScore, ExtraversionMessages);
    const setAgreeablenessMessage = addMessageData(AgreeablenessScore, AgreeablenessMessages);
    const setEmotionalStabilityMessage = addMessageData(EmotionalStabilityScore, EmotionalStabilityMessages);

    return (
        <Box>
            <Box></Box>
            <Box sx={{ display: 'flex', flexDirection: "column", gap: "1rem", fontSize: "10%" }}>
                <Typography>Detailed description of your profile on each of the personality aspect</Typography>
                <Box sx={{ paddingLeft: "30px", display:"flex", flexDirection:"column", gap:"1rem", paddingBottom:"6rem", borderBottom:"5px solid #368dba"}} >
                    <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
                        <Typography sx={{ fontSize: "1400%", fontWeight: "bold" }}>{dataset[0].personality}</Typography>
                        <Typography> - General appreciation for imagination and variety of experience.</Typography>
                    </Box>
                    <PersonalityProgress  messageData={setOpennessMessage} messagesArray={OpennessMessages} scoreData={OpennessScore} />
                    <Typography>You are likely to have a balanced view towards experimentation and learning. Hence, you are likely to exercise controlled experimentation in problem solving.</Typography>
                </Box>
                <Box sx={{ paddingLeft: "30px", display:"flex", flexDirection:"column", gap:"1rem", paddingBottom:"6rem", borderBottom:"5px solid #368dba" }} >
                    <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
                        <Typography sx={{ fontSize: "1400%", fontWeight: "bold" }}>{dataset[1].personality}</Typography>
                        <Typography> - General appreciation for imagination and variety of experience.</Typography>
                    </Box>
                    <PersonalityProgress  messageData={setConscientiousnessMessage} messagesArray={ConscientiousnessMessages} scoreData={ConscientiousnessScore} />
                    <Typography>You are likely to prefer a spontaneous approach over a systematic approach towards problem solving.</Typography>
                </Box>
                <Box sx={{ paddingLeft: "30px", display:"flex", flexDirection:"column", gap:"1rem", paddingBottom:"6rem", borderBottom:"5px solid #368dba" }} >
                    <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
                        <Typography sx={{ fontSize: "1400%", fontWeight: "bold" }}>{dataset[2].personality}</Typography>
                        <Typography> - General appreciation for imagination and variety of experience.</Typography>
                    </Box>
                    <PersonalityProgress  messageData={setExtraversionMessage} messagesArray={ExtraversionMessages} scoreData={ExtraversionScore} />
                    <Typography>You are likely to be assertive, talkative, cheerful and have a the tendency to seek stimulation in the company of others. Hence, you are likely to be successful in customer/team oriented jobs.</Typography>
                </Box>
                <Box sx={{ paddingLeft: "30px", display:"flex", flexDirection:"column", gap:"1rem", paddingBottom:"6rem", borderBottom:"5px solid #368dba" }} >
                    <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
                        <Typography sx={{ fontSize: "1400%", fontWeight: "bold" }}>{dataset[3].personality}</Typography>
                        <Typography> - General appreciation for imagination and variety of experience.</Typography>
                    </Box>
                    <PersonalityProgress  messageData={setAgreeablenessMessage} messagesArray={AgreeablenessMessages} scoreData={AgreeablenessScore} />
                    <Typography>You are likely to be friendly and generally get along well with others. You are likely to thrive in roles requiring team interaction.</Typography>
                </Box>
                <Box sx={{ paddingLeft: "30px", display:"flex", flexDirection:"column", gap:"1rem", paddingBottom:"6rem" }} >
                    <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
                        <Typography sx={{ fontSize: "1400%", fontWeight: "bold" }}>{dataset[4].personality}</Typography>
                        <Typography> - General appreciation for imagination and variety of experience.</Typography>
                    </Box>
                    <PersonalityProgress  messageData={setEmotionalStabilityMessage} messagesArray={EmotionalStabilityMessages} scoreData={EmotionalStabilityScore} />
                    <Typography>You are likely to be an emotional and sensitive person. Hence, you might come across as reactive and excitable</Typography>
                </Box>
            </Box>
            <Box>
            </Box>
        </Box>
    )
}
export default Page10;