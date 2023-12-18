import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { dataset } from '../Assets/personalityData';
// import bgTable from "../Assets/images/bgTable.png";
import { Box } from '@mui/material';

const chartSetting = {
  xAxis: [
    {
      max: 2.00,
      min: -2.00
    },
  ],
  height: 450,
  width: 1490,
};
// const imageStyle ={
//     height: "435px",
//     width: "1386px",
//     position: "absolute",
//     top: "196px",
//     left: "-44px",
// }
const valueFormatter = (value) => `${value}mm`;

export default function DualSideChart() {
  return (
    <Box>
        {/* <img src={bgTable} alt='table' style={imageStyle}/> */}
        <BarChart
            dataset={dataset}
            yAxis={[{ scaleType: 'band', dataKey: 'personality',  }]}
            series={[{ dataKey: 'zscore', valueFormatter, }]}

            layout="horizontal"
            {...chartSetting}
            sx={{width:"auto", padding:"40px", position:"relative"}}
        />
    </Box>
    
  );
}