import React, { Component } from 'react'

 class TodoItem extends Component {
    // getTextStyle(){
    //     // if(this.props.todo.completed){
        //     return {textDecoration:'line-through'}
        // }
        // else{
        //     return{textDecoration: 'none'}
        // }
   
        getTextStyle(){
            return{
                textDecoration: this.props.todo.completed
                ? "line-through"
                : "none"

            }
        }
        rowMargin= {
            margin: "15px 0px",
            padding: "10px 0px",
        }
        
    render() {
        const {id, title} = this.props.todo
        return (
            <div className = "todo-item">
               <div className="row" style= {this.rowMargin}>
                   <div className="col-2">
                       <input type = "checkbox" onChange = {this.props.isComplete.bind(this,id)}/>
                   </div>
                   <div className="col-8">
                       <p style = {this.getTextStyle()}>{title}</p>
                   </div>
                   <div className="col-2">
                   <button className = "btn1 btn btn-danger" onClick = {this.props.deleteTodo.bind(this,id)}>X</button>
                   </div>
                   
               </div>
            </div>
        )
    }
}
export default TodoItem