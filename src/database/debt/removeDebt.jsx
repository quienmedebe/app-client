import getDebts from './getDebts';

function removeDebt(realm, id) {
  const [currentDebt] = getDebts(realm).filtered('public_id = $0', id);
  if (!currentDebt) {
    return;
  }

  realm.delete(currentDebt);
}

export default removeDebt;
