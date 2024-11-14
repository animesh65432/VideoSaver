import { Elysia } from "elysia"
import Controllers from "../controllers";
import { User } from "../Schema"
import { swagger } from '@elysiajs/swagger'


const UserRouter = (app: Elysia) => {
    app.use(swagger(
        {
            path: "/User"
        }
    ))
    app.post("/user/create", Controllers.UserController.CreateUser, { body: User });
}

export default UserRouter;