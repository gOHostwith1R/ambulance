import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';
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
  const routes = useRoutes();
  return (
    <>
      <Global />
      <Router>
        {routes}
      </Router>
    </>
  );
};

export default App;
