import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RecieveFile from './pages/RecieveFile';
import UploadFiles from './pages/UploadFile';

function App() {
  return (
   <>
    <BrowserRouter>
      <Routes>
        <Route path='/s/:sdp' Component={RecieveFile}/>
        <Route path='*' Component={UploadFiles}/>
      </Routes>
    </BrowserRouter>
   </>
  )
}

export default App