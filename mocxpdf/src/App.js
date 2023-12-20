import { Button } from '@mui/material';
import './App.css';
import Pages from './printToPDF/Pages';
import { usePDF } from 'react-to-pdf';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import personData from "./printToPDF/Assets/data/personData.json"

function App() {
  const { toPDF, targetRef } = usePDF({filename: 'Result.pdf'});
  console.log(personData);
  return (
    <div className="App">
      <div ref={targetRef}>
        <Pages personData={personData} />
      </div>
      <div sx={{disply:"flex", justifyContent:'center', width:"100vw" }} >
        <Button variant="contained" onClick={() => toPDF()}>Download <PictureAsPdfIcon/></Button>
      </div>
    </div>
  );
}

export default App;