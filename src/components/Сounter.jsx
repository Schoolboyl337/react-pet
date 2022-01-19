import React, { useState } from 'react'

const Counter = () => {
    const [count,setCount] = useState(0)

    function countStonks() {
        setCount(count + 10)
      }
    
      function countDebaff() {
        setCount(count - 5)
      }
    

    return (
        <div className="func-counter">
            <h1>Значение : {count}</h1>
            <button onClick={countStonks}>Тык и он вырос на 10</button>
            <button onClick={countDebaff}>Тык и он уменьшился на 5</button>
        </div>
    )
}

export default Counter
