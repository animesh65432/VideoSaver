import { Elysia } from "elysia";
import { swagger } from '@elysiajs/swagger';
import Controllers from "../controllers";
import { Video, EditvideoTypes } from "../Schema";
import { authMiddleware } from "../middleware";

const VideoRouter = (app: Elysia) => {
    app.use(swagger({
        path: "/Video",
    }));

    app.post(
        "/createvideo",
        Controllers.VideoController.create,
        {
            body: Video,
            beforeHandle: authMiddleware,
        }
    );
    app.put(
        "/Editvideo",
        Controllers.VideoController.Editvideo,
        {
            body: EditvideoTypes,
            beforeHandle: authMiddleware,
        }
    );
    app.delete(
        "/deletevideo/:id",
        Controllers.VideoController.deletevideo,
        {
            beforeHandle: authMiddleware,
        }
    );

    app.get(
        "/Getvideo/:id",
        Controllers.VideoController.get,
        {
            beforeHandle: authMiddleware,
        }
    );
};

export default VideoRouter;
