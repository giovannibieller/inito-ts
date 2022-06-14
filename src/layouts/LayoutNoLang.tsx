import React from 'react';

import { RouteType } from '@utils/types';
import Header from '@components/Header/Header';

const LayoutNoLang = (props: RouteType) => {
  return (
    <div>
      <Header noLang />
      {props.children}
    </div>
  );
};

export default LayoutNoLang;
