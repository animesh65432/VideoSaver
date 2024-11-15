import axios from "axios";


const useCreatevideo = () => {
    const createvideo = async (data: any) => {
        return await axios.post(`${process.env.NEXTJS_BACKEND_URL}/api/video/create`, {
            data
        })
    }
    return { createvideo }
}

export default useCreatevideo