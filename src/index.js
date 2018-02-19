import React from 'react';
import {render} from 'react-dom';
import Structure from './components/structure';
import AddCider from './components/addcider';
// import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';

render(<Structure />, document.getElementById('root'));
render(<AddCider />, document.getElementById('main'));
// registerServiceWorker();
