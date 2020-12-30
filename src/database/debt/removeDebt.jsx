import getDebts from './getDebts';

function removeDebt(realm, id, {paranoid = true} = {}) {
  const [currentDebt] = getDebts(realm).filtered('public_id = $0', id);
  if (!currentDebt) {
    return;
  }

  if (!paranoid) {
    realm.delete(currentDebt);
  } else {
    currentDebt.deleted_at = new Date(Date.now());
  }
}

export default removeDebt;
