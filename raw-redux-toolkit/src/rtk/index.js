const  store = require('./app/store.js');


const {counterAction}= require('./features/counter/counterSlice');

const {increment, decrement} = counterAction;
// initialState

console.log(`Initial State: ${JSON.stringify(store.getState())}`);

// subscribe to store
store.subscribe(() => {
    console.log(store.getState());
});

// dispatch actions
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(increment());