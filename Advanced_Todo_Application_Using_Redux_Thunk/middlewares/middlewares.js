const delayActionMiddleware = (store) => (next) => (action) => {
  if (action.type === "todos/todoAdded") {
    console.log("I am delaying the action");
    setTimeout(() => {
      next(action);
    }, 2000);
  } else {
    next(action);
  }
};

module.exports = {
  delayActionMiddleware,
};
