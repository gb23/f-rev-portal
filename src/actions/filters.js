//** Action Creators ***/

export const filterFranchise = franchise => { 
    //debugger;
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

