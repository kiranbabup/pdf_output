import { Box, Typography } from "@mui/material";
import skillData from "../Assets/data/skillAnalisis.json";
import PersonalityProgress from "../Components/PersonalityProgress";
import page5to8png from "../Assets/images/page5to8header.png";
import HeaderComponent from "../Components/HeaderComponent";
import { barHeaderTypography, eachSkillBox, flexWraperBox, linksTypography, mainHeaderTypography, pageRenderingBox } from "../Assets/data/styling";
import Footer from "../Components/Footer";

const Page5 = () => {
    const addMessageData = (score) => {
        if (score >= 0 && score <= 20) {
            return 1;
        } else if (score > 20 && score <= 40) {
            return 2;
        } else if (score > 40 && score <= 60) {
            return 3;
        } else if (score > 60 && score <= 80) {
            return 4;
        } else if (score > 80 && score <= 100) {
            return 5;
        } else {
            return 0;
        }
    };
    const setAnalyticalMessageValue = addMessageData(skillData[0].persentageScore);
    const setQuantitativeMessageValue = addMessageData(skillData[1].persentageScore);
    const setEnglishMessageValue = addMessageData(skillData[2].persentageScore);
    const setDomainMessageValue = addMessageData(skillData[3].persentageScore);
    const setComputerFundamentalsMessageValue = addMessageData(skillData[4].persentageScore);
    const setCodingMessageValue = addMessageData(skillData[5].persentageScore);
    const setWETMessageValue = addMessageData(skillData[6].persentageScore);

    return (
        <Box>
            <HeaderComponent pngImage={page5to8png}/>
            <Box id='page5' style={pageRenderingBox} >
                <Typography>In depth report on each skill aspect with descriptions of your strengths, practice and training needs along with improvement tips.</Typography>
                <Typography style={mainHeaderTypography} >Your Strengths</Typography>
                <Box style={eachSkillBox} >
                    <Typography style={barHeaderTypography}>{skillData[0].skills}</Typography>
                    <PersonalityProgress messageData={setAnalyticalMessageValue} messagesArray={skillData[0].message} scoreData={skillData[0].persentageScore} />
                    <Typography sx={{paddingLeft:"25px"}}>Analytical reasoning is necessary for employability across all job role types as it relates to your ability to use information to solve problems and take decisions. Your score in Analytical Reasoning is very high which means you can think through problems logically and quickly. Keep practicing to keep yourself updated with new types of problems.</Typography>
                    <Box style={flexWraperBox}>
                        <Typography sx={{ fontWeight: "bold", }}>Helpful Links:</Typography>
                        {
                            skillData[0].helpLinks.map(links=>{
                                return (
                                <Typography style={linksTypography}>{links}</Typography>
                            )})
                        }
                    </Box>
                </Box>
                <Box style={eachSkillBox} >
                    <Typography style={barHeaderTypography}>{skillData[5].skills}</Typography>
                    <PersonalityProgress messageData={setCodingMessageValue} messagesArray={skillData[5].message} scoreData={skillData[5].persentageScore} />
                    <Typography sx={{paddingLeft:"25px"}}>Coding is a must have skill for Software Development roles and it is also required by many organisations in other mies such as Software Engineer, Analyst, etc. It is a valuable siell due to its applicability armss multiple sought after technology roles. Your scom in rading is very high which means you have a good grast on basic programming language elements and are also able to use these to logically solve problems. Keep practising by solving more higher level problems and finding more efficient ways to solve existing ones.</Typography>
                    <Box style={flexWraperBox}>
                        <Typography sx={{ fontWeight: "bold", }}>Helpful Links:</Typography>
                        {
                            skillData[5].helpLinks.map(links=>{
                                return (
                                <Typography style={linksTypography}>{links}</Typography>
                            )})
                        }
                    </Box>
                </Box>
            </Box>
            <Footer />
            <HeaderComponent pngImage={page5to8png}/>
            <Box id='page6' style={pageRenderingBox} >
                <Typography style={mainHeaderTypography} >Your Training Needs</Typography>
                <Box style={eachSkillBox} >
                    <Typography style={barHeaderTypography}>{skillData[4].skills}</Typography>
                    <PersonalityProgress messageData={setComputerFundamentalsMessageValue} messagesArray={skillData[4].message} scoreData={skillData[4].persentageScore} />
                    <Typography sx={{paddingLeft:"25px"}}>Knowledge of Computer Fundamentals is a must have for job roles like Software Engineer, Network Engineer and Software Tester. Basic familiarity with elements of computer hardware and software is a hygiene factor for many job roles today. Your score in Computer Fundamentals section is average which means that you need to improve in this aspect. You should start by understanding your gaps in knowledge and focusing on learning related concepts and applications. You can also go for training as this will help you leam at a quicker pace.</Typography>
                    <Box style={flexWraperBox}>
                        <Typography sx={{ fontWeight: "bold", }}>Helpful Links:</Typography>
                        {
                            skillData[4].helpLinks.map(links=>{
                                return (
                                <Typography style={linksTypography}>{links}</Typography>
                            )})
                        }
                    </Box>
                </Box>
                <Box style={eachSkillBox} >
                    <Typography style={barHeaderTypography}>{skillData[2].skills}</Typography>
                    <PersonalityProgress messageData={setEnglishMessageValue} messagesArray={skillData[2].message} scoreData={skillData[2].persentageScore} />
                    <Typography sx={{paddingLeft:"25px"}}>Being able to read and interpret English is necessary for almost all the job roles. In fact, it is a basic requirement today with the language being used globally to transact business. Your score in English is below average which means you need to improve considerably. You should start by looking at gaps in your English grammar, sentence construction and vocabulary apart from regular practice sessions involving reading and writing. You can also opt for formal training which will help you leam faster</Typography>
                    <Box style={flexWraperBox} >
                        <Typography sx={{ fontWeight: "bold", }}>Helpful Links:</Typography>
                        {
                            skillData[2].helpLinks.map(links=>{
                                return (
                                <Typography style={linksTypography}>{links}</Typography>
                            )})
                        }
                    </Box>
                </Box>
            </Box>
            <Footer />
            <HeaderComponent pngImage={page5to8png}/>
            <Box id='page7' style={pageRenderingBox} >
                <Typography style={mainHeaderTypography} >Your Training Needs</Typography>
                <Box style={eachSkillBox} >
                    <Typography style={barHeaderTypography}>{skillData[1].skills}</Typography>
                    <PersonalityProgress messageData={setQuantitativeMessageValue} messagesArray={skillData[1].message} scoreData={skillData[1].persentageScore} />
                    <Typography sx={{paddingLeft:"25px"}}>Being good in Quantitative Ability is necessary for job roles like Analytics, Software Development, Operations amongst others. In fact, being good with numbers has its benefits across all job roles. Your score in Quantitative Ability is below average which means that you need to improve considerably. You should start by going through basic math concepts in detail and learn how to apply them as well. You should also practise regularly to improve your speed and accuracy levels.</Typography>
                    <Box style={flexWraperBox} >
                        <Typography sx={{ fontWeight: "bold", }}>Helpful Links:</Typography>
                        {
                            skillData[1].helpLinks.map(links=>{
                                return (
                                <Typography style={linksTypography}>{links}</Typography>
                            )})
                        }
                    </Box>
                </Box>
                <Box style={eachSkillBox} >
                    <Typography style={barHeaderTypography}>{skillData[3].skills}</Typography>
                    <PersonalityProgress messageData={setDomainMessageValue} messagesArray={skillData[3].message} scoreData={skillData[3].persentageScore} />
                    <Typography sx={{paddingLeft:"25px"}}>Domain knowledge is a must have for core Engineering job roles like R&D Engineer and Core Plant Engineer. Domain knowledge is also valued by employers as it validates your academic performance during B.lech Your score in domain is below average which means you need to considerably improve in terms of knowledge and application of concepts. You should start by going through the basic concepts from standard texts, thoroughly understand them and their applications. If you are focusing on R&D roles you must focus on use and application of concepts so that you can generate new insights.</Typography>
                    <Box style={flexWraperBox} >
                        <Typography sx={{ fontWeight: "bold", }}>Helpful Links:</Typography>
                        {
                            skillData[3].helpLinks.map(links=>{
                                return (
                                <Typography style={linksTypography}>{links}</Typography>
                            )})
                        }
                    </Box>
                </Box>
            </Box>
            <Footer />
            <HeaderComponent pngImage={page5to8png}/>
            <Box id='page8' style={pageRenderingBox} >
                <Typography style={mainHeaderTypography} >Your Training Needs</Typography>
                <Box sx={{ paddingLeft: "30px", display: "flex", flexDirection: "column", gap: "1rem", paddingBottom: "1rem" }} >
                    <Typography style={barHeaderTypography}>{skillData[6].skills}</Typography>
                    <PersonalityProgress messageData={setWETMessageValue} messagesArray={skillData[6].message} scoreData={skillData[6].persentageScore} />
                    <Typography sx={{paddingLeft:"25px"}}>Being able to communicate well in writing is required in many job roles such as Customer Service, Sales, Analytics as well as Software Engineering. Written English is important for job roles requiring communication between and across teams. It is important to communicate, document ideas clearly and in an easy to understand way depending on the mode and relevant purpose. Your score in Written English lest is low which means you need to improve your written English significantly. You should start by learning the basics of English which includes grammar, sentence construction, spellings, and vocabulary, apart from writing and taking feedback on a regular basis.</Typography>
                    <Box style={flexWraperBox} >
                        <Typography sx={{ fontWeight: "bold", }}>Helpful Links:</Typography>
                        {
                            skillData[6].helpLinks.map(links=>{
                                return (
                                <Typography style={linksTypography}>{links}</Typography>
                            )})
                        }
                    </Box>
                </Box>
            </Box>
            <Footer />
        </Box>
    )
};
export default Page5;