import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux'; //the function is to create a store used to save the info to communicate between the different reducers(combine together to use)
import allReducers from './reducers/index';
import { Provider } from 'react-redux'; //make the store global for the app





const store = createStore(
    allReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    ); 

ReactDOM.render(
<Provider store = {store}> 
{/* the store in the brace is the store just defined above. */}
<App />
</Provider>, 

document.getElementById('root'));

serviceWorker.unregister();

