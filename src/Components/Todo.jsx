import React from 'react'



const Todo = ({item, setTodo, todo}) => {
    // console.log(props.item)
    console.log(item)
    // create delete function that filters thru todo array and delete item.
    function handleDelete(){
        let filteredTodos = todo.filter((todoItem) => {
            // if todoItem is same as item then return false.
            if(todoItem === item){
                return false
                
            }
            // else return true
            else {
                return true
            }
            
        }) 

        setTodo(filteredTodos)

    }
  return (

//  use the curly backets to display the value.  
        //  <li>{todoItems}</li>
<>
         <li>{item}<button onClick={handleDelete} >Delete</button></li>

       
</>
  )
}

export default Todo


