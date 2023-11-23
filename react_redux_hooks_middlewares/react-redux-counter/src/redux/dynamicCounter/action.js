import { DyDECREMENT, DyINCREMENT } from "./actionTypes";

export const increment = (value) => {
  return {
    type: DyINCREMENT,
    payload: value,
  };
};
export const decrement = (value) => {
  return {
    type: DyDECREMENT,
    payload: value,
  };
};
