import { Box, Typography } from "@mui/material"
import skillData from "../Assets/data/skillAnalisis.json";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis } from 'recharts'
import HeaderComponent from "../Components/HeaderComponent";
import page4svg from "../Assets/images/page4header.svg";
import { aFullPdfPage, pageRenderingBox } from "../Assets/data/styling";
import Footer from "../Components/Footer";

const Page4 = ({ id,firstName, lastName }) => {
    return (
        <Box style={aFullPdfPage}>
            <HeaderComponent pngImage={page4svg}/>
            <Box id='page5' style={pageRenderingBox} >
                <Typography>Scores across CoCubes sections of Analytical, Quantitative, English, Domain, Computer Fundamentals, Coding & WET</Typography>
                <Box sx={{ width: "100%", display: "flex", justifyContent:"space-between" }}>
                    <Box sx={{ width: "47%" }}>
                        <Typography>This chart plots your percentage score across skill dimensions to display an overall picture along with a comparison with the highest scores obtained nationally and regionally in each of these areas to understand relative gaps.</Typography>
                        <Typography>The light blue chart represents maximum regional scores obtained in respective competencies. The purple chart represents maximum national scores obtained in respective competencies. The yellow chart represents your score in respective competencies.</Typography>
                    </Box>
                    <Box sx={{ width: "50%" }}>
                        <RadarChart backgroundColor="#7c93c4" borderColor='3px solid #68dbd1' height={530} width={750}
                            outerRadius="60%" data={skillData}>
                            <PolarGrid />
                            <PolarAngleAxis dataKey="skills" fontSize='15px'/>
                            <Radar dataKey="persentageScore" stroke="#ffb73a"
                                fill="#ceae79" fillOpacity={0.5} />
                        </RadarChart>
                    </Box>
                </Box>
                <Box>

                </Box>
            </Box>
            <Footer  id={id} firstName={firstName} lastName={lastName} />
        </Box>
    )
}
export default Page4;