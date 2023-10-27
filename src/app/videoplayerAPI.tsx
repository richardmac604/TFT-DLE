
import Youtube from 'react-youtube'

export default function videoplayerAPI(props:any){

    const opts = {
        height: '500',
        width: '1000',
        playerVars: {
        autoplay: 0,
        controls: 0,
        disablekb: 1, 
        }
    }

    const {url, endVideo } = props;

    return(
        <>
         <Youtube videoId={url} opts={opts} onEnd={endVideo}/>
         </>
        
    )
       


}