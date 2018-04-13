import React from 'react';

const Card = (props) => {
    //debugger;
    return (
        <div tabIndex="0"
            className={`card pl3 ba bt b--black-10 ${props.highlight}`}
            onClick={ (event) => props.onChoose(event, props.id) }
        >
            <h3>{props.name}</h3>
            <p className="mb0 mt1">{props.email ? `Email: ${props.email}` : ""}</p>
            <p className="mb0 mt1">{props.cents ? `Revenue In Cents: ${props.cents}` : ""}</p>
            <p className="mb0 mt1">{props.franchise ? `Franchise: ${props.franchise}` : ""}</p>
            <p className="mb0 mt1">{props.status ? `Status: ${props.status}` : ""}</p>

            <br/>
        </div>
    );
}

export default Card;