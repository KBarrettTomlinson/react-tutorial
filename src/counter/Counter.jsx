import React, { useEffect, useState } from 'react';


const Counter = () => {
    const text = "The count is:";
    const [count, setCount] = useState(75);

    const increment = () => {
        setCount(count + 1);
    }

    const decrement = () => {
        setCount(count - 1);
    }

    // useEffect(() => {
    //     console.log("mounting");
    //     return (() => {
    //         console.log("unmounting");
    //     })
    // }, [])

    // useEffect(() => {
    //     console.log("mounting or updating");
    // })

    // component did mount
    useEffect(() => {
        console.log("componentDidMount");
    }, []);

    // component did update
    useEffect(() => {
        console.log("componentDidUpdate");
    }, [count]);

    // component did unmount
    useEffect(() => {
        return function cleanup() {console.log("componentDidUnmount");}
    }, []);

    // or

    useEffect(() => {
        return () => {console.log("componentDidUnmount arrow");}
    }, []);

    // or

    useEffect(() => {
        return() => {console.log("cleanup for variable update, the cleanup happens before the variable is updated");}
    }, [count])

    return (
        <React.Fragment>
            <p>{text} {count}</p>
            <button onClick = {increment}>Increment</button>
            <button onClick = {decrement}>Decrement</button>
        </React.Fragment>
    );
};

export default Counter;