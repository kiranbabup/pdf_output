import { Box, Typography } from "@mui/material"
import skillData from "../Assets/data/skillAnalisis.json";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis } from 'recharts'

const Page4 = () => {
    return (
        <Box sx={{ background: "linear-gradient(#224954, #215461, #224954)", height: "100vh", width: "100%" }}>
            <Box></Box>
            <Box sx={{ display: 'flex', flexDirection: "column", gap: "1rem", }}>
                <Typography>Scores across CoCubes sections of Analytical, Quantitative, English, Domain, Computer Fundamentals, Coding & WET</Typography>
                <Box sx={{ width: "100%", display: "flex", }}>
                    <Box sx={{ width: "48%" }}>
                        <Typography>This chart plots your percentage score across skill dimensions to display an overall picture along with a comparison with the highest scores obtained nationally and regionally in each of these areas to understand relative gaps.</Typography>
                        <Typography>The light blue chart represents maximum regional scores obtained in respective competencies. The purple chart represents maximum national scores obtained in respective competencies. The yellow chart represents your score in respective competencies.</Typography>
                    </Box>
                    <Box sx={{ width: "48%" }}>
                        <RadarChart backgroundColor="#7c93c4" borderColor='#68dbd1' height={500} width={500}
                            outerRadius="80%" data={skillData}>
                            <PolarGrid />
                            <PolarAngleAxis dataKey="skills" />
                            <Radar dataKey="persentageScore" stroke="#ffb73a"
                                fill="#ceae79" fillOpacity={0.5} />
                        </RadarChart>
                    </Box>
                </Box>
                <hr />
                <Box>

                </Box>
            </Box>
            <Box></Box>
        </Box>
    )
}
export default Page4;