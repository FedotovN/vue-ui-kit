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
function getRandomArrayItem<T>(arr: Array<T>): T {
  const index = Math.floor(Math.random() * (arr.length - 1));
  return arr[index];
}
function getRandomObjectItem<T extends Object>(obj: T): keyof T {
  const keys = Object.keys(obj);
  const index = Math.floor(Math.random() * (keys.length - 1));
  const key = keys[index];
  return obj[key];
}
export { getValue, getRandomArrayItem, getRandomObjectItem };