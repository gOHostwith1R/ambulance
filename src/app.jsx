import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import useRoutes from './core/controller/routes';

const Global = createGlobalStyle`
    body {
      margin: 0;
      padding: 0;
      font-family: 'Poppins', sans-serif;
      min-height: 100%;
      width: 100%;
    }
`;

const App = () => {
  const router = useRoutes();
  return (
    <>
      <Provider store={store}>
        <Global />
        <Router>
          {router}
        </Router>
      </Provider>
    </>
  );
};

export default App;
