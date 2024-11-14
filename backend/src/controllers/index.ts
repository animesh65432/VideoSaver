import { CreateUser } from "./User"
import { create, editvideo, deletevideo, get } from "./Video"

const Controllers = {
    UserController: {
        CreateUser
    },
    VideoController: { create, editvideo, deletevideo, get }
}

export default Controllers