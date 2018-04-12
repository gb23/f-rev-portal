import React from 'react';

const Form = (props) => {
    //debugger;
    return (
        <div
            className="fixRightMost"   
        >
            <label>Add Subscriber to selected Business</label>
            <form onSubmit={props.handleOnSubmit}>
                <label htmlFor="name">Full Name</label>
                <input type="text" name="name" onChange={(event) => props.handleInputChange(event)} value={props.name}/>
                <br/>
                <label htmlFor="email">Email</label>
                <input type="email" name="email"onChange={(event) => props.handleInputChange(event)} value={props.email}/>
                <br/>
                <button type="submit">Add Subscriber</button>
            </form>
        </div>
    );
}

export default Form;