const createSlice = require("@reduxjs/toolkit").createSlice;
const { counterAction } = require("../counter/counterSlice");
// initialState
const initialState = {
  dynamicCount: 0,
};

// create counterSlice using createSlice function
const dynamicCounterSlice = createSlice({
  name: "dynamicCounter",
  initialState,
  reducers: {
    dynamicIncrement: (state, action) => {
      state.dynamicCount += action.payload;
    },
    dynamicDecrement: (state, action) => {
      state.dynamicCount -= action.payload;
    },
  },
  //   extraReducers: (builder) => {
  //     Use builder callback notation
  //     builder.addCase("counter/increment", (state, action) => {
  //       state.dynamicCount += 1;
  //     });
  //   },

  // recommendation: use builder.addCase instead of builder.addCase
  extraReducers: (builder) => {
    builder.addCase(counterAction.increment, (state, action) => {
      state.dynamicCount += 1;
    });
  },
});

// export reducer

module.exports = dynamicCounterSlice.reducer;

// export actions
module.exports.dynamicCounterAction = dynamicCounterSlice.actions;
