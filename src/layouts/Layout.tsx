import React from 'react';

import { RouteType } from '@utils/types';
import Header from '@components/Header/Header';

const Layout = (props: RouteType) => {
  return (
    <div>
      <Header />
      {props.children}
    </div>
  );
};

export default Layout;
