import React from 'react';

// const Employee = ({firstName, lastName, age: employeeAge}) => {
const Employee = (props) => {
    const {firstName, lastName, age: employeeAge} = props;
    const nameText = `Name: ${firstName} ${lastName}`;
    const ageText = `Age: ${employeeAge}`;

    return (
        <React.Fragment>
            <h6>{nameText}<br/>{ageText}</h6>
        </React.Fragment>
    );
};

export default Employee;