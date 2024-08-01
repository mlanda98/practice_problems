import React, { Component } from "react";
import Count from "./count";

class ClassInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
      inputVal: "",
      isEditing: null,
      editVal: "",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleEditChange = this.handleEditChange.bind(this);
    this.handleResubmit = this.handleResubmit.bind(this);
  }

  handleInputChange(e) {
    this.setState({
      inputVal: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState((state) => ({
      todos: state.todos.concat(state.inputVal),
      inputVal: "",
    }));
  }

  handleDelete(todo){
    this.setState((state) => ({
      todos: state.todos.filter((item) => item !== todo)
    }))
  }

  handleEdit(todo){
    this.setState({
      isEditing: todo,
      editVal: todo,
    })
  }
  handleEditChange(e){
    this.setState({
      editVal: e.target.value,
    })
  }

  handleResubmit(e, todo){
    e.preventDefault();
    this.setState((state) => ({
      todos: state.todos.map((item) => (item === todo ? state.editVal : item)),
      isEditing: null,
      editVal: "",
    }))
  }
  
  render() {
    return (
      <section>
        <h3>{this.props.name}</h3>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="task-entry">Enter a task: </label>
          <input
            type="text"
            name="task-entry"
            value={this.state.inputVal}
            onChange={this.handleInputChange}
          />
          <button type="submit">Submit</button>
        </form>
        <Count count={this.state.todos.length}/>
        <h4>All the tasks!</h4>
        <ul>
          {this.state.todos.map((todo) => (
            <li key={todo}>
              {this.state.isEditing ===  todo ? (
                <form onSubmit={(e) => this.handleResubmit(e, todo)}>
                  <input
                    type="text"
                    value={this.state.editVal}
                    onChange={this.handleEditChange}
                  />
                  <button type="submit">Resubmit</button>
                </form>
              ) : (
              <>
                {todo}{" "}
                <button onClick={() => this.handleEdit(todo)}>Edit</button>
                <button onClick={() => this.handleDelete(todo)}>Delete</button>
              </>
              )}
            </li>
          ))}
        </ul>
      </section>
    );
  }
}

export default ClassInput;
