import React, {useState,useEffect} from 'react'

function HookCounterOne() {    
  const [count,setCount] = useState (0)
  const [name,setName] = useState ('')

    useEffect(() => {       
      document.title = `you clicked ${count} times`
      console.log('useeffect - updating document title')
    },[count])
  return (
    <div>
        <input type='text' value={name} onChange={e => setName(e.target.value)}></input>
        <button onClick={() => setCount(count + 1)}>
            count {count} times
        </button>
    </div>
  )
}

export default HookCounterOne