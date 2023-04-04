import React, { ReactElement, ReactNode, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import { ROUTES } from 'shared/constants';

interface Props {
  children: ReactNode;
  isUserAuth: boolean;
}

export const ProtectedRoutes = ({ children, isUserAuth }: Props): ReactElement => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isUserAuth) {
      navigate(ROUTES.login);
    }
  }, [isUserAuth]);

  return <div>{children}</div>;
};
