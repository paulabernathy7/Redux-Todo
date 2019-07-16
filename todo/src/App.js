import React from "react";
import "./App.css";
import { addNewTodo, toggleTodo } from "./actions";
import { connect } from "react-redux";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newTodo: ""
    };
  }

  handleChange = event => {
    this.setState({ newTodo: event.target.value });
  };

  addTodo = event => {
    event.preventDefault();
    this.props.addNewTodo(this.state.newTodo);
    this.setState({ newTodo: "" });
  };

  toggleTodo = (event, todo) => {
    event.preventDefault();
    this.props.toggleTodo(todo);
  };

  render() {
    return (
      <div>
        <h1>Todo List</h1>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.newTodo}
          placeholder="task"
        />
        <button onClick={this.addTodo}>Add</button>

        <div>
          {this.props.todos.map(todo => (
            <h4 onClick={event => this.toggleTodo(event, todo)} key={todo}>
              {todo.value}
              {todo.completed}
            </h4>
          ))}{" "}
        </div>
      </div>
    );
  }
}
// create these below after your component
const mapStateToProps = state => ({
  todos: state.todos
});

// passing in all of the functions that
// are reliant on Redux, along with the component itself, so that Redux
// makes itself known to this component.
export default connect(
  mapStateToProps,
  { addNewTodo, toggleTodo }
)(App);
