const { createStore } = require("redux");
const { produce } = require("immer");
// initial state
const initialState = {
  name: "John Doe",
  age: 25,
  address: {
    street: "123 Main St",
    city: "New York",
    country: "USA",
    postCode: "10001",
  },
};

// action creator
const updateStreet = (newStreet) => {
  return {
    type: "UPDATE_STREET",
    payload: newStreet,
  };
};

// reducer

const addressReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_STREET":
      // without using immer
      // return {
      //     ...state,
      //    address: {
      //        ...state.address,
      //        street: action.payload
      //    },
      // };

      // using immer
      return produce(state, (draftState) => {
        draftState.address.street = action.payload;
      });
    default:
      return state;
  }
};

// create store
const store = createStore(addressReducer);

// subscribe to store
store.subscribe(() => {
  console.log(store.getState());
});

// dispatch actions
store.dispatch(updateStreet("123 Elm St"));
