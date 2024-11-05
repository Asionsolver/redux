const  createSlice = require("@reduxjs/toolkit").createSlice;


// initialState
const initialState = {
    dynamicCount: 0,
};

// create counterSlice using createSlice function
const dynamicCounterSlice= createSlice({
    name: "dynamicCounter",
    initialState,
    reducers: {
        dynamicIncrement: (state, action) => {
            state.dynamicCount+= action.payload;
        },
        dynamicDecrement: (state, action) => {
            state.dynamicCount-=action.payload;
        }
    },
})

// export reducer

module.exports = dynamicCounterSlice.reducer;

// export actions
module.exports.dynamicCounterAction = dynamicCounterSlice.actions;
