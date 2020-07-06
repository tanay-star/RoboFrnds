import { CHANGE_SEARCH_FIELD,
        REQUEST_ROBOTS_PENDING,
        REQUEST_ROBOTS_SUCCESS,
        REQUEST_ROBOTS_FAILED } from './constants.js'; 

//action of typing something in the text box
export const setSearchField = (text) => ({
    type: CHANGE_SEARCH_FIELD,
    payload: text
});

//action of requesting for robots.this is an Async action.Async func returns another function and hence
//its also called Higher order func(i.e. the func that returns another func)
export const requestRobots = () => (dispatch) => {
    dispatch({ type:REQUEST_ROBOTS_PENDING });
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=> response.json())
    .then(data => dispatch({ type:REQUEST_ROBOTS_SUCCESS,payload:data}))
    .catch(error=> dispatch({ type:REQUEST_ROBOTS_FAILED,payload:error}))
}
