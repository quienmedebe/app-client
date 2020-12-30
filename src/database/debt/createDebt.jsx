import Ajv from 'ajv';
import addFormats from 'ajv-formats';
import {v4 as uuidv4} from 'uuid';
import {Debt} from '../schemas';
import {Validation as DebtValidation} from '../../modules/debt';
import {Fields} from '../../modules/validation';

function createDebt(realm, {name, amount, type, description, status, created_at, updated_at, deleted_at} = {}) {
  const ajv = new Ajv({allErrors: true});
  addFormats(ajv);
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
    const prettyErrors = ajv.errors.map(({dataPath, message}) => `${dataPath}: ${message}`).join('. ');
    throw new Error(prettyErrors);
  }

  const creationDate = new Date(Date.now());
  const lastObject = realm.objects(Debt.name).sorted('id', true)?.[0];

  const debtFields = {
    id: lastObject ? lastObject.id + 1 : 1,
    public_id: uuidv4(),
    name: name,
    amount: amount,
    type: type,
    description: description ?? null,
    status: status,
    created_at: created_at ? new Date(created_at) : creationDate,
    updated_at: updated_at ? new Date(updated_at) : creationDate,
    deleted_at: deleted_at ? new Date(deleted_at) : null,
  };

  realm.create(Debt.name, debtFields);

  return debtFields;
}

export default createDebt;
