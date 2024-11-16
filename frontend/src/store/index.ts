import { configureStore } from "@reduxjs/toolkit"
import AuthSlice from "./slices/AuthSlices"
import VideoSlice from "./slices/VideoSlices"
const store = configureStore({
    reducer: {
        auth: AuthSlice,
        video: VideoSlice
    }
})




export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store