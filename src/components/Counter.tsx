import React, { useState } from 'react';


const Counter: React.FC = () => {
    const [count, setCount] = useState<number | null>(null);


    const handleIncrement = () => {
        setCount( count + 1);
    }

    const handleDecrement = () => {
        setCount( count - 1);
    }

    const resetCount = () => {
        setCount(0)
    }


    return (
        <div>
            <h2>Count</h2>

            <p>Count: {count}</p>
            <button onClick={handleIncrement}>Add</button>
            <button onClick={handleDecrement}>Subtract</button>
            <button onClick={resetCount}>Reset</button>
        </div>
    )
};


export default Counter;