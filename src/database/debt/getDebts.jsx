import {Debt} from '../schemas';

function getDebts(realm) {
  const debts = realm.objects(Debt.name);

  return debts;
}

export default getDebts;
