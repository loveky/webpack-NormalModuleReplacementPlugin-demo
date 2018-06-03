import React from 'react';
import ReactDOM from 'react-dom';
//import Hello from '../../external-material-ui/build/index.bundle';
//const Hello = require('../../external-material-ui/build/index.bundle');
import title from '../a/b/c/moduleA';
const App = () => (
  <div>
      Hello World
  </div>
);

ReactDOM.render(<h1>{title}</h1>, document.getElementById('app'));
