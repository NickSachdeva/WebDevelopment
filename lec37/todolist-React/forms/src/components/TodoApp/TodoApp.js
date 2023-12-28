import React, {useState,useEffect} from 'react'
import Form from '../Form/Form';
import TodoList from '../TodoList/TodoList';
import classes from "./TodoApp.module.css";
// import {v4 as uuid} from 'uuid';


const TodoApp = () => {
  
    // const dummy_todos = [
    //     {
    //         id:uuid(),
    //         task:'Go to shopping',
    //         completed:false
    //     },
    //     {
    //         id:uuid(),
    //         task:'Buy Groceries',
    //         completed:false
    //     },
    //     {
    //         id:uuid(),
    //         task:'Watch Movies',
    //         completed:true
    //     },
    //     {
    //         id:uuid(),
    //         task:'Learn React',
    //         completed:true
    //     }
    // ];

    const dummy_todos = JSON.parse(window.localStorage.getItem('todos') || '[]');

    const [todos, setTodos] = useState(dummy_todos);

    // useEffect(()=>{
    //     console.log('Inside useEffect');
    // },[])
    
    
    
    const addTodos = (todo) =>{
        setTodos([...todos,todo]);
    }

    const markCompleted = (id) =>{
        setTodos((prevState)=>{
            return prevState.map((item)=>item.id===id?{...item,completed:!item.completed}:item);
        })
    }
    
    const deleteTodo = (id) =>{
        
        // const newTodo = todos.filter((todo)=>todo.id!==id)

        setTodos((prevState)=>{

            return prevState.filter((todo)=>todo.id!==id);
        });
    }

    useEffect(()=>{       
        window.localStorage.setItem('todos',JSON.stringify(todos));
    },[todos]);

    return (
    <div className={classes.TodoApp}>
        
        <h1 style={{textAlign:'center'}}>Todo App</h1>
        <Form addTodos={addTodos} />
        <TodoList todos={todos} markCompleted={markCompleted} deleteTodo={deleteTodo}/>
        
    </div>
  )
}

export default TodoApp