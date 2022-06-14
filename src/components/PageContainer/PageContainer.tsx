import React from 'react';
import { ChildrenType } from '@utils/types';

import * as classes from './PageContainer.module.css';

const PageContainer = (props: ChildrenType) => {
  return <div className={classes.container}>{props.children}</div>;
};

export default PageContainer;
