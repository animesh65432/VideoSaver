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

export { UserTypes, SucessResponse }