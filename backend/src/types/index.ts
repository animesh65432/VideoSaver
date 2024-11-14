type UserTypes = {
    Name: string,
    Email: string,
    Password: string
}

type SucessResponse = {
    status: number,
    sucess: boolean,
    message: string,
    data?: any
}


type VideoTypes = {
    userid: string
    link: string
}

type VideoEditTypes = {
    videoid: string,
    link: string
}

export { UserTypes, SucessResponse, VideoTypes, VideoEditTypes }