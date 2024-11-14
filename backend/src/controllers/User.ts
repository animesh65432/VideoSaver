import { Context } from "elysia"
import { UserTypes, SucessResponse } from "../types/index"
import { StatusCodes } from "http-status-codes"
import db from "../db"
import jsonwebtoekn from "jsonwebtoken"


const CreateUser = async (c: Context): Promise<SucessResponse> => {

    const body = c.body as UserTypes

    const findtheuser = await db.user.findUnique({
        where: {
            Email: body.Email
        }
    })

    const token = jsonwebtoekn.sign({ Email: body.Email }, process.env.JWT_SECRET as string, { expiresIn: "1h" })

    if (findtheuser) {

        return {
            status: StatusCodes.ACCEPTED,
            sucess: true,
            message: "User already exists",
            data: {
                token
            }
        }
    }
    else {
        await db.user.create({
            data: {
                Email: body.Email
            }
        })
    }


    return {
        status: StatusCodes.CREATED,
        sucess: true,
        message: "User created successfully",
        data: {
            token
        }
    }

}




export { CreateUser }