import React from 'react';
import { render } from 'react-dom';
import App from './components/App/App';
import { SocketProvider } from 'react-socket-io-hooks';

render(
  <SocketProvider uri='http://localhost:7890' reducer={() => {}} initialState={''}>
    <App />
  </SocketProvider>,
  document.getElementById('root')
);
