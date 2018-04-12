import React from 'react';

const Select = (props) => {
    return (
        <div>
            <label>{props.label}</label>
            <select
                value={props.filter ? props.filter : ""}
                onChange={props.filterAction}
            >
            {props.options}
            </select>
        </div>
    );
}

export default Select;