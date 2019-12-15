import 'bootstrap/dist/css/bootstrap.css';
import './styles/global.css'

import * as React from "react";
import * as ReactDOM from "react-dom";

import { AppProviders } from './context';
import { App } from "./App";

ReactDOM.render(
    <AppProviders>
        <App />
    </AppProviders>,
    document.getElementById("app")
);