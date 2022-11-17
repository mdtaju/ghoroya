import { Dialog } from '@mui/material';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { AiFillCloseCircle } from 'react-icons/ai';
// import Image from 'next/image';
import { Viewer, Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import React from 'react';

const PDFViewer = ({open, setOpen}) => {
      const defaultLayoutPluginInstance = defaultLayoutPlugin();
      const dialogStyle = {
            padding: '20px',
            height: '90vh'
      }

      return (
            <Dialog fullWidth onClose={() => setOpen(false)} open={open}>
                  <div style={{width:'100%', padding:'5px 20px', textAlign:'end'}}>
                        <span onClick={() => setOpen(false)} style={{fontSize:'30px', color:'red', cursor:'pointer'}}><AiFillCloseCircle /></span>
                  </div>
                  <div style={dialogStyle}>
                   <Worker  workerUrl="https://unpkg.com/pdfjs-dist@3.0.279/build/pdf.worker.min.js">
                        <Viewer fileUrl="trade-license.pdf" plugins={[defaultLayoutPluginInstance]}></Viewer>
                  </Worker>
                        {/* <iframe src="/trade-license.pdf" /> */}
                  {/* <Image src={PDF} alt={'pdf'} /> */}
                  </div>
            </Dialog>
      );
};

export default PDFViewer;