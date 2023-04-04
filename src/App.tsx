import { ReactElement, useEffect } from 'react';

import './App.css';
import { Route, Routes } from 'react-router-dom';

import { Login } from 'pages';
import { ProtectedRoutes } from 'shared/components';
import { ROUTES } from 'shared/constants';
import { useAppDispatch } from 'shared/hooks';
import { startInitialize } from 'store/reducers';

export const App = (): ReactElement => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(startInitialize());
  }, []);

  return (
    <Routes>
      <Route path={ROUTES.login} element={<Login />} />
      <Route
        path={ROUTES.main}
        element={
          <ProtectedRoutes isUserAuth={false}>
            <div>Main Content</div>
          </ProtectedRoutes>
        }
      />
    </Routes>
  );
};
