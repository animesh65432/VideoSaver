import axios from "axios";
import { StatusCodes } from "http-status-codes";
import { NextRequest, NextResponse, } from "next/server"


export const GET = async (req: NextRequest) => {
    try {
        const token = req.headers.get('authorization');
        let data = await axios.get(`http://localhost:4000/Getvideo`, {
            headers: {
                "authorization": token,
                "Content-Type": "application/json"
            }
        })

        const videos = data?.data?.data

        console.log(videos)


        return NextResponse.json({
            sucess: true,
            message: "videos sent sucessfully",
            data: {
                videos
            }
        }, {
            status: StatusCodes.OK
        })

    } catch (error) {
        console.log(error)

        return NextResponse.json({
            sucess: false,
            message: "internal server error"
        }, {
            status: StatusCodes.INTERNAL_SERVER_ERROR
        })
    }
}