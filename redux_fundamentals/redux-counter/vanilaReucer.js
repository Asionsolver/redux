const arr = [1, 2, 3, 4, 5];


arr.reduce((acc, curr) => {
    return acc + curr;
    }, 0);

const initialState = { value: 0 };

    const actions = [
    { type: "INCREMENT", payload: 5 },
    { type: "DECREMENT", payload: 2 },
    { type: "INCREMENT", payload: 3 },
    { type: "DECREMENT", payload: 1 },
];

const counterReducer = (state, action)=>{
    if(action.type === "INCREMENT"){
        return {
            ...state,
            value: state.value + action.payload,
        };
    }else if(action.type === "DECREMENT"){
        return {
            ...state,
            value: state.value - action.payload,
        };
    }else{
        return state;
    }
};

const finalResult = actions.reduce(counterReducer, initialState);

console.log(finalResult);

