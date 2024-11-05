const  createSlice = require("@reduxjs/toolkit").createSlice;


// initialState
const initialState = {
    count: 0,
};

// create counterSlice using createSlice function
const counterSlice= createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state, action) => {
            state.count++;
        },
        decrement: (state, action) => {
            state.count--;
        }
    },
})

// export reducer

module.exports = counterSlice.reducer;

// export actions
module.exports.counterAction = counterSlice.actions;
