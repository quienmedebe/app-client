import {Debt} from '../schemas';

export const schema = [Debt];

export const migration = schemaVersion => (oldRealm, newRealm) => {
  if (oldRealm.schemaVersion < schemaVersion) {
    const oldDebts = newRealm.objects(Debt.name);

    for (const debt of oldDebts) {
      debt.name = 'Desconocido';
    }

    console.info(`Applied migration ${schemaVersion} successfully`);
  }
};
