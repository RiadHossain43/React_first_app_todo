import React,{ Component } from 'react';
import './App.css';
// import ContactForm from './components/contactform/index'

import Todos from './components/todos/index'
import AddTodo from './components/addform/index'


class App extends Component {

  state = {
    todos:[]
  }

  deleteTodoItem = (id)=>{
    console.log(id)
    const todos = this.state.todos.filter( todo =>{
      return todo.id !== id
    })
    this.setState({
      todos
    })
  }

  addTodo = (todo)=>{
    todo.id = Math.random()
    let todos = [...this.state.todos,todo]
    this.setState({
      todos
    })
  }

  render(){
    return(
      <div className="todo-app container">
        <AddTodo addTodo= {this.addTodo}/>
        <h1 className="center blue-text">Your Todo List</h1>
        <Todos  todos={this.state.todos} deleteTodoItem={this.deleteTodoItem}/>
      </div>
    )
  }
}

export default App;
