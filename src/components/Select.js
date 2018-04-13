import React from 'react';

const Select = (props) => {
    return (
        <div>
            <label>{props.label}</label>
            {(!props.load || props.load.length !== 0) ? 
            <select
                value={props.filter ? props.filter : ""}
                onChange={props.filterAction}
            >
            {props.options}
            </select> :
            <select
            >
            <option>Please wait...</option>
            </select>
            }
        </div>
    );
}

export default Select;