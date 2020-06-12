import React from 'react'

const todos = ({todos, deleteTodoItem})=>{

    const todolist = todos.length ? (
        todos.map(todo=>{
            return(
                <div className="collection-item" key={todo.id}>
                    <div>
                        {todo.content} <i onClick={()=>{deleteTodoItem(todo.id)}} className="fas fa-trash-alt right"></i>
                    </div>
                </div>
            )
        })
    ): (
        <p className="center"> You have no todes left</p>
    )
    return(
        <div className="todos collection">
            {todolist}
        </div>
    )
}

export default todos;
