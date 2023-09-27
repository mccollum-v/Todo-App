import React, { useState } from 'react'
import Todo from './Todo';

const Todos = () => {
    const [value, setValue] = useState("")
    const [todo, setTodo] = useState([])
// here is the functionality
    const handleClick= () => {
        setTodo([...todo, value])
        setValue("")
    }
    console.log(todo)

  return (
// here is my list of todos
    <div>
        <input value={value} onChange={(e) => setValue(e.target.value)} />
        <button onClick={handleClick}>Add to list</button>
        <div>
             <ol>
                {todo.map(todoItems => (
               <Todo item={todoItems} setTodo={setTodo} todo={todo}/>         
            // taking the set todo function and passing it to the todo component.   
         ))}
         </ol>
    </div>
</div>
);
};

export default Todos;
