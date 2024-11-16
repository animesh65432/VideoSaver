"use client"
import React from 'react'
import { useSelector } from 'react-redux'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

const Videos: React.FC = () => {
    const videos = useSelector((state: any) => state?.video?.videos)

    const extractVideoId = (url: string) => {
        const match = url.match(/(?:youtube\.com\/(?:[^\/\n\s]*\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
        return match ? match[1] : null;
    }

    return (
        <div className="videos-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
            {
                videos.map((video: any, index: number) => {
                    const youtubeUrl = video?.link

                    const videoId = youtubeUrl ? extractVideoId(youtubeUrl) : null;

                    if (!videoId) {
                        return null;
                    }

                    const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/0.jpg`;

                    return (
                        <div key={index} className="video-card">
                            <Card className="w-full max-w-xs mx-auto bg-white shadow-lg rounded-lg">
                                <CardHeader>
                                    <CardTitle>{video?.title}</CardTitle>
                                    <CardDescription>{video?.description}</CardDescription>
                                </CardHeader>
                                <CardContent className="flex justify-center">
                                    <a href={youtubeUrl} target="_blank" rel="noopener noreferrer">
                                        <img
                                            src={thumbnailUrl}
                                            alt="Video Thumbnail"
                                            className="w-full h-auto rounded-lg"
                                        />
                                    </a>
                                </CardContent>
                                <CardFooter className="text-center">
                                    <p>Watch Now</p>
                                </CardFooter>
                            </Card>
                        </div>
                    );
                })
            }
        </div>
    )
}

export default Videos
