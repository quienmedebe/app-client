import {Debt} from '../../../database';

function getDebts(realm, {paranoid} = {}) {
  return Debt.getDebts(realm, {paranoid});
}

export default getDebts;
