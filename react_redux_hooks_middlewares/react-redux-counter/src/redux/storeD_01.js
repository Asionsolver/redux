import {createStore} from "redux";
import counterReducer from './counter/counterReducerV01';

const store = createStore(counterReducer);

export default store;