import { Elysia } from "elysia"
import { swagger } from '@elysiajs/swagger'
import Controllers from "../controllers"
import { Video } from "../Schema"
const VideoRouter = (app: Elysia) => {
    app.use(swagger(
        {
            path: "/User"
        }
    ))

    app.post("/createvideo", Controllers.VideoController.create, { body: Video })
    app.post("/editvideo", Controllers.VideoController.editvideo)
    app.delete("/deletevideo/:id", Controllers.VideoController.deletevideo)
    app.get("/getvideo", Controllers.VideoController.get)


}

export default VideoRouter