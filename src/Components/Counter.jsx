import React, {useState} from "react"

function Counter () {
  
  const [count, setCount] = useState (0) 

  const handleUp = () => {
    setCount(count + 1)

  } 

  const handleDown = () => {
    setCount(count - 1)

  }

  return (

    <>
    
     <button onClick={handleUp}>Up +1</button>
     <div>{count}</div>
     <button onClick={handleDown}>Down -1</button>

    </>

  )
}

export default Counter
