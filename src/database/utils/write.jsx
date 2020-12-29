function write(realm, cb) {
  try {
    realm.write(cb);
  } catch (error) {
    console.error('Write operation has failed');
    console.error(error);
  }
}

export default write;
