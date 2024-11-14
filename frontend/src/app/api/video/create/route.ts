import { NextRequest, NextResponse } from "next/server"
import axios from "axios"


export const POST = async (req: NextRequest,) => {
    try {
        const body = await req.json()
        let response = await axios.post(`${process.env.BACKEND_URL}/createvideo`, {
            body
        })

        console.log(response?.data)
        return NextResponse.json({
            messsage: "sucessfully created video",
            sucess: true
        }, {
            status: 201
        })

    } catch (error) {
        console.log(error)
        return NextResponse.json({
            message: error
        }, {
            status: 500
        })
    }
}