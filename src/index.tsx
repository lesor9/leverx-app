import * as React from "react";
import * as ReactDOM from "react-dom";

import { Provider } from "react-redux"; 
import { BrowserRouter as Router } from 'react-router-dom';

import { Normalize } from 'styled-normalize'
import App from './components/App/';

import { store } from './reducers/rootReducer';


ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Normalize />
            <App />
        </Router>
    </Provider>,
    document.getElementById("root")
);