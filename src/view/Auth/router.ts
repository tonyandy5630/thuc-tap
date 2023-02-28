import { IRouter } from '@routers/interface';
import React from 'react';

export const routerMainPublicPage: IRouter = {
  path: '/login',
  loader: React.lazy(() => import('../Home/index')),
  exact: true,
};
