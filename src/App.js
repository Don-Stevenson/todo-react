import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
import About from "./components/pages/About";
// import uuid from 'uuid';
import axios from "axios";

import "./App.css";

const App = props => {
  const [todos, setTodos] = useState([]);
  const [state, setState] = useState({
    todos: []
  });

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then(res => setTodos(res.data));
  }, []);

  // Toggle Complete
  const markComplete = id => {
    setState({
      ...state,
      todos: state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  };

  // Delete Todo
  const delTodo = id => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(res =>
        setState({
          ...state,
          todos: [...state.todos.filter(todo => todo.id !== id)]
        })
      );
  };

  // Add Todo
  const addTodo = title => {
    axios
      .post("https://jsonplaceholder.typicode.com/todos", {
        title,
        completed: false
      })
      .then(res => {
        // res.data.id = uuid.v4();
        setState({ ...state, todos: [...state.todos, res.data] });
      });
  };

  return (
    <Router>
      <div className="App">
        <div className="container">
          <Header />
          <Route
            exact
            path="/"
            render={props => (
              <React.Fragment>
                <AddTodo addTodo={addTodo} />
                <Todos
                  todos={state.todos}
                  markComplete={markComplete}
                  delTodo={delTodo}
                />
              </React.Fragment>
            )}
          />
          <Route path="/about" component={About} />
        </div>
      </div>
    </Router>
  );
};

export default App;
