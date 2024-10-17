const fetch = require("node-fetch");

const delayActionMiddleware = (store) => (next) => (action) => {
  if (action.type === "todos/todoAdded") {
    console.log("I am delaying the action");
    setTimeout(() => {
      next(action);
    }, 2000);

    return;
  }

  return next(action);
};

const url = "https://jsonplaceholder.typicode.com/todos?_limit=5";

const fetchTodosMiddleware = (store) => (next) => async (action) => {
  if (action.type === "todos/fetchTodos") {
    const response = await fetch(url);
    const todos = await response.json();

    store.dispatch({
      type: "todos/todoLoaded",
      payload: todos,
    });

    console.log(`Todos fetched: ${store.getState().todos.length}`);

    return;
  }

  return next(action);
};

module.exports = {
  delayActionMiddleware,
    fetchTodosMiddleware,
};
