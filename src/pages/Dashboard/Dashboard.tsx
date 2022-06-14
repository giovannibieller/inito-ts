import React from 'react';

import { RouteType } from '@utils/types';

import PageContainer from '@components/PageContainer/PageContainer';
import TestApiCall from '@components/TestApiCall/TestApiCall';

const Dashboard = (props: RouteType) => {
  return (
    <PageContainer {...props}>
      Dashboard
      <TestApiCall />
    </PageContainer>
  );
};

export default Dashboard;
