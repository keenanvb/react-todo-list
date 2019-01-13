import React, { Component } from 'react';
import Todos from './Component/Todos';
import AddTodo from './Component/AddTodoForm'
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    todos:[{
      text:'Make a todo list',
      toggle:false,
      completed: false
    }]
  }

  onDelete = (id) =>{
    let delTodo = this.state.todos[id];
    let todos = this.state.todos.filter((todo) => {
      return todo !== delTodo
    });

    this.setState({
      todos
    });
  }

  addTodo = (newTodo) =>{
    let todos = [...this.state.todos,newTodo];
      setTimeout(()=>{
        this.setState({
          todos
        });
      },250)  
  }


  editTodo = (editTodo,updatedTodo)=>{
    let index = editTodo;
    let updatedTodos = this.state.todos;
    updatedTodos.splice(index,1,updatedTodo);

    this.setState({
      todos: updatedTodos
    });
  }

  changeToggle = (id) =>{
    let findTodo = this.state.todos[id];
    let todos = this.state.todos.map((todo) => {
      if(todo === findTodo){
        if(todo.toggle){
          todo.toggle = false
        }else{
          todo.toggle = true;
        }
      }
      return todo;
    });

    this.setState({
      todos
    });

  }

  changeToggleCompleted = (id) =>{
    let findTodo = this.state.todos[id];
    let todos = this.state.todos.map((todo) => {
      if(todo === findTodo){
        if(todo.completed){
          todo.completed = false
        }else{
          todo.completed = true;
        }
      }
      return todo;
    });

    this.setState({
      todos
    });

  }

  clear = () =>{
    this.setState({
      todos:''
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div>Todos</div>
          <div onClick={()=>{this.clear()}}>Clear</div>
        </header>
        <AddTodo addTodo={this.addTodo} />
        <div style={{overflowY:"scroll", height:"500px"}}>
        <Todos todos={this.state.todos} onDelete={this.onDelete} changeToggle={this.changeToggle} editTodo={this.editTodo} changeToggleCompleted={this.changeToggleCompleted}/>
        </div>
        <div class="footer">

        </div>
      </div>
    );
  }
}

export default App;

/*
<div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Todos
          </p>
        </header>
      </div>
*/