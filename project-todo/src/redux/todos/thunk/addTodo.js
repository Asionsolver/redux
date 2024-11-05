import { added } from "../actions";


const addTodo = (todoText) => {
  return async (dispatch) => {
    const url = "http://localhost:9000/todos";
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify({
        text: todoText,
        completed: false,
      }),
        headers: {
            "Content-Type": "application/json; charset= UTF-8",
            
        },
    });
    const todo = await response.json();
    dispatch(added(todo.text));
  };
};

export default addTodo;
