import { deleted } from "./../actions";

const deleteTodo = (todoId) => {
  return async (dispatch) => {
    const url = `http://localhost:9000/todos/${todoId}`;
    const response = await fetch(url, {
      method: "DELETE",
    });

    dispatch(deleted(todoId));
  };
};

export default deleteTodo;
