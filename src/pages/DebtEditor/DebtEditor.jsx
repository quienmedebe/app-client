import React, {useState, useCallback} from 'react';
import {useNavigation} from '@react-navigation/native';
import DebtEditorView from './DebtEditorView';
import AppLayout from '../../components/layouts/AppLayout';
import {Debt, Utils, getRealm} from '../../database';

const DebtEditor = () => {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [type, setType] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('');
  const navigation = useNavigation();

  const addDebtHandler = useCallback(
    onSuccess => {
      const parsedAmount = +amount;
      const realm = getRealm();
      const writeHandler = () => {
        Debt.createDebt(realm, {name, amount: parsedAmount, type, description, status});

        setName('');
        setAmount('');
        setType('');
        setDescription('');
        setStatus('');
        onSuccess?.();
        navigation.navigate('Overview');
      };

      const errorHandler = () => {
        // Handle database errors
      };

      Utils.writeDB(realm, writeHandler, errorHandler);
    },
    [navigation, name, amount, type, description, status],
  );

  return (
    <AppLayout>
      <DebtEditorView
        name={name}
        setName={setName}
        amount={amount}
        setAmount={setAmount}
        type={type}
        setType={setType}
        description={description}
        setDescription={setDescription}
        status={status}
        setStatus={setStatus}
        addDebtHandler={addDebtHandler}
      />
    </AppLayout>
  );
};

export default DebtEditor;
