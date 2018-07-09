import React from 'preact';
import { render } from 'preact';

import './App.css';
import BirdLogo from '~/static/bird-logo.svg';

const App = (): JSX.Element => (
  <div className="container">
    <p>Hello Typescript, Preact and Parcel!🍺😻</p>
    <img src={BirdLogo} alt="logo" />
  </div>
);

const root = document.querySelector('#App') as Element;
root.lastChild ? render(<App />, root, root.lastChild as Element) 
               : render(<App />, root);