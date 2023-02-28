import React, { memo, PropsWithChildren, useState } from 'react';

import Loading from '@shared/components/Loading';

import Navbar from './navBar';
import './styles.scss';
import Title from './Title';
import Header from './Header';
import { Outlet } from 'react-router';

interface IDefaultLayoutProps {
  menuItem?: String;
  subMenuItem?: String;
  history?: any;
  loading?: boolean;
  children?: React.ReactNode;
}

const DefaultLayout: React.FC<PropsWithChildren<IDefaultLayoutProps>> = props => {
  return (
    <div className="all-page-component">
      <Header />
      <Navbar />
      <div className="right-page-component">
        <main className="main-component__container">
          <div className="main-component">
            <div style={{ height: '80px', width: '100%' }}></div>
            <Title />
            <Outlet />
          </div>
        </main>
        {props.loading && (
          <div className="w-100 h-100 div-mask">
            <Loading />
          </div>
        )}
      </div>
    </div>
  );
};

export default memo(DefaultLayout);
