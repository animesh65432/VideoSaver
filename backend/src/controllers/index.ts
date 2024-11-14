import { CreateUser } from "./User"
import { create, Editvideo, deletevideo, get } from "./Video"

const Controllers = {
    UserController: {
        CreateUser
    },
    VideoController: { create, Editvideo, deletevideo, get }
}

export default Controllers