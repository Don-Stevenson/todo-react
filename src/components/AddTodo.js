import React, { Component } from "react";
import PropTypes from 'prop-types'

class AddTodo extends Component() {
  state = {
    title: ""
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.AddTodo(this.state.title);
    this.setState({ title: "" });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit} style={{ display: "flex" }}>
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
//PropTypes
AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
};

export default AddTodo;
