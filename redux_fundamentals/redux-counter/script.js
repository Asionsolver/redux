const counterEl = document.getElementById("counter");
const incrementEl = document.getElementById("increment");
const decrementEl = document.getElementById("decrement");

// ! Step 06:action identifiers

const INCREMENT = "increment";
const DECREMENT = "decrement";

// ! Step 07: action creators

const increment = (value) => {
  return {
    type: INCREMENT, // type is mandatory
    payload: value,
  };
};
const decrement = (value) => {
  return {
    type: DECREMENT, // type is mandatory
    payload: value,
  };
};

// ! Step 01: initial state

const initialState = {
  value: 0,
};


// ! Step 02: create reducer function

function counterReducer(state = initialState, action) {
  if (action.type === INCREMENT) {
    return {
      ...state,
      value: state.value + action.payload,
    };
  } else if (action.type === DECREMENT) {
    return {
      ...state,
      value: state.value - action.payload,
    };
  } else {
    return state;
  }
}

// ! Step 03: create store

const store = Redux.createStore(counterReducer);

const render = () => {
  const state = store.getState();
  counterEl.innerText = state.value.toString();
};
// ! Step 05: subscribe to store and UI manually update
store.subscribe(render);

// initially UI update
render();

// ! Step 04: button click listeners

incrementEl.addEventListener("click", () => {
  store.dispatch(increment(5));
});

decrementEl.addEventListener("click", () => {
  store.dispatch(decrement(2));
});
