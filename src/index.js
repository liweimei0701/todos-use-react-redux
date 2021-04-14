import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import {createStore} from 'redux'
import rootReducer from './Reducer'
import './index.css';
import App from './App';
const initialState = JSON.parse(localStorage.getItem('todos'))
// console.log(initialState);
const store = createStore(rootReducer,initialState)
 store.subscribe(()=>{
  localStorage.setItem('todos',JSON.stringify(store.getState()))
  // console.log(store.getState());
 }
 )
ReactDOM.render(
    <Provider store = {store}>
      <App />
    </Provider>,
  document.getElementById('root')
);

