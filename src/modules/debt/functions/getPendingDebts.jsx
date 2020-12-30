import {Debt} from '../../../database';
import {PENDING} from '../status';

function getPendingDebts(realm, paranoid = true) {
  const fileteredDebts = Debt.getDebts(realm).filtered('status = $0', PENDING.value);

  if (paranoid) {
    return fileteredDebts.filtered('deleted_at = $0', null);
  }
  return fileteredDebts;
}

export default getPendingDebts;
