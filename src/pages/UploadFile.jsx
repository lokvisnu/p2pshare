import { useEffect, useState } from 'react'
import DargDropFiles from '../components/DargDropFiles';
import { PeerConnection } from '../utils/PeerConnection';
import QRCode from "react-qr-code";
import { MdOutlineContentCopy } from "react-icons/md";
import { IoMdClose } from "react-icons/io";



export default function() {

  const[isUploaded,setIsUploaded] = useState(false);
  const[files,setFiles] = useState(null)
  // @start Create Offer and Set Local Description
  useEffect(()=>{
    // Create Offer
  },[])

  //File Changes
  useEffect(()=>{
    if(files){      
      setIsUploaded(true);
      //console.log(peerConnection.GetShareURL())
    } else
      setIsUploaded(false);
  },[files])

  const handleCancelUpload =()=>{
    setFiles(null);
    // Stop the Transfer in WebRTC 
  }
  const handleCopyURL = ()=>{
    // Handle Copy
    // const copyURL = peerConnection.GetShareURL();
    // navigator.clipboard.writeText(copyURL)
    // alert("Copied Text")
  }

  /**Local Components */
  // Cancel Button
  const CancelButton = ()=>(

    <div className='bg-black flex flex-row justify-center items-center rounded-3xl p-2 absolute top-4 right-4'
    onClick={handleCancelUpload}>
        <IoMdClose color='white' size={20}/>
    </div>
    );

    // Share QR Code & Copy URL
    const ShareQR = ()=>(
    <div className='flex flex-col justify-center items-center'>
        <div className='flex flex-col justify-center items-center'>
            <QRCode value={""}/>
            <span className='text-center font-bold text-lg mt-2'>Scan QR Code</span>
        </div>
        <span className='text-center font-bold text-lg my-4'>OR</span>
        <div    className='outline-gray-600 outline-2 outline rounded-lg px-5 py-2 flex flex-row justify-start items-center font-bold hover:text-white hover:bg-gray-600 space-x-3 cursor-pointer' 
                onClick={()=>handleCopyURL()}>
            <MdOutlineContentCopy/>
            <span>Copy URL</span>
        </div>
    {/*<div className='share-progress-loader'>
        File Progress Loader
    </div>*/}
    </div>);
  return (
    <div className='bg-gray-100 h-screen w-screen flex flex-row justify-center items-center'>

      <div className='bg-white flex flex-col items-center xl:max-w-[25vw] md:max-w-[60vw] sm:max-w-[70vw] w-[82vw] sm:py-12 sm:px-14  px-[calc(20px+0.5vw)] py-[calc(20px+2vw)] rounded-2xl drop-shadow-lg shadow-black relative'>

        {/* Cancel Button to Cancel the transfer*/}
        {isUploaded && <CancelButton/>}

          {/**Drop Files where files will be added for transfer*/}
         <DargDropFiles setFiles={setFiles} files={files} />

          {/** Share Button 
          isUploaded && 
          <div className='bg-black hover:bg-white outline-2 outline outline-black  text-white hover:text-black font-light rounded-full py-2 px-14 uppercase'>
            Share
        </div> */}

          {isUploaded && <ShareQR/>
         }
         
        
      </div>
    </div>
  )
}

