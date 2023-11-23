

import { DyINCREMENT,DyDECREMENT } from './actionTypes';

const initialState = {
  value: 5,
};

const dynamicCounterReducer = (state = initialState, action) => {
    switch(action.type){
        case DyINCREMENT:
        return{
            ...state,
            value: state.value + action.payload,
        }

        case DyDECREMENT:
        return{
            ...state,
            value: state.value - action.payload,
        }
        default:
            return state;
    }
};

export default dynamicCounterReducer;
