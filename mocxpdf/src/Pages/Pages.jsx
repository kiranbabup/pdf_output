import React from 'react';
import {Box} from "@mui/material";
import Page9 from './Page9';
import Page10 from './Page10';
import Page13 from './Page13';
import Page3 from './Page3';
import Footer from '../Components/Footer';

const Pages = () => {
  return (
    <Box sx={{paddingLeft:"1rem", paddingRight:"1rem", marginBottom:"50px"}}>

      {/* <Page9/>
      <hr/>
      <Page10/> 
      <Page13/>
      */}
      <Page3/>
      {/* <Footer/> */}

    </Box>
  )
}

export default Pages
