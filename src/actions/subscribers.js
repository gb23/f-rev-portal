const API_URL = process.env.REACT_APP_API_URL;
const token = "token=567493801"

//***ACTION CREATORS ***
export const setSubscribers = subObj => { 
    if (!subObj.subscribers){
        subObj.subscribers = {};
    }
    else if (subObj.subscribers[0] === -1) {
        return {
            type: 'MAKE_SUBSCRIBERS_NULL',
            subscribers: null
        }
    }
    
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
    //const bodyObj = {"subscriber": subscriber, "token": 567493801}
    //debugger;
    return dispatch => {
        //https://young-temple-44207.herokuapp.com/businesses/32/subscribers?token=567493801&subscriber[name]=Greg Ben&subscriber[email]=jkh123@yahoo.com
        return fetch(`${API_URL}/businesses/${id}/subscribers?token=567493801&subscriber[name]=${subscriber.name}&subscriber[email]=${subscriber.email}`, {
            method: "POST",
        }).then(response => {
                //debugger;
                response.json()})
        .then(subscriber => {
                //debugger;
                console.log("logging subscriber response", subscriber);
        })
        .catch(error => {
            console.log(error)
        });
    }
}

// headers: {
//     'Content-Type': 'application/json',
// },
// headers: new Headers({
 //   'Authorization': 567493801 
//}),