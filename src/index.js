import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.scss';
import App from './components/App/App';
import { createStore } from 'redux';
import reportWebVitals from './reportWebVitals'; 
import { Provider } from 'react-redux';

const defaultState = {
  loggedIn: false, 
  adminLoggedIn: false,
  currentUser: {
    name: 'Максим',
    secondName: 'Куваев',
    email: 'test@b.ru',
    company: 'РиалВеб',
    dep: 'Отдел по работе с пресоналом'
  },
  bp_id: 0,
  bot_id: 0,
  scenario: [],
}

const reducer = (state = defaultState, action) => {
  switch(action.type) {
    case 'LOGGEDIN_TRUE': return {...state, loggedIn: true}
    case 'LOGGEDIN_FALSE': return {...state, loggedIn: false}
    case 'ADMINLOGGEDIN_TRUE': return {...state, adminLoggedIn: true}
    case 'ADMINLOGGEDIN_FALSE': return {...state, adminLoggedIn: false}
    case 'ADD_SCENITEM': return {...state, scenario: [...state.scenario, action.payload]}
    case 'DELETE_SCENITEM': return {...state, scenario: state.scenario.filter(item => item.id !== action.payload)}
    case 'CLEAR_ALG': return {...state, scenario: []}
    case 'SET_BP': return {...state, bp_id: action.payload}
    default: return state
  }
}

const store = createStore(reducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
