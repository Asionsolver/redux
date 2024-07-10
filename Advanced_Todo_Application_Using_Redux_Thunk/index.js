const { createStore, applyMiddleware } = require("redux");
const {delayActionMiddleware} = require("./middlewares/middlewares")
// initial state
const initialState = {
  todos: [],
};

// reducer function

const todoReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "todos/todoAdded":
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            title: payload,
          },
        ],
      };
    case "todos/todoLoaded":
      return {
        ...state,
        todos: [...state.todos, ...payload],
      };

    default:
      break;
  }
};

// store
const store = createStore(todoReducer, applyMiddleware());

// subscribe to state changes
store.subscribe(() => {
  console.log(store.getState());
});

// dispatch actions
store.dispatch({
  type: "todos/todoAdded",
  payload: "Learn Redux",
});

store.dispatch({
  type: "todos/todoAdded",
  payload: "Learn React-Redux",
});
