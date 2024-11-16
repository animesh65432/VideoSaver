import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

type VideoType = {
    link: string;
    id: string;
};

interface InitialStateType {
    videos: VideoType[];
}

const initialState: InitialStateType = {
    videos: [],
};

export const fetchVideos = createAsyncThunk<VideoType[], void, { rejectValue: string }>(
    "videos/fetchVideos",
    async (_, thunkAPI) => {
        try {
            const response = await axios.get(`/api/video/get`, {
                headers: {
                    "Content-Type": "application/json",
                    "authorization": localStorage.getItem("token") || ""
                }
            });
            return response.data?.data || [];
        } catch (error) {
            return thunkAPI.rejectWithValue("Failed to fetch videos");
        }
    }
);

const videoSlice = createSlice({
    name: "video",
    initialState,
    reducers: {
        addVideo: (state, action: PayloadAction<VideoType>) => {
            state.videos.push(action.payload);
        },
        removeVideo: (state, action: PayloadAction<string>) => {
            state.videos = state.videos.filter((video) => video.id !== action.payload);
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchVideos.fulfilled, (state, action: PayloadAction<VideoType[]>) => {
                state.videos = action.payload;
            })
            .addCase(fetchVideos.rejected, (state, action) => {
                console.log(action.payload || "Error fetching videos");
            });
    },
});

export const { addVideo, removeVideo } = videoSlice.actions;
export default videoSlice.reducer;
