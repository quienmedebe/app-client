import Ajv from 'ajv';
import {v4 as uuidv4} from 'uuid';
import {Debt} from '../schemas';
import {Validation as DebtValidation} from '../../modules/debt';
import {Fields} from '../../modules/validation';

function createDebt(realm, {name, amount, type, description, status, created_at, updated_at, deleted_at} = {}) {
  const ajv = new Ajv({allErrors: true});
  const areParametersValid = ajv.validate(
    {
      type: 'object',
      required: ['realm', 'name', 'amount', 'type', 'status'],
      properties: {
        name: DebtValidation.name,
        amount: DebtValidation.amount,
        type: DebtValidation.type,
        description: DebtValidation.description,
        status: DebtValidation.status,
        created_at: Fields.dateTime,
        updated_at: Fields.dateTime,
        deleted_at: Fields.dateTime,
      },
    },
    {realm, name, amount, type, description, status, created_at, updated_at, deleted_at},
  );

  if (!areParametersValid) {
    throw new Error(ajv.errors);
  }

  const creationDate = new Date(Date.now());
  const debtFields = {
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
  };

  realm.create(Debt.name, debtFields);

  return debtFields;
}

export default createDebt;
