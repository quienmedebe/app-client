import {Debt} from '../../../database';
import {PAID} from '../status';

function getPaidDebts(realm, {paranoid} = {}) {
  return Debt.getDebts(realm, {paranoid}).filtered('status = $0', PAID.value);
}

export default getPaidDebts;
