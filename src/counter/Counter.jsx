import React, { useState } from 'react';


const Counter = () => {
    const text = "The count is:";
    const [count, setCount] = useState(75);

    const increment = () => {
        setCount(count + 1);
    }

    const decrement = () => {
        setCount(count - 1);
    }

    return (
        <React.Fragment>
            <p>{text} {count}</p>
            <button onClick = {increment}>Increment</button>
            <button onClick = {decrement}>Decrement</button>
        </React.Fragment>
    );
};

export default Counter;