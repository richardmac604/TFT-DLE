import prisma from "@/script"

function getDb(){
    return prisma.video.findMany()
  }


export default async function VideoPlayer(){

    const dbinfo = await getDb()
    console.log(dbinfo[0].url)

    var URL = "Wdll9P9icJU"
    var id = "embed/" + URL + "?vq=hd1080&modestbranding=1&rel=0"
    
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