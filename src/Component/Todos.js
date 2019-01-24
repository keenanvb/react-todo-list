import React,{ Component } from 'react';
import EditTodoForm from './EditTodoForm';

class Todos extends Component {
    state = {
        text:''
    }


    render() {
        const todoList = this.props.todos.length ? (
            this.props.todos.map((todos,index) => {
                return (
                    <div key={index}>
                    <div className="Complete" onClick={()=>{this.props.changeToggleCompleted(index)}}></div>
                    <div style={{cursor: "pointer"}} onClick={()=>{this.props.changeToggle(index)}}> 
                    {todos.completed ? <div style={{textDecoration: "line-through"}}>{todos.text}</div>:<div>{todos.text}</div>}
                    </div>
                    <div className="Delete" onClick={()=>{this.props.onDelete(index)}}></div>
                    {todos.toggle ?  <div>
                        <EditTodoForm editTodo={this.props.editTodo} index={index}/>
                    </div> : null}
                    <div style={{margin:'15px auto',borderBottom:"1px solid black"}}/>  
                    </div>
                    
                )
            })
            ):(
            <p>Todos completed</p>
        )

        return (
        <div style={{width:"240px",textAlign:"center",margin:"auto"}} className="todo-list">
            {todoList}
        </div>
        );
      }

}

export default Todos;


// import React from 'react';
// import EditTodo from './EditTodoForm'
// const Todos = ({todos,onDelete,toggleEdit}) =>{

//     const 

//     const todoList = todos.length ? (
//         todos.map((todos,index) => {
//             return (
//                 <div key={index} onClick={()=>{toggleEdit(index)}}>
//                     {todos.text}
//                     <span onClick={()=>{onDelete(index)}}>X</span>
//                 </div>
//             )
//         })
//         ):(
//         <p>Todos completed</p>
//         )

//     return (
//         <div className="todo-list">
//             {todoList}
//         </div>
//     )
// }

// export default Todos;