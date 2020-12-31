import React, {useState, useCallback, useEffect} from 'react';
import AppLayout from '../../components/layouts/AppLayout';
import BalanceView from './BalanceView';
import {Debts} from '../../modules';
import {getRealm} from '../../database';

const defaultBalance = {
  credit: 0,
  debt: 0,
};

const Balance = () => {
  const [pendingBalance, setPendingBalance] = useState(defaultBalance);
  const [paidBalance, setPaidBalance] = useState(defaultBalance);

  const loadBalaceDetails = useCallback(() => {
    const realm = getRealm();
    const pending = Debts.Functions.getPendingBalance(realm);
    const paid = Debts.Functions.getPaidBalance(realm);

    setPendingBalance(pending);
    setPaidBalance(paid);
  }, []);

  useEffect(() => {
    const realm = getRealm();
    const unsubscribeFromDebtChanges = Debts.Functions.addDebtListener(realm, () => {
      loadBalaceDetails();
    });

    return unsubscribeFromDebtChanges;
  }, [loadBalaceDetails]);

  return (
    <AppLayout>
      <BalanceView pendingBalance={pendingBalance} paidBalance={paidBalance} />
    </AppLayout>
  );
};

export default Balance;
