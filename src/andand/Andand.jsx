import React, { useState } from 'react';

// const employees = ["Harry", "Jerome", "Danisha", "Chu"];
const employees = undefined;
// const employees = "";
// const employees = [];
const isLoggedIn = false;
const name = "Kevin";

const Andand = () => {

    const employeeArray = employees;
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
    const userName = name;

    return (
        <React.Fragment>

            <h1>Välkommen till appen!</h1>
            <button onClick = {() => setIsUserLoggedIn(!isUserLoggedIn)}>
                {isUserLoggedIn ? "Logga Ut" : "Logga In"}
            </button>

            {/* {employees && employeeArray.length > 0 && (
                <React.Fragment>
                    <h3>Employee Names</h3>
                    {employeeArray.map( (employee) => (
                        <h6>{employee}</h6>
                    ))}
                </React.Fragment>
            )} */}
        </React.Fragment>
    );
};

export default Andand;

