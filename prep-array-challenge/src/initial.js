function initial(array) {
  const newArray = [];
  for (let i = 0; i < array.length - 1; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
console.initial(tail(['foo', 'bar', 'baz']));
console.initial(tail([1, 2, 3, 4, 5]));
console.initial(tail([false, true, false, true]));
console.initial(tail([]));
