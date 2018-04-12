import React from 'react';

const Select = (props) => {
    return (
        <div>
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