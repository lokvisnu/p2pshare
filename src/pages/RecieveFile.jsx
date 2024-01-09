import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { PeerConnection } from '../utils/PeerConnection';

export default function () {
    const params = useParams()
    useEffect(()=>{
        async function Answer(){
                //console.log(offer);
            // Set Remote Description For The Peer Connection
          
           
        }
        Answer();
        
    },[])
 return (
    <>

    </>
  )
}
