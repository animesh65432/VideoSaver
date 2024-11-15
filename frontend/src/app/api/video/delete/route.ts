import axios from "axios";
import { NextResponse, NextRequest } from "next/server"
import { StatusCodes } from "http-status-codes"


export const DELETE = async (req: NextRequest) => {
    try {
        const { searchParams } = req.nextUrl;
        const video = searchParams.get('videoid');

        await axios.delete(`${process.env.BACKEND_URL}/deletevideo/${video}`)

        return NextResponse.json({
            message: "deleted the video",
            sucess: true
        }, {
            status: StatusCodes.ACCEPTED
        })
    } catch (error) {

        return NextResponse.json({
            message: error,
            sucess: false
        }, {
            status: StatusCodes.INTERNAL_SERVER_ERROR
        })

    }
}