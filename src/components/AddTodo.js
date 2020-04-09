import React, { Component } from "react";

class AddTodo extends Component() {
  state = {
    title: ""
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <form style={{ display: "flex" }}>
        <input
          type="text"
          name="title"
          style={{ flex: "10", padding: "5" }}
          placeholder="Add Todo Item ..."
          value={this.state.title}
          onChange={this.onChange}
        />
        <input
          type="submit"
          name="submit"
          className="btn"
          style={{ flex: "1" }}
        />
      </form>
    );
  }
}

export default AddTodo;
