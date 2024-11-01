import {Elysia} from "elysia"
import { CreateUser,LoginUser } from "../../controllers/user"


const UserRouter = (app :Elysia)=>{
    app.post("/create",CreateUser)
    app.post("/login",LoginUser)

}

export default UserRouter