function tail(array) {
  const newArray = [];
  for (let i = 1; i < array.length; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
console.log(tail(['foo', 'bar', 'baz']));
console.log(tail([1, 2, 3, 4, 5]));
console.log(tail([false, true, false, true]));
console.log(tail([]));
