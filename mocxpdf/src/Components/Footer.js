import { Box, Typography ,styled} from '@mui/material'
import React from 'react'

const StyledBox = styled(Box)({
    borderTop:'dashed 3px black',
    height:'4rem',
    width:"96%",
    display:'flex',
    justifyContent:'space-between',
    alignItems:'center',
    padding:'0px 2%',
})
const StyledText = styled(Typography)({
    color:'rgb(150,150,150)'
})
const StyledInternalBox = styled(Box)({
    display:'flex',
    justifyContent:'space-between',
    alignItems:'center',
    width:'50%'
})
const Footer = () => {
  return (
        <StyledBox>
          <StyledInternalBox >
            <StyledText>Student Name</StyledText>
            <StyledText>Report</StyledText>
          </StyledInternalBox>
          <StyledText>Copyrights</StyledText>
        </StyledBox>
  )
}

export default Footer
