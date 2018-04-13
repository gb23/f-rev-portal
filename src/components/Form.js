import React from 'react';

const Form = (props) => {
    //debugger;
    return (
        <div
            className="fixRightMost"   
        >
            <span>Want to Add Subscriber to </span> <span className="highlight"> Selected Business </span>
            <span>?</span>
            <form onSubmit={props.handleOnSubmit}>
            <div className="mt3">
                <label className="dbfw4 lh-copy f6" htmlFor="name">Full Name</label>
                <input className="pa2 input-reset ba bg-transparent w-100 measure" type="text" name="name" onChange={(event) => props.handleInputChange(event)} value={props.name}/>
            </div>
            <div className="mt3">
                <label className="dbfw4 lh-copy f6" htmlFor="email">Email</label>
                <input className="pa2 input-reset ba bg-transparent w-100 measure" type="email" name="email"onChange={(event) => props.handleInputChange(event)} value={props.email}/>
            </div>
            <div className="mt3"> 
                {props.validate() ? <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6" type="submit" value="Add Subscriber"/ > :
                <div className="b ph3 pv2 ba b--black bg-transparent grow f6">
                <span className="center rightMove"> Provide Valid Information </span>
                </div> }
             
            </div>
            </form>
        </div>
    );
}

export default Form;