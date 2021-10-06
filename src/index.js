import React from 'react';
import ReactDOM from 'react-dom';
import Colors from "./styles/settings/Colors";
import Reset from "./styles/Reset";

import HeaderOpen from './components/Header';
import Trailer from './pages/Trailer';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Informations from './pages/Informations';
import Documents from './pages/Documents';

ReactDOM.render(
  <React.StrictMode>
    <Colors />
    <Reset />

    <HeaderOpen />
    <Trailer />
    <About />
    <Services />
    <Informations />
    <Documents />
    <Contact />
  </React.StrictMode>,
  document.getElementById('root')
);
