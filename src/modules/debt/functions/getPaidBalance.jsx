import getPaidDebts from './getPaidDebts';
import {CREDIT, DEBT} from '../type';

function getPaidBalance(realm, {paranoid = true} = {}) {
  const debts = getPaidDebts(realm, {paranoid});

  const creditAmount = debts.filtered('type = $0', CREDIT.value).sum('amount');
  const debtsAmount = debts.filtered('type = $0', DEBT.value).sum('amount');

  return {
    debt: debtsAmount,
    credit: creditAmount,
  };
}

export default getPaidBalance;
