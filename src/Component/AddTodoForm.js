import React,{ Component } from 'react';

class AddTodo extends Component {
    state = {
        text:'',
        toggle:false,
        completed: false
    }

    handleChange = (e) =>{
        this.setState({
            text:e.target.value 
        })
    }
  
    handleSubmit = (e) => {
        e.preventDefault();
        if(this.state.text !== ''){
        this.props.addTodo(this.state);
        this.setState({
            text:''
        })
        }
    }

    render() {
      return (
        <div style={{width:"50%",textAlign:"center",margin:"1% auto"}} className="Todo-Add">
            <form onSubmit={this.handleSubmit}>
            <input style={{width:"40%",height:"80%"}}type="text" maxLength="26" onChange={this.handleChange} value={this.state.text} placeholder="Add todo"></input>
            </form>
        </div>
      );
    }
  }
  
  export default AddTodo;
  
