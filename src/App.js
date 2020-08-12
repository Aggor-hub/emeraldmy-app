import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import "./App.css";


// pages
import About from './pages/about';
import Blog from './pages/blog';
// components
import Header from './components/header';
import Todos from "./components/Todos";
import AddTodo from "./components/add-todo";

 class App extends Component {
   state={
     todos:[
       {
         id:1,
         title: "todo 1",
         completed: true
       },
       {
        id:2,
        title: "todo 2",
        completed: true
      },
      {
        id:3,
        title: "todo 3",
        completed: true
      },
      {
        id:4,
        title: "todo 4",
        completed: false
      },
      {
        id:5,
        title: "todo 5",
        completed: false
      },
     ]
     
   }
   isComplete = (id)=>{
    this.setState({todo: this.state.todos.map(todo=>{
      if(todo.id === id)
      {
        todo.completed = !todo.completed
        return todo
      }
    
    }) })
    
  }
  deleteTodo = (id)=>{
    this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)] })
  }
  addTodo =(title)=>
  {
    let newTodo ={
      id : this.state.todos.length +1,
      title: title,
      completed: false
    }
this.setState({todos: [...this.state.todos,newTodo] })

  }
  render() {
    return (
        <Router>

  <div>
    <Header/>
      <div ClassName = "container" style = {{marginTop: "25px"}}>
        <Route exact path ="/" render = {props => (
          <React.Fragment>
            <AddTodo addTodo  = {this.addTodo} />
        <Todos 
        todos = {this.state.todos} isComplete = {this.isComplete}
        deleteTodo={this.deleteTodo}
        />
          </React.Fragment>
        )} />
          
      <Route path ="/about" component = {About} />
        <Route path ="/blog" component = {Blog} />
      </div>


    </div>
    </Router>
  
    )
  }
}
export default App