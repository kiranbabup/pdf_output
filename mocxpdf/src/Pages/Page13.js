import { Box,Stack,Typography,styled } from '@mui/material'
import React from 'react'
import ImagE from '../Assets/images/page13.png'

const StyledBox = styled(Box)({
  backgroundColor:'#e11b22',
   height:'100vh',
  width:'100vw',
})
const LeftBox = styled(Box)({
  width:'50vw',
})
const RightBox = styled(Box)({
  width:'50vw',
  display:'flex',
  justifyContent:'center',
  alignItems:'center'
})
const HeadingText = styled(Typography)({
  fontWeight:'bold',
  color:'white',
  marginBottom:'10px'
})
const FooterBox = styled(Box)({
  borderTop:"1px white dashed",
  width:'100%',
  position:'absolute',
  bottom:'0px',
  display:'flex',
  color:'white',
  justifyContent:'end',
  alignItems:'center',
  padding:'7px 0px'
})
const page13 = () => {
  return (
    <StyledBox>
        <Stack direction="row">
          <LeftBox>
            <Stack direction="column">
              <Box sx={{textAlign:'justify',padding:'24px'}}>
                <HeadingText variant='h5'>About The Report</HeadingText>
                <Typography variant='p' style={{color:'white'}}>
                    This report is designed to provide insights on overall student performance and their training needs across key employability skills that are critical for building successful careers. CoCube's 10+ years of experience working with over 600 employees has helped build insights into skill needs of organizations and benchmarks they use for entry level as well as lateral recruitments across all major industries in india. Institute can use these insights to develop training plans, better nurture and engage talent to help student learn effectively and take a positive step towords their long term careers.
                </Typography>
              </Box>
              <Box sx={{width:'94%',height:'0.5vh',bgcolor:'white',margin:'3vh 20px',}}></Box>
              <Box sx={{textAlign:'justify',padding:'24px'}}>
                <HeadingText variant='h5'>About Us</HeadingText>
                <Typography variant='p' style={{color:'white'}}>
                  We are India's leading assessment and hiring platform and run assessments to measure employability across all domains - from Progarmming to Plumbing. We work with 600+ assessments and impact over a million candidates each year running assessments in over 350 cities alongside being a part of the Skill India initiative as well.
                </Typography>
                <Typography variant='p' style={{color:'white'}}>
                  Thus, every day we strive to create value for our institutional clients by helping them measure and improve employability and helping candidates move ahead on their career path. Our mission is to ensure that everyone in the country gets an equal opportunity to build a career.
                </Typography>
              </Box>
            </Stack>
          </LeftBox>
          <RightBox>
              <Box sx={{textAlign:'center'}}>
                <img src={ImagE} alt="" style={{ width: '60%', margin: 'auto' }}/>
              </Box>
          </RightBox>
        </Stack>
        <FooterBox >
          <Typography>copyrights</Typography>
        </FooterBox>
    </StyledBox>
  )
}

export default page13