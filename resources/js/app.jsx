require('./bootstrap');

import ReactDom from "react-dom/client";
import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";

import AppComponent from './AppComponent'

ReactDom.createRoot(document.getElementById('root'))
    .render(
        <React.StrictMode>
            <AppComponent />
        </React.StrictMode>
    )
