import {Debt} from '../schemas';

export const schema = [Debt];

export const migration = schemaVersion => oldRealm => {
  if (oldRealm.schemaVersion < schemaVersion) {
    console.info(`Applied migration ${schemaVersion} successfully`);
  }
};
