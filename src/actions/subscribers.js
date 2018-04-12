const API_URL = process.env.REACT_APP_API_URL;
const token = "token=567493801"

//***ACTION CREATORS ***
const setSubscribers = subObj => { //make loading true here
   
    return {
        type: 'GET_SUBSCRIBERS_SUCCESS',
        subscribers: subObj.subscribers
    }
}



//***ASYNC ACTIONS ***
export const getSubscribers = (id) => {
    return dispatch => {
        return fetch(`${API_URL}/businesses/${id}/subscribers?${token}`)
        .then(response => response.json())
        .then(subscribers => {
            dispatch(setSubscribers(subscribers))
        })
        .catch(error => console.log(error));
    }
}