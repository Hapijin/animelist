'use client'

import Youtube from "react-youtube"
import { XCircle } from '@phosphor-icons/react'
import { useState } from "react"

export default function VideoPlayer({ youtubeId }) {
    const [isOpen, setIsOpen] = useState(true)

    const handleVideoPlayer = () => {
        setIsOpen((prevState) => !prevState)
    }
    const option = {
        width: "300",
        height: "250"
    }

    const Player = () => {
        return (
        <div className="fixed bottom-2 right-2">
        <button onClick={handleVideoPlayer} 
        className="hover:bg-color-accent text-color-primary float-right bg-color-secondary px-1 mb-1">
            <XCircle size={32} />
        </button>
        <Youtube videoId={youtubeId} onReady= {
            (event) => event.target.pauseVideo() } 
            opts={option} 
            />
        </div>
    ) }

    const OpenTrailerButton = () => {
        return ( 
        <button onClick={handleVideoPlayer}
            className="hover:bg-color-accent fixed bottom-5 right-5 w-24 bg-color-primary text-color-dark">
                Trailer
            </button>
            )
    }

    
    return isOpen ? <Player /> : <OpenTrailerButton />
}
