import React, {useState, useCallback, useMemo, useEffect} from 'react';
import {Alert} from 'react-native';
import {useNavigation, useNavigationState} from '@react-navigation/native';
import DebtEditorView from './DebtEditorView';
import AppLayout from '../../components/layouts/AppLayout';
import {Debt, Utils, getRealm} from '../../database';
import {Debts} from '../../modules';
import {Errors} from '../../modules';
import StyledAlert from '../../components/UI/Alert/StyledAlert';

const DebtEditor = () => {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [type, setType] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('');

  const [alertType, setAlertType] = useState(null);
  const navigation = useNavigation();
  const debtPublicId = useNavigationState(state => state.routes[state.routes.length - 1].params?.id);
  const [finishFirstLoad, setFinishFirstLoad] = useState(false);

  const loadCurrentDebt = useCallback(() => {
    const realm = getRealm();
    const debt = Debts.Functions.getDebtByPublicId(realm, debtPublicId);
    setName(debt.name);
    setAmount(debt.amount.toString());
    setType(debt.type);
    setDescription(debt.description);
    setStatus(debt.status);
    setFinishFirstLoad(true);
  }, [debtPublicId]);

  useEffect(() => {
    if (debtPublicId) {
      loadCurrentDebt();
    }
  }, [debtPublicId, loadCurrentDebt]);

  const deleteDebtHandler = useCallback(async () => {
    const continueWithDeletion = await new Promise(resolve => {
      Alert.alert('¿Seguro que quieres eliminar la deuda?', 'Esta acción no puede deshacerse', [
        {text: 'Cancelar', onPress: () => resolve(false)},
        {text: 'Eliminar', onPress: () => resolve(true)},
      ]);
    });

    if (continueWithDeletion) {
      const realm = getRealm();
      const deleteHandler = () => {
        Debt.removeDebt(realm, debtPublicId);

        if (navigation.canGoBack()) {
          navigation.goBack();
        } else {
          navigation.navigate('Overview');
        }
      };

      const errorHandler = () => {
        setAlertType(Errors.UNKNOWN);
      };

      Utils.writeDB(realm, deleteHandler, errorHandler);
    }
  }, [navigation, debtPublicId]);

  const editDebtHandler = useCallback(() => {
    console.log('edit debt');
  }, []);

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
          return <StyledAlert title='Error' message='Ha ocurrido un error creando la deuda' onDismiss={() => setAlertType(null)} />;
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
        deleteDebtHandler={deleteDebtHandler}
        editDebtHandler={editDebtHandler}
        addDebtHandler={addDebtHandler}
        debtPublicId={debtPublicId}
        finishFirstLoad={finishFirstLoad}
      />
      {ShownAlert}
    </AppLayout>
  );
};

export default DebtEditor;
