import React from 'react';

const Card = (props) => {
    //debugger;
    return (
        <div>
            <h1>{props.name}</h1>
            <h3>Revenue In Cents: {props.cents}</h3>
            <h3>Franchise: {props.franchise}</h3>
            <h3>Status: {props.status}</h3>
            <br/>
        </div>
    );
}

export default Card;