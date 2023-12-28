import React from 'react'
import style from "./Todo.module.css";
import { FaTrashAlt } from "react-icons/fa";

const Todo = ({todo,markCompleted,deleteTodo}) => {
  
    const inputChangeHandler = () =>{
        markCompleted(todo.id);
    }
    
    const deleteBtnHandler = () =>{
        deleteTodo(todo.id);
    }

    return (
   <li className={style.Todo} style={{textDecoration:`${todo.completed? 'line-through' :'' }`}} >
        <input onChange={inputChangeHandler} type="checkbox" defaultChecked={todo.completed} />
        {todo.task}
        <span onClick={deleteBtnHandler} className={style.TodoDeletBtn}><FaTrashAlt /></span>
   </li>
  )
}

export default Todo