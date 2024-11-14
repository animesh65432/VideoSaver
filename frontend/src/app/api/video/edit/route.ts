import { NextRequest, NextResponse } from "next/server"
import { StatusCodes } from "http-status-codes"
import axios from "axios"

export const PUT = async (req: NextRequest) => {
    try {

        const body = await req.json()
        await axios.put(`${process.env.BACKEND_URL}/editvideo`, body)


        return NextResponse.json({
            message: "sucessfully edited the video",
            sucess: true
        }, {
            status: StatusCodes.ACCEPTED
        })
    } catch (error) {

        console.log(error)

        return NextResponse.json({
            message: error,
            sucess: false
        }, {
            status: StatusCodes.INTERNAL_SERVER_ERROR
        })

    }
}