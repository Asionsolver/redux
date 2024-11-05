import { toggled } from "../actions";

const updateStatus = (todoId, currentStatus) => {
  return async (dispatch) => {
    const url = `http://localhost:9000/todos/${todoId}`;
    const response = await fetch(url, {
      method: "PATCH",
      body: JSON.stringify({
        completed: !currentStatus,
      }),
      headers: {
        "Content-Type": "application/json; charset= UTF-8",
      },
    });
    const todo = await response.json();
    dispatch(toggled(todo.id));
  };
};

export default updateStatus;
