import { Elysia } from "elysia";
import { swagger } from '@elysiajs/swagger';
import Controllers from "../controllers";
import { Video } from "../Schema";
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
    app.post(
        "/Editvideo",
        Controllers.VideoController.Editvideo,
        {
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
