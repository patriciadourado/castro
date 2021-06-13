import React from 'react';
import ReactDOM from 'react-dom';
import Colors from "./styles/settings/Colors";
import Reset from "./styles/Reset";

import HeaderOpen from './components/Header';
import Trailer from './pages/Trailer';
import About from './pages/About';
import Services from './pages/Services';

ReactDOM.render(
  <React.StrictMode>
    <Colors />
    <Reset />

    <HeaderOpen />
    <Trailer />
    <About />
    <Services />
  </React.StrictMode>,
  document.getElementById('root')
);