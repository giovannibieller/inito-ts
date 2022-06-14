import React from 'react';

import { COMPONENT_NAMEType } from './COMPONENT_NAME.types';
import * as classes from './COMPONENT_NAME.module.css';

const COMPONENT_NAME = (props: COMPONENT_NAMEType) => {
  return <div className={classes.container}>new component</div>;
};

COMPONENT_NAME.propTypes = {};

export default COMPONENT_NAME;
