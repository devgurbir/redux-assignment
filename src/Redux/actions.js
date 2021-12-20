import actionConstants from "./actionConstants";
import { v4 as uuid } from "uuid";

export const counterIncrement = () => {
  return {
    type: actionConstants.COUNTER_INCREMENT,
    payload: 1
  };
};

export const counterDecrement = () => {
  return {
    type: actionConstants.COUNTER_INCREMENT,
    payload: -1
  };
};

export const addTodos = (text) => {
  return {
    type: actionConstants.ADD_TODO,
    payload: {
      title: text,
      status: false,
      id: uuid()
    }
  };
};
