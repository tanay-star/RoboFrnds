import { CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED } from './constants.js'; 

//this state is related to typing something in searchbox
const initialStateSearch = {
    searchField:''
}; // this is the initial state 

//a reducer related to 'searching' of robots
export const searchRobots = (state=initialStateSearch,action={}) => {
    switch(action.type){
        case  CHANGE_SEARCH_FIELD :
            return Object.assign({}, state, {searchField:action.payload});
        default :
            return state;
    }
}

//this state is related to requesting of robots
const initialStateRobots = {
     robots: [],
     isPending: false,
     error: ''
}

//the reducer related to requesting for robots
export const requestRobots = (state=initialStateRobots,action={}) => {
    switch(action.type){
        case  REQUEST_ROBOTS_PENDING: 
           return Object.assign({}, state, { isPending:true })
        case REQUEST_ROBOTS_SUCCESS:
            return Object.assign({}, state, { isPending:false,robots:action.payload })
        case REQUEST_ROBOTS_FAILED:
            return Object.assign({}, state, { isPending:false,error:action.payload })
        default:
            return state;
    }
}

//the reducers are going to run for each and every related action and going to return a new state for each action.