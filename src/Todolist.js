import { useEffect,useState  } from "react"; 
import React from 'react'

const Todolist=()=> {

const [todos,setTodos] = useState([]) ;//initialisation 
 const [inputvalues,setInputvalues]=useState('');
useEffect (()=>{
const initialTodo=[{ id: 1, text: 'Learn React Hooks' },
    { id: 2, text: 'Build a todo app' },
    { id: 3, text: 'Master useEffect' }]
setTodos(initialTodo)

},[]);


const handelInputChange=(e)=>{
    
    setInputvalues(e.target.value)

}
const handelAddvalue=()=>{
    if  ( inputvalues.trim !=='' ){
        const newTodo={
            id:todos.length+1,
            text:inputvalues
        }
        setTodos([...todos,newTodo]);
        setInputvalues('')
 
    }
};
const handelDelete= (id)=>{
    const updatedtodo = todos.filter (todo =>todo.id!==id)
setTodos (updatedtodo);
}
  return (
    <div>
      <h1>todo list</h1>
      <input   type='text' value={inputvalues} onChange={handelInputChange}   placeholder="enter your todo"      /> 
      <button onClick={handelAddvalue}>add </button>
      <ul>
       { todos.map (todo=>(
        <li key={todo.id}>{todo.text}
        <button onClick={()=> handelDelete(todo.id)} >delete</button>
        
        </li>
       ))}
      </ul>
    </div>
  )
}

export default Todolist



