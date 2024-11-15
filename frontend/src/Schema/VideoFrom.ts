import { z } from "zod"


export const videoForm = z.object({
    link: z.string().url("Please enter a valid URL"),
})