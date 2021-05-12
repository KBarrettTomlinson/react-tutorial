import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TodoAPI  = () => {

    const [todos, setTodos] = useState();

    useEffect(() => {
        console.log("componentDidMount");
        axios.get("https://jsonplaceholder.typicode.com/todos")
        .then((response) => {
            setTodos(response.data);
            console.log(todos);
        })
        .catch((error) => {
            console.log("error", error);
        });
    },[]);

    return (
        <React.Fragment>

            <h1>TodoAPI is here</h1>
            {todos && todos.map(todo => {
                const {id, userId, title} = todo;
                return (
                    <React.Fragment key={id}>
                        <h5><b>{title}</b> Assigned to: {userId}</h5>
                    </React.Fragment>
                )
            })}

        </React.Fragment>
    )
}

export default TodoAPI  