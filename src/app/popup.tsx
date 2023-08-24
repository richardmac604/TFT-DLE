'use client'
import React from 'react'

export default function popup(props: any){

    return(props.trigger) ? (
        <div className ="popup">
            <div className='popup-inner'>
                <button className="close-btn bg-slate-400 hover:bg-slate-600 text-white font-bold 
                py-2 px-4 rounded-full mx-5 w-10 text-lg flex justify-center" onClick={() => props.setTrigger(false)} >X</button>
                {props.children}
            </div>
        </div>
    ) : "";

}