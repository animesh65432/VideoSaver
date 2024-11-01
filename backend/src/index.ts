import { Elysia } from "elysia";

import {UserRouter,videoRouters} from "./routers"

const app = new Elysia()

UserRouter(app)
videoRouters(app)


app.listen(3000,()=> {
  console.log("Server is running on port 3000")
})