import React, {useState,useEffect} from 'react'

function HookCounter() {    
  const [count,setCount] = useState (0)
  const [name,setName] = useState ('')

    useEffect(() => {
      console.log(object)
      document.title = `you clicked ${count} times`
    })
  return (
    <div>
        <input type='text' value={name} onChange={(e.target.value)}></input>
        <button onClick={() => setCount(count + 1)}>
            count {count} times
        </button>
    </div>
  )
}

export default HookCounter