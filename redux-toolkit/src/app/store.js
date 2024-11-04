import { configureStore } from '@reduxjs/toolkit';
import countersReducer from '../features/counters/counterSlice';
import dynamicCounterReducer from '../features/dynamicCounter/dynamicCounterSlice';

const store = configureStore({
    reducer: {
        counters: countersReducer,
        dynamicCounter: dynamicCounterReducer,
    },
});

export default store;