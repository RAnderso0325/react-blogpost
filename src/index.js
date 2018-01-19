import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import post from './Data.js';

ReactDOM.render(<App post={post} />, document.getElementById('root'));
registerServiceWorker();
