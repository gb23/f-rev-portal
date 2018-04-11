export default (state = {businesses: null}, action) => {
    //debugger;
    switch(action.type){
        case 'GET_BUSINESSES_SUCCESS':
            return {...action.businesses} //this object has key 'businesses'

        default:
            return state;
    }
}