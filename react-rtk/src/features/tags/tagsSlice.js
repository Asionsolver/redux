import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getTags } from "./tagApi";

const initialState = {
  tags: [],
  isLoading: false,
  isError: false,
  error: "",
};

// Async thunk to fetch tags
// This function will be called when the action is dispatched
// It will return a promise that resolves to the data returned from the API

export const fetchTags = createAsyncThunk("tags/fetchTags", async () => {
  const response = await getTags();
  return response;
});

export const tagSlice = createSlice({
  name: "tags",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchTags.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchTags.fulfilled, (state, action) => {
        state.isLoading = false;
        state.tags = action.payload;
      })
      .addCase(fetchTags.rejected, (state, action) => {
        state.isLoading = false;
        state.tags = [];
        state.isError = true;
        state.error = action.error?.message;
      });
  },
});

export default tagSlice.reducer;
