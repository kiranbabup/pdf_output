import { Box, Button } from '@mui/material';
import './App.css';
import Pages from './Pages/Pages';
import { usePDF } from 'react-to-pdf';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
function App() {
  const { toPDF, targetRef } = usePDF({filename: 'Result.pdf'});
  return (
    <div className="App">
      <div ref={targetRef}>
        <Pages />
      </div>
      <Box sx={{disply:"flex", justifyContent:'center', width:"100vw" }} >
        <Button variant="contained" onClick={() => toPDF()}>Download <PictureAsPdfIcon/></Button>
      </Box>
    </div>
  );
}

export default App;