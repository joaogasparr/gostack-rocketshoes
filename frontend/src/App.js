import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import './config/ReactotronConfig';
import GlobalStyle from './styles/global';

import Header from './components/Header';

import history from './services/history';
import store from './store';
import Routes from './routes';

export default function App() {
  return (
    <Provider store={store} history={history}>
      <Router history={history}>
        <Header />
        <Routes />
        <GlobalStyle />
        <ToastContainer autoClose={3000} />
      </Router>
    </Provider>
  );
}
