import React from "react";
import "./App.css";
import { addNewTodo } from "./actions";
import { connect } from "react-redux";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newTodo: ""
    };
  }

  render() {
    return (
      <div>
        <input type="text" name="task" placeholder="task" />

        <div>
          {this.props.todos.map((todo, index) => (
            <h4>
              {todo.value}
              {todo.completed}
            </h4>
          ))}{" "}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  todos: state.todos
});
export default connect(
  mapStateToProps,
  { addNewTodo }
)(App);
