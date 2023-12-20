import { Box, Typography, styled } from '@mui/material';
import React from 'react';
import CopyrightIcon from '@mui/icons-material/Copyright';
import personData from "../Assets/data/personData.json";

const StyledBox = styled(Box)({
  borderTop: 'dashed 3px black',
  height: '4rem',
  width: "96%",
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0px 2%',
})
const StyledText = styled(Typography)({
  color: 'rgb(150,150,150)',
  fontSize: "20px",
})
const StyledTextBox = styled(Box)({
  color: 'rgb(150,150,150)',
  display: "flex",
  alignItems: "center",
})
const StyledInternalBox = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '60%'
})
const Footer = () => {
  return (
    <StyledBox>
      <StyledInternalBox >
        <StyledText>{personData[0].firstName} {personData[0].lastName} (SIMICS ID:{personData[0].id})</StyledText>
        <StyledText>SIMICS Skill Gap Analysis Report</StyledText>
      </StyledInternalBox>
      <StyledTextBox><CopyrightIcon fontSize='10px' /><Typography sx={{ fontSize: "20px", }}>2020 SIMICS. All rights reserved</Typography></StyledTextBox>
    </StyledBox>
  )
}

export default Footer
