import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './css/index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import store from './store.js';
import 'font-awesome/css/font-awesome.min.css'

ReactDOM.render(
    
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
    
);
registerServiceWorker();