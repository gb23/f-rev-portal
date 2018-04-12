const API_URL = process.env.REACT_APP_API_URL;
const token = "token=567493801"

//***ACTION CREATORS ***
const setSubscribers = subObj => { //make loading true here
   
    return {
        type: 'GET_SUBSCRIBERS_SUCCESS',
        subscribers: subObj.subscribers
    }
}

export const addName = name => {
    return {
        type: 'ADD_NAME',
        name
    }
}
export const addEmail = email => {
    return {
        type: 'ADD_EMAIL',
        email
    }
}
const loading = () => {
    return{
        type: 'LOADING'
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
export const createSubscriber = (subscriber, id) => {
    //debugger;
    const bodyObj = {"subscriber": subscriber}
    //debugger;
    return dispatch => {
        return fetch(`${API_URL}/businesses/${id}/subscribers?${token}`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(bodyObj)
        })
            .then(response => {
                debugger;
                response.json()})
            .then(subscriber => {
                console.log("logging subscriber response", subscriber);
            })
            .catch(error => {
                debugger;
            });
        
    }
}