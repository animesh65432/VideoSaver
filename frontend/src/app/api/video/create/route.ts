import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

export const POST = async (req: NextRequest) => {
    try {
        const token = req.headers.get('authorization');
        const body = await req.json();
        console.log("Request body:", body);
        const data = body?.data

        const backendUrl = process.env.BACKEND_URL
        let response = await axios.post(`${backendUrl}/createvideo`, data, {
            headers: {
                "Content-Type": "application/json",
                "authorization": token
            }
        });

        console.log("Backend response:", response?.data?.data);
        return NextResponse.json({
            message: "Successfully created video",
            success: true,
            data: response?.data?.data
        }, {
            status: 201,
        });
    } catch (error: any) {
        console.error("Error:", error.response?.data || error.message);
        return NextResponse.json({
            message: error.response?.data?.message || "An error occurred",
        }, {
            status: error.response?.status || 500,
        });
    }
};
