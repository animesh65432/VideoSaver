import axios from "axios";
import { StatusCodes } from "http-status-codes";
import { NextResponse, NextRequest } from "next/server"


export const GET = async (req: NextRequest) => {
    try {

        const { searchParams } = req.nextUrl;
        const video = searchParams.get('videoid');

        let data = await axios.get(`${process.env.BACKEND_URL}/Getvideo/${video}`)

        return NextResponse.json({
            sucess: true,
            message: "videos sent sucessfully",
            data
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