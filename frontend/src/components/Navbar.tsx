'use client'
import React from 'react'
import { Button } from "../components/ui/button"
import { useRouter } from "next/navigation"
import { useSelector } from 'react-redux';
const Navbar: React.FC = () => {
    const router = useRouter()
    const videos = useSelector((state: any) => state?.video?.videos?.videos)

    const length = videos?.videos?.length

    console.log(length);
    const navigatetohome = () => {
        router.push("/")
    }

    const navigatevideo = () => {
        router.push("/video")
    }
    return (
        <nav className="flex items-center justify-between bg-slate-200 px-6 py-4 h-16">
            <div className="text-lg font-bold">YouTubeVideoSaver</div>
            <div className="flex gap-6">
                <Button onClick={navigatetohome}>Home</Button>
                <Button onClick={navigatevideo}>Videos{length}</Button>
            </div>

        </nav>
    );
};

export default Navbar;
