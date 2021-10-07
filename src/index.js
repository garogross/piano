import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import  PianoContextProvider  from './Components/Store/PianoContextProvider';

ReactDOM.render(
  <PianoContextProvider>
    <App />
  </PianoContextProvider>,
  document.getElementById('root')
);

