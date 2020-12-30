import getPendingDebts from './getPendingDebts';
import {CREDIT, DEBT} from '../type';

function getPendingBalance(realm, {paranoid = true} = {}) {
  const debts = getPendingDebts(realm, {paranoid});

  const creditAmount = debts.filtered('type = $0', CREDIT.value).sum('amount');
  const debtsAmount = debts.filtered('type = $0', DEBT.value).sum('amount');

  return {
    debt: debtsAmount,
    credit: creditAmount,
  };
}

export default getPendingBalance;
