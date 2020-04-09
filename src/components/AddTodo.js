import React, { Component } from "react";

class AddTodo extends Component() {
  render() {
    return (
      <form style={{ display: 'flex' }}>
        <input type="text" name="title" style={{flex: '10', padding: '5' }}placeholder="Add Todo Item ..." />
        <input
          type="submit"
          name="submit"
          className="btn"
          style={{ flex: '1' }}
        />
      </form>
    );
  }
}

export default AddTodo;
