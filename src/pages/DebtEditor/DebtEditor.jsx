import React, {useState, useCallback, useMemo} from 'react';
import {useNavigation} from '@react-navigation/native';
import DebtEditorView from './DebtEditorView';
import AppLayout from '../../components/layouts/AppLayout';
import {Debt, Utils, getRealm} from '../../database';
import {Errors} from '../../modules';
import Alert from '../../components/UI/Alert/StyledAlert';

const DebtEditor = () => {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [type, setType] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('');

  const [alertType, setAlertType] = useState(null);
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
        setAlertType(Errors.UNKNOWN);
      };

      Utils.writeDB(realm, writeHandler, errorHandler);
    },
    [navigation, name, amount, type, description, status],
  );

  const ShownAlert = useMemo(() => {
    if (alertType) {
      switch (alertType) {
        case Errors.UNKNOWN:
        default:
          return <Alert title='Error' message='Ha ocurrido un error creando la deuda' onDismiss={() => setAlertType(null)} />;
      }
    }

    return null;
  }, [alertType]);

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
      {ShownAlert}
    </AppLayout>
  );
};

export default DebtEditor;
