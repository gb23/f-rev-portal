export default (state = null, action) => {
    //debugger;
    switch(action.type ){
        
        case 'GET_SUBSCRIBERS_SUCCESS':
            return [...action.subscribers];
        case 'MAKE_SUBSCRIBERS_NULL':
            return null;
        default:
            //debugger;
            return state;
    }
}