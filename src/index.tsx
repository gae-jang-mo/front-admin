import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'antd/dist/antd.css';
import { BrowserRouter } from 'react-router-dom';
// import { Provider } from 'mobx-react';
// import { stores } from './stores';

ReactDOM.render(
    // <Provider {...stores}>
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    // </Provider>
    document.getElementById('root'),
);
