const API_URL = process.env.REACT_APP_API_URL;
const token = "token=567493801"

//***ACTION CREATORS ***
const setBusinesses = businesses => { //make loading true here
    //debugger;
    return {
        type: 'GET_BUSINESSES_SUCCESS',
        businesses
    }
}

export const selectBusiness = id => {
    return {
        type: 'SELECT_BUSINESS',
        id
    }
}


//***ASYNC ACTIONS ***
export const getBusinesses = () => {
    return dispatch => {
        return fetch(`${API_URL}/businesses?${token}`)
        .then(response => response.json())
        .then(businesses => {
            dispatch(setBusinesses(businesses))
        })
        .catch(error => console.log(error));
    }
}