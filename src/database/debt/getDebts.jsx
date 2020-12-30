import {Debt} from '../schemas';

function getDebts(realm, {paranoid = true} = {}) {
  const debts = realm.objects(Debt.name);
  if (paranoid) {
    return debts.filtered('deleted_at = $0', null);
  }

  return debts;
}

export default getDebts;
