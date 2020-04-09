/**
 * Create React App entry point. This and `public/index.html` files can not be
 * changed or moved.
 */
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { mockAxios, setupAxios } from './_metronic';
import store, { persistor } from './app/store/store';
import App from './App';
import './index.scss'; // Standard version
// import "./sass/style.react.rtl.css"; // RTL version
import 'socicon/css/socicon.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './_metronic/_assets/plugins/line-awesome/css/line-awesome.css';
import './_metronic/_assets/plugins/flaticon/flaticon.css';
import './_metronic/_assets/plugins/flaticon2/flaticon.css';
import 'antd/dist/antd.css';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './app/store/reducers';

/**
 * Base URL of the website.
 *
 * @see https://facebook.github.io/create-react-app/docs/using-the-public-folder
 */
const { PUBLIC_URL } = process.env;

/**
 * Creates `axios-mock-adapter` instance for provided `axios` instance, add
 * basic Metronic mocks and returns it.
 *
 * @see https://github.com/ctimmerm/axios-mock-adapter
 */
/* const mock = */

//mockAxios(axios);

/**
 * Inject metronic interceptors for axios.
 *
 * @see https://github.com/axios/axios#interceptors
 */

const storee = createStore(reducers, {}, compose(applyMiddleware(reduxThunk)));

setupAxios(axios, store);

ReactDOM.render(
  <Provider store={storee}>
    <App store={store} persistor={persistor} basename={PUBLIC_URL} />
  </Provider>,
  document.getElementById('root')
);
