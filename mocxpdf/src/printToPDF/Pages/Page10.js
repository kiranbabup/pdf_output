import { Box, Typography } from "@mui/material"
import dataset from "../Assets/data/personalityData.json"
import PersonalityProgress from "../Components/PersonalityProgress";
import page10to11png from "../Assets/images/page10to11header.png";
import { barHeaderTypography, eachPersonalityBox, eachPersonalityEndTypography, eachPersonalityInnerBox, eachPersonalityPageEndBox, pageRenderingBox } from "../Assets/data/styling";
import Footer from "../Components/Footer";
import HeaderComponent from "../Components/HeaderComponent";

const Page10 = () => {
    const personalityAchived =["Not Attempted","Unimaginative","Moderately Unimaginative","Moderately Imaginative","Imaginative"]
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
    const setOpennessMessage = addMessageData(OpennessScore, personalityAchived);
    const setConscientiousnessMessage = addMessageData(ConscientiousnessScore, personalityAchived);
    const setExtraversionMessage = addMessageData(ExtraversionScore, personalityAchived);
    const setAgreeablenessMessage = addMessageData(AgreeablenessScore, personalityAchived);
    const setEmotionalStabilityMessage = addMessageData(EmotionalStabilityScore, personalityAchived);

    return (
        <Box>
            <HeaderComponent pngImage={page10to11png}/>
            <Box id='page10' style={pageRenderingBox}>
                <Typography>Detailed description of your profile on each of the personality aspect</Typography>
                <Box style={eachPersonalityBox} >
                    <Box style={eachPersonalityInnerBox}>
                        <Typography style={barHeaderTypography} >{dataset[0].personality}</Typography>
                        <Typography> - General appreciation for imagination and variety of experience.</Typography>
                    </Box>
                    <PersonalityProgress  messageData={setOpennessMessage} messagesArray={personalityAchived} scoreData={OpennessScore} />
                    <Typography style={eachPersonalityEndTypography} >You are likely to have a balanced view towards experimentation and learning. Hence, you are likely to exercise controlled experimentation in problem solving.</Typography>
                </Box>
                <Box style={eachPersonalityBox} >
                    <Box style={eachPersonalityInnerBox}>
                        <Typography style={barHeaderTypography}>{dataset[1].personality}</Typography>
                        <Typography> - General appreciation for imagination and variety of experience.</Typography>
                    </Box>
                    <PersonalityProgress  messageData={setConscientiousnessMessage} messagesArray={personalityAchived} scoreData={ConscientiousnessScore} />
                    <Typography style={eachPersonalityEndTypography}>You are likely to prefer a spontaneous approach over a systematic approach towards problem solving.</Typography>
                </Box>
                <Box style={eachPersonalityPageEndBox} >
                    <Box style={eachPersonalityInnerBox}>
                        <Typography style={barHeaderTypography}>{dataset[2].personality}</Typography>
                        <Typography> - General appreciation for imagination and variety of experience.</Typography>
                    </Box>
                    <PersonalityProgress  messageData={setExtraversionMessage} messagesArray={personalityAchived} scoreData={ExtraversionScore} />
                    <Typography style={eachPersonalityEndTypography}>You are likely to be assertive, talkative, cheerful and have a the tendency to seek stimulation in the company of others. Hence, you are likely to be successful in customer/team oriented jobs.</Typography>
                </Box>
            </Box>
            <Footer />

            <HeaderComponent pngImage={page10to11png}/>
            <Box id='page11' style={pageRenderingBox}>
                <Box style={eachPersonalityBox} >
                    <Box style={eachPersonalityInnerBox}>
                        <Typography style={barHeaderTypography}>{dataset[3].personality}</Typography>
                        <Typography> - General appreciation for imagination and variety of experience.</Typography>
                    </Box>
                    <PersonalityProgress  messageData={setAgreeablenessMessage} messagesArray={personalityAchived} scoreData={AgreeablenessScore} />
                    <Typography style={eachPersonalityEndTypography}>You are likely to be friendly and generally get along well with others. You are likely to thrive in roles requiring team interaction.</Typography>
                </Box>
                <Box style={eachPersonalityPageEndBox} >
                    <Box style={eachPersonalityInnerBox}>
                        <Typography style={barHeaderTypography}>{dataset[4].personality}</Typography>
                        <Typography> - General appreciation for imagination and variety of experience.</Typography>
                    </Box>
                    <PersonalityProgress  messageData={setEmotionalStabilityMessage} messagesArray={personalityAchived} scoreData={EmotionalStabilityScore} />
                    <Typography style={eachPersonalityEndTypography}>You are likely to be an emotional and sensitive person. Hence, you might come across as reactive and excitable</Typography>
                </Box>
            </Box>
            <Footer />
            <Box>
            </Box>
        </Box>
    )
}
export default Page10;