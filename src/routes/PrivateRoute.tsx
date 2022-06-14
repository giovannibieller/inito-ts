import React from 'react';
import { Navigate } from 'react-router-dom';
import { RouteType } from '@utils/types';

import urls from './routes.urls';

const PrivateRoute = ({ children }: RouteType) => {
  const { accessToken } = localStorage;
  return accessToken ? children : <Navigate to={urls.Login} />;
};

export default PrivateRoute;
