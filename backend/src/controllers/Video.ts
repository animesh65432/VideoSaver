import { Context } from "elysia"
import { VideoTypes, SucessResponse, VideoEditTypes } from "../types"
import { StatusCodes } from "http-status-codes"
import db from "../db"

const create = async (c: Context): Promise<SucessResponse> => {
    const body = c.body as VideoTypes
    const user = (c as any).user



    let newvideo = await db.video.create({
        data: {
            link: body.link,
            userId: user.id
        }
    })

    console.log(newvideo)

    return {
        status: StatusCodes.ACCEPTED,
        sucess: true,
        message: "Vide created",
        data: {
            newvideo
        }

    }

}

const get = async (c: Context): Promise<SucessResponse> => {

    const user = (c as any).user
    const userId = user.id

    if (!userId) {
        throw new Error("User id required")
    }

    const videos = await db.video.findMany({
        where: {
            userId

        }
    })

    return {
        status: StatusCodes.ACCEPTED,
        sucess: true,
        data: {
            videos
        },
        message: "videos sent sucessfully"
    }

}

const deletevideo = async ({ params }: { params: { id: string } }): Promise<SucessResponse> => {

    const videoid = params.id

    if (!videoid) {
        throw new Error("Video id required")
    }

    await db.video.delete({
        where: {
            id: videoid
        }
    })

    return {
        status: StatusCodes.ACCEPTED,
        sucess: true,
        message: "deleted the video"
    }
}

const Editvideo = async (c: Context): Promise<SucessResponse> => {
    const body = c.body as VideoEditTypes

    const videoid = body.videoid

    if (!videoid) {
        throw new Error("Video id required")
    }

    await db.video.update({
        where: {
            id: videoid
        },
        data: {
            link: body.link
        }
    })

    return {
        status: StatusCodes.ACCEPTED,
        sucess: true,
        message: "sucessfully edited the video"
    }

}


export { create, get, deletevideo, Editvideo }