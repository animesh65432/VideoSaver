import { UserTypes } from "../types";
import axios from "axios";
export const CreateTheUser = async (body: UserTypes) => {

    const response = await axios.post("/api/user/create", body);
    const token = response?.data?.token;


    return { token }
};

