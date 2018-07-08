import * as React from 'preact';
import { render } from 'preact';

import './App.css';

const App = (): JSX.Element => (
  <div className="container">
    <p>Hello Typescript, Preact and Parcel!🍺😻</p>
  </div>
);

const root = document.querySelector('#App') as Element;
const rootLastChild = root.lastChild ? root.lastChild : undefined;

if (rootLastChild !== undefined) {
  render(<App />, root, rootLastChild as Element);
} else {
  render(<App />, root);
}