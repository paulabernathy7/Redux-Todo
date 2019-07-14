import { ADD_TODO } from "../actions";
import { type } from "os";

const initialState = {
  todos: [
    { value: "project", completed: false },
    { value: "read", completed: false }
  ]
};

export const reducer = (state = initialState, action) => {
  //switch logic
  switch (action.type) {
    case ADD_TODO:
      const newTodo = {
        value: action.payload,
        completed: false
      };
      return {
        ...state,
        todos: [...state.todos, newTodo]
      };
    default:
      return state;
  }
};
