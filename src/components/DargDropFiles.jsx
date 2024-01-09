import React, { useEffect, useRef, useState } from 'react'
import { MdAdd } from "react-icons/md";

function DargDropFiles({setFiles,files}) {
    const fileRef = useRef();

    // handle drag and drop
    const handleDragOver =(event)=>{
        event.preventDefault();
    }

    // handle drag and drop
    const handleDrop = (event)=>{
        event.preventDefault();
        setFiles(event.dataTransfer.files);
    }

  return (
    <>
        {!files && 
            <div    className=' bg-white flex flex-col justify-content items-center rounded-xl outline-dashed outline-2 outline-black sm:px-14 sm:py-14 box-border px-[calc(10px+1vw)] py-[calc(20px+2vw)] my-6'
                    onDragOver={handleDragOver}
                    onDrop={handleDrop}>
                    {/** Hidden Input for Adding Files */}
                    <input  type='file' multiple hidden 
                            ref={fileRef}
                            onChange={(e)=>setFiles(e.target.files)} />
                    {/**Add Button for Adding Files */}
                    <div    className='bg-black flex flex-row justify-center items-center rounded-full p-4 my-8' 
                            onClick={()=>fileRef.current.click()}>
                    {/**Add Icon */}
                    <MdAdd color='white' size={"25"} fontWeight={"800"}/>
                    </div>
                    <span className='text-lg text-center'>Click to browse or drag files here to share</span>
            </div>}
        {/**Uploaded File List */}
        {files && 
            <div className='flex flex-col justify-start items-start my-6'>
               <span className='text-black font-light text-start text-sm md:text-lg'>
                {(files.length<=1)?
                    <>{files[0].name}</>:
                    <>{`Multiple(${files.length})`}</>}</span>
            </div>}
    </>
  )
}

export default DargDropFiles