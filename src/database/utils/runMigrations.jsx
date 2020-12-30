import Realm from 'realm';

function runMigrations(schemas) {
  let nextSchemaIndex = Realm.schemaVersion(Realm.defaultPath);
  if (nextSchemaIndex !== -1) {
    while (nextSchemaIndex < schemas.length) {
      const migratedRealm = new Realm(schemas[nextSchemaIndex++]);
      migratedRealm.close();
    }
  }
}

export default runMigrations;
