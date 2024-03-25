import React, { ReactNode } from 'react';
import Header from './Header/Header';
import Banner from './Banner/Banner';

export type PropsLayout = {
  children: ReactNode;
};

function Layout({ children }: PropsLayout) {
  return (
    <div className="layout">
      <div className="wrapper">{children}</div>
    </div>
  );
}

export default Layout;
