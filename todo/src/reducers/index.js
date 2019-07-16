//create reducer
import { ADD_TODO, TOGGLE_TODO } from "../actions";

const initialState = {
  todos: [
    { id: 1528817077286, value: "Todo Project", completed: false },
    { id: 1528817084358, value: "Read 12 Rules for Life", completed: false }
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
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (action.payload.id === todo.id) {
            todo.completed = !todo.completed;
          }
          return todo;
        })
      };
    default:
      return state;
  }
};

// after creating reducer create actions
