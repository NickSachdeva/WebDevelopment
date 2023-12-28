import React from 'react'
import Todo from '../Todo/Todo';
import classes from "./TodoList.module.css";

const TodoList = ({todos, markCompleted,deleteTodo}) => {
  
    // const allTodos = props.todos.map((item)=>{
    //     return <Todo key={item.id} id={item.id} task={item.task} />
    // })
  
  
    return (
    <section>
        <ul className={classes.TodoList}>
            {   
                todos.map((item) => {
                return <Todo key={item.id} 
                            id={item.id} 
                            todo={item} 
                            markCompleted={markCompleted} 
                            deleteTodo={deleteTodo} />
                })
            }
        </ul>
    </section>
    )
}

export default TodoList