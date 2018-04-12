import React from 'react';

//** Action Creators ***/
export const filterFranchise = franchise => { 
    return {
        type: 'FILTER_FRANCHISE',
        businessFranchise: franchise
    }
}

export const filterStatus = status => {
    return {
        type: 'FILTER_STATUS',
        subscriberStatus: status
    }
}

//** Other Actions */
export const makeArrayOfOptions = (objectArray, keyword) => {
    let set = new Set();
    objectArray.forEach(obj => set.add(obj[keyword]))
    set = ["",...set];
    return set.map(val => <option key={val}>{val}</option>)
}
