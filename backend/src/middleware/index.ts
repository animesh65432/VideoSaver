import { Context } from "elysia"
import JWT from "jsonwebtoken"
import { verifytokenfor } from "../types"
import db from "../db";

export const authMiddleware = async (ctx: Context) => {
    const token = ctx.headers['authorization'];
    if (token) {
        const verifytoken = JWT.verify(token, process.env.JWT_SECRET as string) as verifytokenfor
        const { Email } = verifytoken

        if (!Email) {
            throw new Error("Unauthorized")
        }

        const user = await db.user.findUnique({
            where: {
                Email
            }
        })

        if (!user) {
            throw new Error("Unauthorized")
        }

        (ctx as any).user = user as verifytokenfor
        return ctx
    } else {
        throw new Error("Unauthorized");
    }
};