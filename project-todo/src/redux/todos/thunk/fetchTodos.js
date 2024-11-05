import { loaded } from '../actions';

 const fetchTodos = async(dispatch) => {
    const url = 'http://localhost:9000/todos';
    const response = await fetch(url);
    const todos = await response.json();
    dispatch(loaded(todos));
    
 }

 export default fetchTodos;