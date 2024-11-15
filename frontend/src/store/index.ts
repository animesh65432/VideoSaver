import { configureStore } from "@reduxjs/toolkit"
import AuthSlice from "./slices/AuthSlices"
const stroe = configureStore({
    reducer: {
        auth: AuthSlice
    }
})

export default stroe