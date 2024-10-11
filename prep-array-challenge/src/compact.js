function compact(array) {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i]) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

console.log(compact(['foo', false, 'bar', 0, 'baz']));
console.log(compact([null, 2, undefined, 4, false, 5]));
console.log(compact([false, true, NaN, true]));
console.log(compact([]));
