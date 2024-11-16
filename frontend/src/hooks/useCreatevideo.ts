import axios from "axios";
import { useState } from "react";
import { VideoTypes } from "../types"
import { useDispatch, useSelector } from "react-redux";
import { addVideo } from "../store/slices/VideoSlices"

const useCreatevideo = () => {
    const token = useSelector((state: any) => state.auth.token)
    const [loading, setloading] = useState<boolean>(false)
    const dispatch = useDispatch()
    const createvideo = async (data: VideoTypes) => {
        console.log(data, "Data from hooks")
        setloading(true)
        try {
            let res = await axios.post(`/api/video/create`, {
                data
            }, {
                headers: {
                    "authorization": token
                }
            })
            dispatch(addVideo(res?.data?.data?.
                newvideo
            ))

        } catch (error) {
            console.log(error)
        }
        finally {
            setloading(false)
        }

    }

    return { loading, createvideo }
}

export default useCreatevideo