import React, {useState} from 'react';
import AppLayout from '../../components/layouts/AppLayout';
import OverviewView from './OverviewView';

const Overview = () => {
  const [debtBalance, setDebtBalance] = useState(0);

  return (
    <AppLayout>
      <OverviewView debtBalance={debtBalance} />
    </AppLayout>
  );
};

export default Overview;
