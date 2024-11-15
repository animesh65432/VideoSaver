import React from 'react'
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
import { useSelector } from "react-redux"
import { useRouter } from 'next/navigation'

const VideoForm: React.FC = () => {
    const authtoken = useSelector((state: any) => state.auth.token)
    const islogin = !!authtoken
    const router = useRouter()
    const form = useForm<z.infer<typeof videoForm>>({
        resolver: zodResolver(videoForm),
        defaultValues: {
            link: "",
        },
    })

    const onSubmit = (data: z.infer<typeof videoForm>) => {
        if (!islogin) {
            router.push("/login")
        }
        console.log(data)
        toast.success("Video added successfully")
    }

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
                                            placeholder="Please put your video link here"
                                            {...field}
                                            className="w-full"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button type="submit" className="w-full">
                            Add the Video
                        </Button>
                    </form>
                </Form>
            </div>
        </div>
    )
}

export default VideoForm
