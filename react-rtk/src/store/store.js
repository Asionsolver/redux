import { configureStore } from "@reduxjs/toolkit";

import videosReducer from "../features/videos/videosSlice";
import tagsReducer from "../features/tags/tagsSlice";
import videoReducer from "../features/video/videoSlice";

export const store = configureStore({
  reducer: {
    videos: videosReducer, // Add the  videos slice reducer
    tags: tagsReducer, // Add the tags slice reducer
    video: videoReducer, // Add the video slice reducer
  },
});
