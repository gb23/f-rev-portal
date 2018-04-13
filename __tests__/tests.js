const selectBusiness = id => {
  return {
      type: 'SELECT_BUSINESS',
      id
  }
}



// ACTIONS
describe('selectBusiness', () => {
  describe('when given a business id', () => {
    it('creates an action creator object', () => {
      
    });
  });
});
test('given an id, selectBusiness produces an action creator object', () => {
  const id = 4;
  const obj = selectBusiness(id);
  expect(obj.type).toEqual('SELECT_BUSINESS');
  expect(obj.id).toEqual(4);
});

/*
ACTIONS businesses

setBusinesses should take in array and return return action creator with type: 'GET_BUSINESSES_SUCCRESS
getBusinesses should fetch data from URL and call method setBusinesses with businesses object as param

ACTIONS filters

filterFranchise should take in franchise string and return action creator with type: FILTER_FRANCHISE
filterStatus should take in status string and return action creator with type: FILTER_STATUS
makeArrayOfOptions should take in an array of objects and a string and return an array of <option> with
    a set of possible values make of object keys

ACTIONS subscribers

setSubscribers takes in null or an object and returns an action creator with type GET_SUBSCRIBERS_SUCCESS
addName takes in string and returns action creator with type ADD_NAME
addEmail takes in string and returns action creator with type ADD_EMAIL
getSubscribers takes in int and returns JSON, it also calls dispatch on setSubscribers.  Errors are logged
createSubscriber takes in subsciber object and id and then posts to URL. errors are logged

COMPONENTS
Card takes in props of either a business or a subsciber and returns a div with text of corresponding options.  it handles
    click event for businesses.  click even will call getSubscribers
Form will handle data submit by calling createSubscriber.  It will render a form with name and email input areas.  It will
    validate name to contain at least 2 separate words.  It will make sure that something is entered in email field. 
    It will display correct button only when validation is approved
Loading will display loading animation
NotFound will display 404
Select will display dropdown of <options> consisting of values of unique set.  Changing dropdown option will fire
    onChange which will update redux store for filter value

CONTAINERS
App will redirect base URL to /portal.  It will mount component Businesses.  Invalid url will mount NotFound
Businesses will map state to props and will map methods of state to props.  It will connect props to store
    It, when mounting will call getBusinesses. It will compare props to next props to update list by calling 
    siftcards.  It will render drop down menu when not loading.  It will render loading when loading.  It will
    render list when data is available and cards have been sifted.  It will render list based on applied filter.
    It will render no list when no filter is applied. It will allow cards to be clicked, and clicks will select
    business state to appropriate business id.  When filter is selected from dropdown, it will make array of
    appropriate cards.  These cards will contain appropriate props and the selected card will be highlighted.
    When no card is selected, no card will be highlighted.  
Subscribers will map state to props and will map methods of state to props.  When component mounts,
    subsciber state is empty object, filter status is "" and request to get subscribers is initiated.
    When a component will receive props, it compares to see if selected ids of next props is different
    than that of props, if it is, it resets state for subscribers and status and initiates get subscribers.
    If user selects different business franchise from dropdown, loading visualization is ignored. List is
    updated based on filter status.  It renders a dropdown with array of options consisting of set of statuses.
    It renders a form.  If props has actual subscribers, it renders the list of subscribers based on filter.

REDUCERS
    businesses reducer responds to GET_BUSINESSES_SUCCESS, otherwise returns default of {businesses: null}
    filters reducer responds to FILTER_FRANCHISE or FILTER_STATUS, otherwise return default of {businessFranchise: "",
    subsciberStatus: ""}
    selectedBusiness reducer respsonds to SELECT_BUSINESS otherwise returns {id: -1}
    subscribers reducer responds to GET_SUBSCRIBERS_SUCCESS, otherwise returns default of null
    typedSubsciber reducer responds to ADD_NAME, ADD_EMAIL, LOADING, otherwise returns {name: "", email: ""}

*/