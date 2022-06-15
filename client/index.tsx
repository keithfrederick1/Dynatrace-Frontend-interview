import * as React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import App from './src/components/App';
import { ContextProvider } from './src/Context';

ReactDOM.render(
    <ContextProvider>
      <Router>
        <App />
      </Router>,
    </ContextProvider>,
  document.getElementById('app')
);
