import 'bootstrap/dist/css/bootstrap.css';

import * as React from "react";
import * as ReactDOM from "react-dom";

import { AppProviders } from './context';
import { App } from "./App";

ReactDOM.render(
    <BrowserRouter basename='/'>
        <App />
    </BrowserRouter>,
    document.getElementById("app")
);