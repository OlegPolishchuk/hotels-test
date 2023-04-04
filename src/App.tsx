import { ReactElement, useEffect } from 'react';

import './App.css';
import { Route, Routes } from 'react-router-dom';
import { selectIsAppLoading, selectIsInitialize } from 'selectors';

import { Login } from 'pages';
import { ProtectedRoutes } from 'shared/components';
import { ROUTES } from 'shared/constants';
import { useAppDispatch, useAppSelector } from 'shared/hooks';
import { startInitialize } from 'store/reducers';

export const App = (): ReactElement => {
  const dispatch = useAppDispatch();

  const isLoading = useAppSelector(selectIsAppLoading);
  const isInit = useAppSelector(selectIsInitialize);

  console.log(`isLoading =`, isLoading);
  console.log(`isInit =`, isInit);

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
