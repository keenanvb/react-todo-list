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

  componentWillMount(){
    let todos = this.state.todos;

    if (localStorage.getItem("todos") === null) {
      localStorage.setItem('todos',JSON.stringify(todos));
    }else if(localStorage.getItem("todos") !== null ){
      let localStorageTodos = JSON.parse(localStorage.getItem('todos'));
      this.setState({
        todos:localStorageTodos
      });
    }
  }

  onDelete = (id) =>{
    let delTodo = this.state.todos[id];
    let todos = this.state.todos.filter((todo) => {
      return todo !== delTodo
    });

    this.setState({
      todos
    });
    localStorage.setItem('todos',JSON.stringify(todos));
  }

  addTodo = (newTodo) =>{
    let todos = [...this.state.todos,newTodo];
      setTimeout(()=>{
        this.setState({
          todos
        });
      },250);
      
      localStorage.setItem('todos',JSON.stringify(todos));
  }


  editTodo = (editTodo,updatedTodo)=>{
    let index = editTodo;
    let updatedTodos = this.state.todos;
    updatedTodos.splice(index,1,updatedTodo);

    this.setState({
      todos: updatedTodos
    });
    localStorage.setItem('todos',JSON.stringify(updatedTodos));
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
    localStorage.setItem('todos',JSON.stringify(todos));
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
    localStorage.setItem('todos',JSON.stringify(todos));

  }

  getResult = () =>{
    let completed;
    let completedLength;
    let list = this.state.todos.length;

    if(list > 0 ){
      completed = this.state.todos.filter((todo)=>{
        return todo.completed === true;
      });

      completedLength = completed.length;
    }else{
      completedLength = 0
    }

    return {
      completedLength,
      list
    }
  }

  clear = () =>{
    this.setState({
      todos:''
    })
  }

  render() {

    let todoStats = this.getResult();
    let todos = this.state.todos;
    //let localStorageTodos = JSON.parse(localStorage.getItem('todos'));    
    return (
      <div className="App">
        <header className="App-header">
          <div>Todos</div>
          <div onClick={()=>{this.clear()}}>Clear</div>
          <div>{todoStats.completedLength}/{todoStats.list}</div>
        </header>
        <AddTodo addTodo={this.addTodo} />
        <div style={{overflowY:"scroll", height:"500px"}}>
        <Todos todos={todos} onDelete={this.onDelete} changeToggle={this.changeToggle} editTodo={this.editTodo} changeToggleCompleted={this.changeToggleCompleted}/>
        </div>
        <div className="footer">

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