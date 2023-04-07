import React, { ReactElement } from 'react';

import './App.css';
import { Route, Routes } from 'react-router-dom';

import { Login, Main, NotFound } from 'pages';
import { GlobalLoader, ProtectedRoutes } from 'shared/components';
import { ROUTES } from 'shared/constants';
import { useAppSelector } from 'shared/hooks';
import { selectAppStatus, selectIsInitialize, selectIsUserAuth } from 'store/selectors';

export const App = (): ReactElement => {
  const isUserAuth = useAppSelector(selectIsUserAuth);
  const appStatus = useAppSelector(selectAppStatus);
  const isInitialised = useAppSelector(selectIsInitialize);

  return (
    <div>
      {appStatus === 'loading' && <GlobalLoader />}
      {isInitialised && (
        <Routes>
          <Route path={ROUTES.login} element={<Login />} />
          <Route
            path={ROUTES.main}
            element={
              <ProtectedRoutes isInitialized={isInitialised} isUserAuth={isUserAuth}>
                <Main />
              </ProtectedRoutes>
            }
          />

          <Route path="*" element={<NotFound />} />
        </Routes>
      )}
    </div>
  );
};
