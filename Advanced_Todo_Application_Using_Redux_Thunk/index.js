const { thunk } = require('redux-thunk')
const { createStore, applyMiddleware } = require("redux");
const { fetchTodos } = require("./function");
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
const store = createStore(todoReducer, applyMiddleware(thunk));

// subscribe to state changes
store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(fetchTodos);
