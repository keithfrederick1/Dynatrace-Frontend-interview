import * as React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import App from './src/components/App';

ReactDOM.render(
    // <ContextProvider> 
      <Router>
        <App />
      </Router>,
    // </ContextProvider>,
  document.getElementById('app')
);
