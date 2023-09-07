'use client'
import VideoPlayer from "./videoplayer"
import Popup from "./popup"
import {useState} from 'react'

export default function Home() {
  const[buttonPopup, setButtonPopup] = useState(false)
  
  return (
    <main className="flex flex-col items-center justify-between">
      <div className = "text-3xl p-10">TFTdle</div>
      <VideoPlayer></VideoPlayer>
      <div>
        <button onClick= {() => setButtonPopup(true)}className ="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-full mx-5 w-80 text-lg">
        top
        </button>
        <button onClick= {() => setButtonPopup(true)}className ="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-full mx-5 w-80 text-lg">
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
        <h1 className = "flex flex-col items-center text-center text-5xl">WINNER</h1>
      </Popup>

 
    </main>
  )
}
