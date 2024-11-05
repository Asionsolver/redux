import { colorSelected } from "../actions";

const updateColorChange = (todoId, color) => {
  return async (dispatch) => {
    const url = `http://localhost:9000/todos/${todoId}`;
    const response = await fetch(url, {
      method: "PATCH",
      body: JSON.stringify({
        color: color,
      }),
      headers: {
        "Content-Type": "application/json; charset= UTF-8",
      },
    });
    const todo = await response.json();
    dispatch(colorSelected(todo.id, todo.color));
  };
};

export default updateColorChange;