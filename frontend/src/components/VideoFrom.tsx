"use client"
import React, { useEffect } from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { toast } from 'react-toastify';
import { videoForm } from "../Schema"
import { useDispatch, useSelector } from "react-redux"
import { signIn } from "next-auth/react"
import { useSession } from "next-auth/react"
import { CreateTheUser, useCreatevideo } from "../hooks"
import { setthetoken } from "../store/slices/AuthSlices"
import { fetchVideos } from "../store/slices/VideoSlices"
import { AppDispatch } from "../store"
const VideoForm: React.FC = () => {
    const authtoken = useSelector((state: any) => state.auth.token)
    const dispatch = useDispatch<AppDispatch>()
    const islogin = !!authtoken
    const { data: userinformation } = useSession()
    const { loading, createvideo } = useCreatevideo()
    const form = useForm<z.infer<typeof videoForm>>({
        resolver: zodResolver(videoForm),
        defaultValues: {
            link: "",
        },
    })

    const onSubmit = async (data: z.infer<typeof videoForm>) => {
        if (!islogin) {
            signIn('google', { callbackUrl: '/' })

        }
        else {
            console.log(data, "DATA FROM VIDEO FORM")
            let resposne = await createvideo(data)
            console.log(resposne)
            toast.success("Video added successfully")
        }
    }

    const check = async () => {
        if (userinformation?.user?.email) {
            const { token } = await CreateTheUser({ Email: userinformation?.user?.email })
            dispatch(setthetoken(token))
            dispatch(fetchVideos())

        }
    }

    useEffect(() => {
        check()
    }, [userinformation])

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <FormField
                            control={form.control}
                            name="link"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Video link</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Please put your YouTube video link here"
                                            {...field}
                                            className="w-full sm:font-semibold  text-xl"

                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button type="submit" className="w-full">
                            {loading ? "loading" : "Add Video"}
                        </Button>
                    </form>
                </Form>
            </div>
        </div>
    )
}

export default VideoForm
