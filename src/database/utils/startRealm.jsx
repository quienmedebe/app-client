import Realm from 'realm';

async function startRealm(schemas) {
  try {
    return await Realm.open(schemas[schemas.length - 1]);
  } catch (error) {
    console.error('Connection to Database has failed');
    return Promise.reject(error);
  }
}

export default startRealm;
