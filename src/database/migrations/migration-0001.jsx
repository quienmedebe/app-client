export const schema = [];

export const migration = schemaVersion => oldRealm => {
  if (oldRealm.schemaVersion < schemaVersion) {
    console.info(`Applied migration ${schemaVersion} successfully`);
  }
};
