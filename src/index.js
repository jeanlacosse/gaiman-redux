import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// redux setup/import
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

// function to manage our state
// reducer is a function that returns some state
// Want to combine the reducers into am object
const count = () => {
  // what is returned from our function is our state, used rather than useState
  return 5;
}

const lectureTopic = () => {
  return 'redux';
}


// want store to llok like an object with count: 5, lectureTopic: 'redux'
// call a function that puts results into an object

// create redux store state storage
const store = createStore(
  combineReducers({
    // count key of my store is determined by the count function
    // the value here is tacos, as long as it lines up with function name 
    count: count,
    lectureTopic: lectureTopic,
  })
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
