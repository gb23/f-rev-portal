export default (state = {name: "", email: ""}, action) => {
    switch(action.type ){
        
        case 'ADD_NAME':
            return {...state, name: action.name};
        case 'ADD_EMAIL':
            return {...state, email: action.email}
        case 'LOADING':
            return {...state, loading: true}
        default:
            return state;
    }
}