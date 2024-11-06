const configureStore = require("@reduxjs/toolkit").configureStore;

const counterReducer = require("../features/counter/counterSlice");
const dynamicCounterReducer = require("../features/dynamicCounter/dynamicCounterSlice");

// configure Store
const store = configureStore({
  reducer: {
    counter: counterReducer,
    dynamicCounter: dynamicCounterReducer,
  }
});

module.exports = store;
