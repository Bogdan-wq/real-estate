import React from 'react'
import ReactDOM from 'react-dom'

import store from "./store";
import {Provider} from 'react-redux'
import App from "./components/app";

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap.min.css'



ReactDOM.render(<Provider store={store}>
                    <App/>
                </Provider>,
    document.getElementById('root'))
