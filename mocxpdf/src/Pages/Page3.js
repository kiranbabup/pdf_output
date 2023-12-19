import { Box, Stack, Typography, styled} from '@mui/material'
import React from 'react'
import ImageE from '../Assets/images/imgs/mocxpre-assess-report-img 6-1.png'
import Footer from '../Components/Footer'

const ImageBox = styled(Box)({
    width: '100%', height: '40vh', margin: 'auto', overflow: 'hidden',display:'flex', justifyContent:'center',alignItems:'center'
})
const StyledBox1 = styled(Box)({
    width:'100vw',
    display:'flex',
    flexDirection:'row',
    padding:'22px 0px'
})
const SubBox1 = styled(Box)({
    width:'92%',
    display:'flex',
    justifyContent:'flex-end',
    flexDirection:'column'
})
const SubBox2 = styled(Box)({
    fontSize:'22px',
    width:'8%',
    padding:'1px 20px',
    textAlign:'end'
})

const Page3 = () => {
    
  return (
    <Box>
        <ImageBox >
        <img src={ImageE} alt="" style={{ width: '100%', height: '80%', objectFit: 'cover'}}/>
        </ImageBox>
        <Box>
            <Stack direction="row">
                <StyledBox1>
                    <SubBox1>
                        <Typography variant='h5' textAlign="end" sx={{color:"rgb(140, 210, 270)"}}>Quick Snapshot</Typography>
                        <Typography textAlign="end" variant='p' sx={{color:'rgb(150,150,150)'}}>Your CoCubes<sup>Y-1</sup> Score, Percenties, Personality Type and Skill-wise performance.</Typography>
                    </SubBox1>
                    <SubBox2>02</SubBox2>
                </StyledBox1>
            </Stack>
            <Box sx={{height:"3px",width:'100%',bgcolor:'rgb(140,210,270)'}}></Box>
        </Box>
        <Box sx={{width:'100%',overflow:'hidden'}}>
            <Footer/>
        </Box>
    </Box>
  )
}

export default Page3
