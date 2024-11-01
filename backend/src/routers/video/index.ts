import {Elysia} from "elysia"
import {CreateVideo,editvideo,GetAlltheVideos,DeleteVideo} from "../../controllers/video" 
import {middleware} from "../../middleware"


const videoRouters = (app:Elysia) => {
    app.use(middleware)
    app.post("/create",CreateVideo)
    app.get("/Get",GetAlltheVideos)
    app.put("/edit/:id",editvideo)
    app.delete("/delete/:id",DeleteVideo)
}

export default videoRouters