"use client"
import React from 'react'
import { useSelector } from 'react-redux'
const Video: React.FC = () => {
    const Videos = useSelector((state: any) => state.video.videos)
    console.log(Videos)
    return (
        <div>Video</div>
    )
}

export default Video