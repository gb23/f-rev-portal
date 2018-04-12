export default (state = {id: -1}, action) => {
        //debugger;
        switch(action.type ){
            case 'SELECT_BUSINESS':
                return {id: action.id} 

            default:
                //debugger;
                return state;
        }
}
