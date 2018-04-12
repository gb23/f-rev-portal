export default (state = null, action) => {
    //debugger;
    switch(action.type ){
        
        case 'GET_SUBSCRIBERS_SUCCESS':
            return [...action.subscribers];

        default:
            //debugger;
            return state;
    }
}