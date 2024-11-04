const fetch = require("node-fetch");

const url = "https://jsonplaceholder.typicode.com/todos?_limit=5";
const fetchTodos = async (dispatch, getState) => {
  const response = await fetch(url);
  const todos = await response.json();

  dispatch({
    type: "todos/todoLoaded",
    payload: todos,
  });

  console.log(`Total Todos fetched: ${getState().todos.length}`);
};

module.exports = {
  fetchTodos,
};
