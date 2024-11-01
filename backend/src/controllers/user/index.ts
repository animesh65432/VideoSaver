import {ForCreateUser, Forlogin} from "../../types"


const CreateUser = ({body} : {body :ForCreateUser}) => {
    try {

        const {name,email,password} = body
        
    } catch (error) {
        console.log(error)
    }
}


const LoginUser = ({body} :{body :Forlogin}) => {
    try {
        
    } catch (error) {
        
    }
}

export {CreateUser,LoginUser}