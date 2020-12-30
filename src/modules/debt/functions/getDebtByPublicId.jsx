import {Debt} from '../../../database';

function getDebtByPublicId(realm, id, {paranoid = true} = {}) {
  return Debt.getDebts(realm, {paranoid}).filtered('public_id = $0', id)[0];
}

export default getDebtByPublicId;
