import React from 'react';

const Form = (props) => {
    //debugger;
    return (
        <div
            className=""
            onClick={ (event) => props.onChoose(event, props.id) }
        >
            <h3>{props.name}</h3>
            <h5>{props.email ? `Email: ${props.email}` : ""}</h5>
            <h5>{props.cents ? `Revenue In Cents: ${props.cents}` : ""}</h5>
            <h5>{props.franchise ? `Franchise: ${props.franchise}` : ""}</h5>
            <h5>{props.status ? `Status: ${props.status}` : ""}</h5>

            <br/>
        </div>
    );
}

export default Form;