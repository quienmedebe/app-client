import getDebts from './getDebts';

function editDebt(realm, id, {name, amount, type, description, status}) {
  const [currentDebt] = getDebts(realm).filtered('public_id = $0', id);
  if (!currentDebt) {
    return;
  }

  currentDebt.name = name;
  currentDebt.amount = amount;
  currentDebt.type = type;
  currentDebt.description = description;
  currentDebt.status = status;
  currentDebt.updated_at = new Date(Date.now());
}

export default editDebt;
