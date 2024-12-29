
import './Todo.css';
import react,{useState} from 'react'
function Todo() {

    const [inputValue,setInputValue]=useState('');
    const [todos,setTodos]=useState([]);


   const addToDo=()=>{
    
    if(inputValue.trim()!=='')
    {
        const newTodo={
            id:new Date().getTime(),
            text:inputValue
        }

        setTodos([...todos,newTodo]);
        setInputValue('');
    }

   }

   const deleteTodo=(id)=>
   {
    const updatetodo=todos.filter((todo)=>todo.id!==id);
    setTodos(updatetodo);
   }

  return (
    <div className="container">
  
     <h1>To Do List</h1> 

     <input type='text'  placeholder='Enter Task Here To do.....' value={inputValue} onChange={(e)=> setInputValue(e.target.value)}></input> 
     <button type='submit' id='add' onClick={addToDo}>Submit</button>

     <ul>
        { todos.map((todo)=>
        (
            <li key={todo.id}>{todo.text}
           <button onClick={()=>deleteTodo(todo.id)} id='delete'>Delete</button>
           </li>
            
        ))}
     </ul>
   </div>
  );
}

export default Todo;
