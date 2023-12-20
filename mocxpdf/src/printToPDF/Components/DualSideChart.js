import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import  dataset  from '../Assets/data/personalityData.json';
// import bgTable from "../Assets/images/bgTable.png";
import { Box } from '@mui/material';

const chartSetting = {
  xAxis: [
    {
      max: 2.00,
      min: -2.00
    },
  ],
  height: 500,
  width: 1300,
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
            sx={{width:"auto", paddingLeft:"245px",paddingRight:"120px",paddingBottom:"120px",paddingTop:"70px"
          }}
        />
    </Box>
  );
}