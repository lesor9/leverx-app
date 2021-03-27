import * as React from "react";
import * as ReactDOM from "react-dom";

import { BrowserRouter as Router } from 'react-router-dom';

import { Normalize } from 'styled-normalize'
import App from './components/App/';


ReactDOM.render(
    <Router>
        <Normalize />
        <App />
    </Router>,
    document.getElementById("root")
);