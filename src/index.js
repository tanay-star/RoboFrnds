import React from 'react';
import ReactDOM from 'react-dom'; //recatdom library is used bescuse it explains that we want to render in website.If we wanted to render in mobile then we have used reactnative.
import { Provider } from 'react-redux'; //importing 'provider' beacuse it will help connecting the react application with redux
import { createStore,applyMiddleware,combineReducers } from 'redux'; // these are the functions that are imported from 'redux'
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk'; // 'thunkMiddleware' is a middleware that lets Async actions to pass through 
//it and passes them to the reducer.
import './index.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import 'tachyons';
import { searchRobots,requestRobots } from './reducers.js'

const rootReducer = combineReducers({ searchRobots,requestRobots }); //'combinereducers' takes/accepts an object form of the 
//different reducers as parameters to create a 'rootReducer'.

const logger = createLogger();//'logger' function is the middleware

const store = createStore(rootReducer,applyMiddleware( thunkMiddleware,logger )); //this is the big object that represents the state of the application
//here we are applying the 'middlewares' to the redux.

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
       <App/>
    </Provider>
    
    </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
