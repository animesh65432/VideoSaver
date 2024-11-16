import axios from "axios";
import { StatusCodes } from "http-status-codes";
import { NextRequest, NextResponse, } from "next/server"


export const GET = async (req: NextRequest) => {
    try {
        const token = req.headers.get('authorization');

        if (!token) {
            return NextResponse.json({
                message: "token required",
                sucess: false
            }, {
                status: 400
            })
        }
        let data = await axios.get(`http://localhost:4000/Getvideo`, {
            headers: {
                "authorization": token,
                "Content-Type": "application/json"
            }
        })

        const videos = data?.data?.data?.videos

        console.log(videos, "From The Nexjs Backend APi")


        return NextResponse.json({
            sucess: true,
            message: "videos sent sucessfully",
            videos
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