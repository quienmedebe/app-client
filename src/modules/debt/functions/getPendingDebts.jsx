import {Debt} from '../../../database';
import {PENDING} from '../status';

function getPendingDebts(realm, {paranoid} = {}) {
  return Debt.getDebts(realm, {paranoid}).filtered('status = $0', PENDING.value);
}

export default getPendingDebts;
