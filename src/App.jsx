import React from 'react';

import { Footer, LoaderJSon } from './components/index';

import './assets/styles/main.scss';

export const App = () => (
  <div className="container-app">
    <div className="title-page">
      JSON API LOADER <br /> WITH BLACK&WHITE EFFECTS
    </div>
    <LoaderJSon />
    <Footer />
  </div>
)
