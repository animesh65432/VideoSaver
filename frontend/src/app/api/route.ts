import { NextRequest, NextFetchEvent, NextResponse } from "next/server"


export const GET = () => {
    try {

        return NextResponse.json({
            message: "Hello from server"
        }, {
            status: 200
        })

    } catch (error) {

        return NextResponse.json({
            message: "internal server error"
        },
            {
                status: 500
            })
    }
}