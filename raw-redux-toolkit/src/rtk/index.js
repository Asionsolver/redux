const  store = require('./app/store.js');

const {counterAction}= require('./features/counter/counterSlice');
const {dynamicCounterAction} = require("./features/dynamicCounter/dynamicCounterSlice")


const {increment, decrement} = counterAction;
const {dynamicIncrement, dynamicDecrement} = dynamicCounterAction;

// initialState
console.log(`Initial State: ${JSON.stringify(store.getState())}`);

// subscribe to store
store.subscribe(() => {
    console.log(store.getState());
});

// counter dispatch actions
// store.dispatch(increment());
// store.dispatch(increment());
// store.dispatch(decrement());
// store.dispatch(increment());

// dynamicCounter dispatch actions
store.dispatch(dynamicIncrement(5));
store.dispatch(dynamicIncrement(10));
store.dispatch(dynamicDecrement(3));
store.dispatch(dynamicIncrement(5));