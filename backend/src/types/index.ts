type UserTypes = {
    Name?: string,
    Email: string,
    Password?: string
}

type SucessResponse = {
    status: number,
    sucess: boolean,
    message: string,
    data?: any
}


type VideoTypes = {
    link: string
}

type VideoEditTypes = {
    videoid: string,
    link: string
}

type verifytokenfor = {
    Email: string,
    id: string
}

export { UserTypes, SucessResponse, VideoTypes, VideoEditTypes, verifytokenfor }