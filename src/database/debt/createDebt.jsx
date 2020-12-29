import {v4 as uuidv4} from 'uuid';
import {Debt} from '../schemas';

function createDebt(realm, {name, amount, type, description, status, created_at, updated_at, deleted_at}) {
  // Args validation

  const creationDate = new Date(Date.now());
  realm.create(Debt.name, {
    id: realm.objects(Debt.name).sorted('id', true)?.[0]?.id + 1 ?? 1,
    public_id: uuidv4(),
    name: name,
    amount: amount,
    type: type,
    description: description ?? null,
    status: status,
    created_at: created_at ?? creationDate,
    updated_at: updated_at ?? creationDate,
    deleted_at: deleted_at ?? null,
  });
}

export default createDebt;
