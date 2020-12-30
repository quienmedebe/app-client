import {Debt} from '../../../database';
import {PENDING} from '../status';

function getPendingDebts(realm) {
  return Debt.getDebts(realm).filtered('status = $0', PENDING.value);
}

export default getPendingDebts;
