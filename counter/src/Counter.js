import React, { useState } from "react";

function Counter() {
  
    const [count, setCount] = useState(0);

    return (
        <div className="counter">
            <input type="number" onChange={event => setCount(Number(event.target.value))}/>
            <p> Le compteur est à : {count} </p>

            <button onClick={() => setCount(count + 1)}>+1</button>
            <button onClick={() => setCount(count - 1)}>-1</button>
            
        </div>
    );
}

export default Counter;