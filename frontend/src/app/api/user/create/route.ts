import axios from "axios"
import { NextRequest, NextResponse } from "next/server"


export const POST = async (req: NextRequest) => {
    try {
        const body = await req.json()
        let resposne = await axios.post(`${process.env.BACKEND_URL}/user/create`, body)

        let token = resposne?.data?.data?.token
        return NextResponse.json({
            message: "user create sucessfully",
            token
        }, {
            status: 201
        })

    } catch (error) {
        console.log(error)
        return NextResponse.json({
            message: error
        }, {
            status: 400
        })
    }
}