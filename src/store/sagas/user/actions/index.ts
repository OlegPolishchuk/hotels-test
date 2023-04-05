import { createAction } from '@reduxjs/toolkit';

import { LoginFormData } from 'types';

export const loginUser = createAction<LoginFormData>('user/LOGIN_USER');
export const logoutUser = createAction('user/LOGOUT_USER');
