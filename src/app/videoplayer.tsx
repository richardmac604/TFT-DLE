

export default function VideoPlayer(props:any){
    
    const url = props.url
    var id = "embed/"
     + url 
     + "?vq=hd1080&modestbranding=1&rel=0&controls=0&disablekb=1"
    
    return(
     <div>
        <iframe
        width ="1000"
        height = "500"
        src = {"https://www.youtube.com/" + id }
        title = " Tft-dle guess the outcome"
        allowFullScreen
        allow="accelerometer; clipboard-write; encrypted-media; gryoscope; picture-in-picture">
        </iframe>
     </div>
    )
}