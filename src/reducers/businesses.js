export default (state = {businesses: null}, action) => {
    //debugger;
   if(action.type !== "FILTER_FRANCHISE" && action.type !== "FILTER_STATUS" 
    && action.type !== "SELECT_BUSINESS" && action.type !== "GET_SUBSCRIBERS_SUCCESS"
    && action.type !== "ADD_NAME" && action.type !== "ADD_EMAIL" && action.type !== "LOADING" && action.type !== 'MAKE_SUBSCRIBERS_NULL'){
        switch(action.type ){
            case 'GET_BUSINESSES_SUCCESS':
                return [...action.businesses.businesses] //this object has key 'businesses'

            default:
                //debugger;
                return state.businesses;
        }
    }
    else{
        return state;
    }
}