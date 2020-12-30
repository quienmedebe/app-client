import {Debt} from '../../../database';

function addDebtListener(realm, onUpdate) {
  return Debt.addDebtListener(realm, onUpdate);
}

export default addDebtListener;
