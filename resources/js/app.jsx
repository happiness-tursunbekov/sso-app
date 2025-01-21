import {fetchUser} from "./store/reducers/authReducer";

require('./bootstrap');

import ReactDom from "react-dom/client";
import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";

import AppComponent from './AppComponent'
import {store} from "./store";
import {Provider} from "react-redux";

ReactDom.createRoot(document.getElementById('root'))
    .render(
        <React.StrictMode>
            <Provider store={store}>
                <AppComponent />
            </Provider>
        </React.StrictMode>
    )
