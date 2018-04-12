export default (state = {businessFranchise: "", subscriberStatus: ""}, action) => {
    switch(action.type){
        case 'FILTER_FRANCHISE':
            return {...state, businessFranchise: action.businessFranchise}
        case 'FILTER_STATUS':
            return {...state, subscriberStatus: action.subscriberStatus}; 
        default:
            return state;
    }
}