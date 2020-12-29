import {migration0001, migration0002} from './migrations';
import * as Utils from './utils';
import * as Debt from './debt';

let realm = {};

const schemas = [
  {schema: migration0001.schema, schemaVersion: 1, migration: migration0001.migration(1)},
  {schema: migration0002.schema, schemaVersion: 2, migration: migration0002.migration(2)},
];

export async function connectDB() {
  try {
    Utils.runMigrations(schemas);
    const rm = await Utils.startRealm(schemas);

    console.info('Connected to Database');
    realm = rm;
  } catch (error) {
    console.error(error);
  }
}

export function getRealm() {
  return realm;
}

export {Debt, Utils};
