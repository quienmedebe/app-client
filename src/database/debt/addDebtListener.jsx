import {Debt} from '../schemas';

function addDebtListener(realm, onUpdate) {
  const debts = realm.objects(Debt.name);
  debts.addListener(onUpdate);
  return () => debts.removeListener(onUpdate);
}

export default addDebtListener;
