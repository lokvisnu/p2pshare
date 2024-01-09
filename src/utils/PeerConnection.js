
export function PeerConnection(){
    const servers = {
        iceServers:[{
          urls:['stun:stun2.2.google.com:19302','stun:stun1.1.google.com:19302']
        }]
    }
    const Connection = new RTCPeerConnection(servers);
    let DataChannel;
    let offer;
    const URL = 'http://localhost:5173/s/'


    // public creates and returns Offer
    async function CreateOffer(onmessage,onopen){
        DataChannel = Connection.createDataChannel("Channel")
        DataChannel.onmessage = e=>onmessage(e);
        DataChannel.onopen = e=>onopen(e);
        offer = await Connection.createOffer();
        await Connection.setLocalDescription(offer);
        return offer;
    }
    /**@returns string */
    function GetLocalDescription(){
        return Connection.localDescription
    }

    async function SetRemoteDescription(sdp){
        await Connection.setRemoteDescription(sdp);
    }

    function GetShareURL(){
        if(offer){
            const localDesc = JSON.stringify(offer);
            console.log(localDesc)
            const Base64Encoded = btoa(localDesc);
            return URL+Base64Encoded;
        }
        else
            console.log("Offer Not Created");
        
    }

    return{
        Connection,
        CreateOffer,
        GetLocalDescription,
        SetRemoteDescription,
        GetShareURL
    }
}