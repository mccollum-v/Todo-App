import './App.css'
import Todos from './Components/Todos'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Counter from "./Components/Counter"

function App() {

  return (
    <div>
      <Header/>
      <Counter/>
      <Todos/>
      <Footer/>
    </div>
  )
}

export default App

// let arry = [1,2,3,1,3,4,5]   (line 1 is declaring a value)
// const repeatNum =(arr)=>{
// let storedNum = []
// for(let i=0;i<arr.length;i++){
//     for(let j=i+1;j<arr.length;j++){
//       if(arr[i]==arr[j]){
//         storedNum.push(arr[i])
//       }
//     }
// }  return storedNum
// }
// console.log(repeatNum(arry))

/*

Create a React ToDo application from scratch. 
Your Todo component(s) should
MVP:
[X] allow the user to enter a task (input) 
[X] view the list of todo tasks. 
[X] a user should be able to delete a specific task from the task list
[ ] create useState that will keep track of the count. (setCount, currentCount = useState...)
[ ] implement a component that allows the user to keep track of how many tasks they have completed in total (aka a counter) --> Every time a list is marked completed, you are going to add one to the count.
[X] create a new folder called "components." Inside of components, create a header and a footer component. 
    [X] import into App
        <Header>
        <TodoApplication>
        <Footer>


STRETCH GOALS:        
In addition to the components that make up the todo and counter functionality, you should include multiple components that are not part of the functionality of the todo application (such as a Header or Footer component). Please style these components to make a cohesive overall design of your web application. (BONUS: Allow the user to edit specific tasks or add tasks to a pending category)


*/