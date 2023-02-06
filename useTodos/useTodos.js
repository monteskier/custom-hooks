import { useReducer } from "react"
import {todoReducer} from './todoReducer'
import { useEffect } from "react";

export const useTodos = ()=>{
  
  const init = ()=>{
    return JSON.parse(localStorage.getItem('todos')) || [];
  }
  const [todos, dispatch ] = useReducer(todoReducer, [], init)

  useEffect(()=>{
    localStorage.setItem('todos',JSON.stringify(todos) || []);

  },[todos]);

  const handleOnNewTodo = (todo)=>{
    const action = {
      type:'[TODO] Add Todo',
      payload: todo,
    }
    dispatch( action );
  }
  const handleOnDeleteTodo = (id)=>{
    
    const action = {
      type:'[TODO] Remove Todo',
      payload:id,
    }
    dispatch(action);
        
  }
  const handleOnToggleTodo = (id)=>{
    const action = {
      type:'[TODO] Toggle Todo',
      payload:id,
    }
    dispatch(action);
  }


  return({todos,
    handleOnDeleteTodo,
    handleOnToggleTodo,
    handleOnNewTodo,
    pendingTodosCount:todos.filter(todo=> !todo.done).length,
    todosCount:todos.length,
    
   });
 
}
