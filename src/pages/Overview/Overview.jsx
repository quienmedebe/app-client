import React, {useState} from 'react';
import AppLayout from '../../components/layouts/AppLayout';
import OverviewView from './OverviewView';

const Overview = () => {
  const [debtBalance, setDebtBalance] = useState(0);
  const [pendingDebts, setPendingDebts] = useState([]);

  return (
    <AppLayout>
      <OverviewView debtBalance={debtBalance} pendingDebts={pendingDebts} />
    </AppLayout>
  );
};

export default Overview;
