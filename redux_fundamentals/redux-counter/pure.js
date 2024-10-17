const initialState ={
    value: 5,
}

function impure(multiplier){
    initialState.value = initialState.value * multiplier;
}
// function pure(state=initialState,multiplier){
//      ...state,
//     state.value = state.value * multiplier;
// }

impure(2);
// pure(2);
console.log(initialState.value);

impure(2);
// pure(5);
console.log(initialState.value);