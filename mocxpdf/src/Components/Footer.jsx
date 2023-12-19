import { Box, Typography ,styled} from '@mui/material'
import React from 'react'

const StyledBox = styled(Box)({
    borderTop:'dashed 1px black',
    height:'10vh',
    display:'flex',
    justifyContent:'space-between',
    alignItems:'center',
    flexDirection:'row',
    padding:'0px 20px'
})
const StyledText = styled(Typography)({
    color:'rgb(150,150,150)'
})

const Footer = () => {
  return (
    <Box>
        <StyledBox>
        <StyledText>Student Name</StyledText>
        <StyledText>Report</StyledText>
        <StyledText>Copyrights</StyledText>
        </StyledBox>
    </Box>
  )
}

export default Footer
