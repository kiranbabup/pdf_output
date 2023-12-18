import React from 'react';
import {Box} from "@mui/material";
import Page9 from './Page9';
import Page10 from './Page10';

const Pages = () => {
  return (
    <Box sx={{paddingLeft:"1rem", paddingRight:"1rem", marginBottom:"50px"}}>

      <Page9/>
      <hr/>
      <Page10/>

    </Box>
  )
}

export default Pages
