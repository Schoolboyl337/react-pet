import React, { useState } from 'react'

const Counter = () => {
    const [count,setCount] = useState(0)

    function huiStonks() {
        setCount(count + 10)
      }
    
      function huiDebaff() {
        setCount(count - 5)
      }
    

    return (
        <div className="func-counter">
            <h1>Значение : {count}</h1>
            <button onClick={huiStonks}>Тык и он вырос на 10</button>
            <button onClick={huiDebaff}>Тык и он уменьшился на 5</button>
        </div>
    )
}

export default Counter
