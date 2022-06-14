import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// redux setup/import
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger'

// function to manage our state
// reducer is a function that returns some state
// Want to combine the reducers into am object
// every reducer function gets arguments of state and action
const count = (state = 5, action) => {
  // state = 5 gives it a default value if there is no arguemt put in here
  

  // switch statement syntax
  switch (action.type) {
    case 'INCREASE_COUNT':
      return state + 1;
    case 'DECREASE_COUNT':
      return state - 1;
  }

  // if (action.type === 'INCREASE_COUNT') {
  //   return state + 1;
  // }
  // else if (action.type === 'DECREASE_COUNT') {
  //   return state - 1;
  // }
  // what is returned from our function is our state, used rather than useState
  return state;
}

const lectureTopic = (state = 'redux', action) => {
  return state;
}

// create snack array of objects
let defaultSnacks = [{
  id: 0,
  name: 'cupcake',
  rating: 8
},
{
  id: 1,
  name: 'waffles',
  rating: 9
},
{
  id: 2,
  name: 'cheese sticks',
  rating: 4
}]

const snackList = (state = defaultSnacks, action) => {

switch (action.type) {
  case 'ADD_SNACK':
    // use spread operator to create a new array which will be rendered to dom
    // add in the payload object from the form
    
    // new array is the new state of SnackList, which updates store, which is mapped over again on snacks.jsx to add to dom
    // The defaultSnacks is not actually changed, original content is all that's left when I refresh
    return [...state, action.payload]
}

  return state;
}


// want store to llok like an object with count: 5, lectureTopic: 'redux'
// call a function that puts results into an object

// create redux store state storage
const store = createStore(
  combineReducers({
    // count key of my store is determined by the count function
    // the value here is tacos, as long as it lines up with function name 
    // can use just the key name as long as there is a variable with the same name
    count,
    lectureTopic,
    snackList
  }),
  // Here is where the middleware is added in 
  applyMiddleware(logger)
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* wrap entire app in Provider */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
