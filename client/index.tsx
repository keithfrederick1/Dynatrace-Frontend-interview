import * as React from 'react';
import ReactDOM from 'react-dom';
import App from './src/components/App';
import { ContextProvider } from './src/Context';

ReactDOM.render(
    <ContextProvider>
        <App />
    </ContextProvider>,
  document.getElementById('app')
);
