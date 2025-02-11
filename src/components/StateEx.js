
import { useState, React } from 'react'
 function StateEx()
 {
    const [count, setCounter] = useState(0)
    function updateCount()
    {
        setCounter(count + 1)
    }
    return(
        <>
        <h1>Button Clicked {count} times</h1>
        <button onClick={updateCount}>Click me</button>
        </>
    );
 }
export default StateEx;