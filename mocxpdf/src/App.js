import { Button } from '@mui/material';
import './App.css';
import Pages from './printToPDF/Pages';
// import { usePDF } from 'react-to-pdf';
// import { useRef } from 'react';
// import generatePDF from 'react-to-pdf';
import { useReactToPrint } from 'react-to-print';

import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import personData from "./printToPDF/Assets/data/personData.json"
import { useRef } from 'react';

function App() {
  // const { toPDF, targetRef } = usePDF({filename: 'Result.pdf'});
  // const targetRef = useRef();
  const targetRef = useRef();
  const toPDF = useReactToPrint({
    content: () => targetRef.current,
  });

  console.log(personData);
  return (
    <div className="App">
      <div
       ref={targetRef}
      >
        <Pages personData={personData} />
      </div>

      <div style={{display:'flex', justifyContent:'center', width:'100vw' }} >
        <Button variant="contained" onClick={toPDF
          // generatePDF(targetRef, {filename: 'Exam_Performance_Result.pdf'})
          }>Download <PictureAsPdfIcon/></Button>
      </div>
    </div>
  );
}

export default App;