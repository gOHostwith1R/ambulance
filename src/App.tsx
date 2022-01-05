import React, { useEffect } from 'react';
import { createGlobalStyle } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider, useDispatch } from 'react-redux';
import store, { useAppSelector } from './store';
import useRoutes from './core/hooks/useRoutes';
import PageWrapper from './layouts/PageWrapper';
import { UserProfile } from './components';
import { fetchRefreshToken, fetchUserProfile } from './features/Auth/redux/userSlice';

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
  const dispatch = useDispatch();
  const auth = useAppSelector((state) => state.user.auth);
  const error = useAppSelector((state) => state.user.error);
  useEffect(() => {
    const fixError = async () => {
      await dispatch(fetchRefreshToken());
      await dispatch(fetchUserProfile());
    };
    if (error === 403) {
      fixError();
    }
  }, [dispatch, error]);
  return (
    <>
      <Provider store={store}>
        <Global />
        <Router>
          {!auth
            ? (
              <>
                {router}
              </>
            )
            : (
              <PageWrapper>
                <UserProfile />
                {router}
              </PageWrapper>
            )}
        </Router>
      </Provider>
    </>
  );
};

export default App;
