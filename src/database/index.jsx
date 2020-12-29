import Realm from 'realm';
import {migration0001, migration0002} from './migrations';

let realm = {};

const schemas = [
  {schema: migration0001.schema, schemaVersion: 1, migration: migration0001.migration(1)},
  {schema: migration0002.schema, schemaVersion: 2, migration: migration0002.migration(2)},
];

export function runMigrations() {
  let nextSchemaIndex = Realm.schemaVersion(Realm.defaultPath);
  if (nextSchemaIndex !== -1) {
    while (nextSchemaIndex < schemas.length) {
      const migratedRealm = new Realm(schemas[nextSchemaIndex++]);
      migratedRealm.close();
    }
  }
}

export function startRealm() {
  Realm.open(schemas[schemas.length - 1])
    .then(rm => {
      console.info('Connected to Database');
      realm = rm;
    })
    .catch(error => {
      console.error('Connection to Database has failed');
      console.error(error);
    });
}

export function connectDB() {
  runMigrations();
  startRealm();
}

export function getRealm() {
  return realm;
}
