function getValue(obj, key) {
    const keys = key.split(".");
    let value = obj;
    for (let i = 0; i < keys.length; i++) {
      value = value[keys[i]];
      if (!value) {
         break;
      }
    }
    return value;
  };
export { getValue };