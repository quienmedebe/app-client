import React, {useState, useCallback, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import AppLayout from '../../components/layouts/AppLayout';
import DebtListView from './DebtListView';
import {Debts} from '../../modules';
import {getRealm} from '../../database';

const DebtList = () => {
  const navigation = useNavigation();
  const [debts, setDebts] = useState([]);

  const loadDebts = useCallback(() => {
    const realm = getRealm();
    const allDebts = Debts.Functions.getDebts(realm);
    const adaptedDebts = allDebts.map(debt => Debts.Adapters.debtAdapter(debt));
    setDebts(adaptedDebts);
  }, []);

  useEffect(() => {
    const realm = getRealm();
    const unsubscribeFromDebtChanges = Debts.Functions.addDebtListener(realm, () => {
      loadDebts();
    });

    return unsubscribeFromDebtChanges;
  }, [loadDebts]);

  const editDebt = useCallback(
    id => {
      navigation.navigate('EditDebt', {id});
    },
    [navigation],
  );

  return (
    <AppLayout>
      <DebtListView debts={debts} editDebt={editDebt} />
    </AppLayout>
  );
};

export default DebtList;
