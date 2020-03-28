import React from 'react';

import { Header, Footer, LoaderJSon, } from './components/index';

import './assets/styles/main.scss';

export const App = () =>
  <div className="container-app">
    <Header />
    <LoaderJSon />
    <Footer />
  </div>

