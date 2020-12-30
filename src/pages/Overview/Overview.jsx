import React, {useState, useEffect, useCallback} from 'react';
import {useNavigation} from '@react-navigation/native';
import AppLayout from '../../components/layouts/AppLayout';
import {Debts} from '../../modules';
import {getRealm} from '../../database';
import OverviewView from './OverviewView';

const Overview = () => {
  const [debtBalance, setDebtBalance] = useState(0);
  const [pendingDebts, setPendingDebts] = useState([]);
  const navigation = useNavigation();

  const loadPendingDebts = useCallback(() => {
    const realm = getRealm();
    const debts = Debts.Functions.getPendingDebts(realm).sorted('updated_at', true);
    const adaptedDebts = debts.map(debt => Debts.Adapters.debtAdapter(debt));
    setPendingDebts(adaptedDebts);
  }, []);

  const loadBalance = useCallback(() => {
    const realm = getRealm();
    const {credit, debt} = Debts.Functions.getPendingBalance(realm);
    setDebtBalance(credit - debt);
  }, []);

  useEffect(() => {
    const realm = getRealm();
    const unsubscribeFromDebtChanges = Debts.Functions.addDebtListener(realm, () => {
      loadPendingDebts();
      loadBalance();
    });

    return unsubscribeFromDebtChanges;
  }, [loadPendingDebts, loadBalance]);

  const editDebt = useCallback(
    id => {
      navigation.navigate('EditDebt', {id});
    },
    [navigation],
  );

  return (
    <AppLayout>
      <OverviewView debtBalance={debtBalance} pendingDebts={pendingDebts} editDebt={editDebt} />
    </AppLayout>
  );
};

export default Overview;
