import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getVideo } from "./videoApi";

const initialState = {
  video: {},
  isLoading: false,
  isError: false,
  error: "",
};

// Async thunk to fetch videos
// This function will be called when the action is dispatched
// It will return a promise that resolves to the data returned from the API

export const fetchVideo = createAsyncThunk("video/fetchVideo", async (id) => {
  const response = await getVideo(id);
  return response;
});

export const videoSlice = createSlice({
  name: "video",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchVideo.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchVideo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.video = action.payload;
      })
      .addCase(fetchVideo.rejected, (state, action) => {
        state.isLoading = false;
        state.video = {};
        state.isError = true;
        state.error = action.error?.message;
      });
  },
});

export default videoSlice.reducer;
