

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



const fetchTodosMiddleware = (store) => (next) => async (action) => {
  if (action.type === "todos/fetchTodos") {
    

    return;
  }

  return next(action);
};

module.exports = {
  delayActionMiddleware,
  fetchTodosMiddleware,
};
