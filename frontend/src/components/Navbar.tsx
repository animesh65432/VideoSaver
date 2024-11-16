'use client'

import React from 'react'
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { useSelector } from 'react-redux'
import { Home, Video } from 'lucide-react'

const Navbar: React.FC = () => {
    const router = useRouter()
    const videos = useSelector((state: any) => state?.video?.videos)
    const length = videos?.length

    const navigatetohome = () => {
        router.push("/")
    }

    const navigatevideo = () => {
        router.push("/videos")
    }

    return (
        <nav className="sticky top-0 z-50 w-full border-b border-gray-800 bg-black text-white">
            <div className="container flex h-16 items-center px-4">
                <div className="text-xl font-bold bg-gradient-to-r from-gray-100 to-gray-400 bg-clip-text text-transparent">
                    YouTubeVideoSaver
                </div>

                <div className="flex gap-4 ml-auto">
                    <Button
                        onClick={navigatetohome}
                        variant="ghost"
                        className="text-gray-300 hover:bg-gray-800 hover:text-white transition-colors duration-200 flex items-center gap-2"
                    >
                        <Home className="h-4 w-4" />
                        Home
                    </Button>

                    <Button
                        onClick={navigatevideo}
                        variant="default"
                        className="bg-gray-800 hover:bg-gray-700 text-white transition-colors duration-200 relative flex items-center gap-2"
                    >
                        <Video className="h-4 w-4" />
                        Videos
                        {length > 0 && (
                            <span className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 text-white text-xs font-semibold rounded-full flex items-center justify-center">
                                {length}
                            </span>
                        )}
                    </Button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar