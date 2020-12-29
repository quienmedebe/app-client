function writeDB(realm, cb, onError = () => {}) {
  try {
    realm.write(cb);
  } catch (error) {
    console.error('Write operation has failed');
    console.error(error);
    onError(error);
  }
}

export default writeDB;
