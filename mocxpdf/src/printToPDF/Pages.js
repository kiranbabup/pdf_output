import './pages.css';
import React from 'react';
import {Box} from "@mui/material";
import Page3 from './Pages/Page3';
import Page5 from './Pages/Page5';
import Page9 from './Pages/Page9';
import Page10 from './Pages/Page10';
import Page13 from './Pages/Page13';
import Page4 from './Pages/Page4';
import { useEffect, useState } from 'react';

const Pages = ({personData}) => {
  console.log(personData);
  const [id,setId] = useState("");
  const [firstName,setfirstName]=useState("");
  // const [lastName,setlastName]=useState("");
  // const [universityName,setuniversityName]=useState("");
  // const [region,setregion]=useState("");
  // const [course,setcourse]=useState("");
  // const [applicationValidity,setapplicationValidity]=useState("");
  // const [assessedOn,setassessedOn]=useState("");
  // const [batch,setbatch]=useState(0);
  // const [overallScore,setoverallScore]=useState(0);
  // const [scoreMinRange,setscoreMinRange]=useState(0);
  // const [scoreMaxRange,setscoreMaxRange]=useState(0);
  // const [institutePercentile,setinstitutePercentile]=useState(0);
  // const [nationalPercentile,setnationalPercentile]=useState(0);
  // const [regionalPercentile,setregionalPercentile]=useState(0);
  // const [skillAnalisisData,setskillAnalisisData]=useState([]);
  // const [personalityData,setpersonalityData]=useState([]);
  useEffect(()=>{
    // let resultAchived = personData.map(items=>items);
    setId(personData.map(items=>items.id));
    setfirstName(personData.map(items=>items.firstName));
    // set (personData.map(items=>items.));
    // set (personData.map(items=>items.));
    // set (personData.map(items=>items.));
    // set (personData.map(items=>items.));
    // set (personData.map(items=>items.));
    // set (personData.map(items=>items.));
    // set (personData.map(items=>items.));
    // set (personData.map(items=>items.));
    // set (personData.map(items=>items.));
    // set (personData.map(items=>items.));
    // set (personData.map(items=>items.));
    // set (personData.map(items=>items.));
    // set (personData.map(items=>items.));
    // set (personData.map(items=>items.));
    // set (personData.map(items=>items.));
    // set (personData.map(items=>items.));
  },[])
  console.log(firstName);
  console.log(id);

  return (
    <Box>
      <Page3/>
      <Page4/>
      <Page5/>
      <Page9/>
      <Page10/>
      {/*<Page12 />*/}
      <Page13/>
    </Box>
  )
}

export default Pages
