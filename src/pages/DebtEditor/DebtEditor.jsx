import React, {useState, useCallback} from 'react';
import DebtEditorView from './DebtEditorView';
import AppLayout from '../../components/layouts/AppLayout';

const DebtEditor = () => {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [type, setType] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('');

  const addDebtHandler = useCallback(() => {
    console.log(name, amount, type, description, status);
  }, [name, amount, type, description, status]);

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
