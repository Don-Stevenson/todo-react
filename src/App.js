import React, { Component } from "react";
import Todos from "./components/Todos";
import Header from "./components/layout/Header"

class App extends Component {
  state = {
    todos: [
      { id: 1, title: "take out the trash", completed: false },
      { id: 2, title: "dinner with gf", completed: false },
      { id: 3, title: "meeting with boss", completed: false }
    ]
  };

  // toggle todo comppete
  markComplete = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  };

// delete todo
delTodo =(id)=> {
  this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id) ]})

}

  render() {
    console.log(this.state.todos.title);
    return (
      <div className="App">
        <Header /> 
        <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
      </div>
    );
  }
}

export default App;
