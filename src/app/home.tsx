'use client'
import VideoPlayer from "./videoplayer"
import Popup from "./popup"
import VideoPlayerAPI from "./videoplayerAPI"
import {useCallback, useState} from 'react'
import { render } from "react-dom"

export default function Home(props:any) {
  const[buttonPopup, setButtonPopup] = useState(false)
  const[userChoice, setUserChoice] = useState("")
  const[playerResult, setPlayerResult] = useState("not changed")
  const {DB} = props

  // Shows popup when video ends.
  const endVideo = useCallback(() => {
    setButtonPopup(true);
  }, [buttonPopup]);

  const buttonClicked = ((e:any) => {
    setUserChoice(e.target.inner);
    (userChoice === DB[2].name)?setPlayerResult("Winner"):setPlayerResult("Loser");
    const domNode = document.getElementById('video');
    render(<VideoPlayerAPI url = {DB[2].url} endVideo = {endVideo}></VideoPlayerAPI>,domNode)
  
  })


  return (
    <main className="flex flex-col items-center justify-between">

      <div className = "text-3xl p-10">TFTdle</div>
      <div id = 'video'></div>
      <div>
        <button onClick= {buttonClicked}className ="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-full mx-5 w-80 text-lg">
        top
        </button>
        <button onClick= {buttonClicked}className ="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-full mx-5 w-80 text-lg">
        bottom
        </button>
      </div>
      
      <div className = "p-32 flex flex-col items-center justify-between" >
        <p className="text-7xl">Instructions</p>
        <p className="text-7xl">Analyze the board</p>
        <p className="text-7xl">Choose a winning team</p>
        <p className="text-7xl">Watch video for results</p>
      </div>
      
      <Popup trigger={buttonPopup} setTrigger = {setButtonPopup}>
        <h1 className = "flex flex-col items-center text-center text-5xl">{playerResult}</h1>
      </Popup>

 
    </main>
  )
}
