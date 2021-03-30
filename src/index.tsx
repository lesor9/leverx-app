import * as React from "react";
import * as ReactDOM from "react-dom";

import { Provider } from "react-redux"; 

import { Normalize } from 'styled-normalize'
import App from './components/App/';

import { store } from './reducers/rootReducer';


ReactDOM.render(
    <Provider store={store}>
        <Normalize />
        <App />
    </Provider>,
    document.getElementById("root")
);