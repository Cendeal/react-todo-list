import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore} from "redux";
import reducer from "./reducers";
import {Provider} from "react-redux";
import {HashRouter as Router} from "react-router-dom";
import 'moment/locale/zh-cn';
import 'antd/dist/antd.css';
import './index.css';

export const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App/>
        </Router>
    </Provider>,
    document.getElementById('root')
)
;
serviceWorker.unregister();
