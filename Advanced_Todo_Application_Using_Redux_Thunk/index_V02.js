const { createStore, applyMiddleware } = require("redux");
const { delayActionMiddleware, fetchAsyncMiddleware } = require("./middlewares/middlewares_V02");
const { fetchTodos } = require('./function');
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
const store = createStore(
  todoReducer,
  applyMiddleware(delayActionMiddleware, fetchAsyncMiddleware)
);

// subscribe to state changes
store.subscribe(() => {
  console.log(store.getState());
});



store.dispatch(fetchTodos);
