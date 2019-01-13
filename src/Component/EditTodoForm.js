import React,{ Component } from 'react';

class EditTodo extends Component {
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
            this.props.editTodo(this.props.index,this.state);
            this.setState({
                text:''
            })
        }
    }

    render() {
      return (
        <div className="Edit-Add">
            <form onSubmit={this.handleSubmit}>
            {/* <label>Edit todo</label> */}
            <input style={{width:"90%",marginTop:"6%"}} maxlength="26" type="text" onChange={this.handleChange} value={this.state.text} placeholder="Update"></input>
            </form>
        </div>
      );
    }
  }
  
  export default EditTodo;
  
