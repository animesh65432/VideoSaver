import { createSlice } from "@reduxjs/toolkit"
const isClient = typeof window !== 'undefined';

const authSlice = createSlice({
    name: "auth",
    initialState: {
        token: isClient ? localStorage.getItem("token") || "" : "",
    },
    reducers: {
        setthetoken: (state, action) => {
            state.token = action.payload
            localStorage.setItem("token", action.payload)
        },
        removetoken: (state, action) => {
            state.token = ""
            localStorage.removeItem("token")
        }
    }
})

export const { setthetoken, removetoken } = authSlice.actions
export default authSlice.reducer