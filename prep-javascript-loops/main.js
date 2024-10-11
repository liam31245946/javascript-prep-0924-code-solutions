function whileLoop1() {
  let array = [];
  let i = 0;
  while (i < 10) {
    array.push(i);
    i++;
  }
  return array;
}

let whileLoopResult = whileLoop1();
console.log(whileLoopResult);

function whileLoop2() {
  let array = [];
  let i = 0;
  while (i < 20) {
    array.push(i);
    i += 2;
  }
  return array;
}

let whileLoop2Result = whileLoop2();
console.log(whileLoop2Result);

function forLoop1() {
  let array = [];
  for (let i = 0; i < 10; i++) {
    array.push(i);
  }
  return array;
}
let forLoop1Result = forLoop1();
console.log(forLoop1());

function forLoop2() {
  let array = [];
  for (let a = 100; a > 0; a--) {
    array.push(a);
  }
  return array;
}
let forLoop2Result = forLoop2();
console.log('Time to explosion: ', forLoop2Result);

function forInLoop1(object) {
  let array = [];

  for (let key in object) {
    array.push(key);
  }
  return array;
}
let person = {
  name: 'John',
  age: 30,
  occupation: 'Developer',
};
let forInLoop1Result = forInLoop1(person);
console.log(forInLoop1Result);

function forInLoop2(object) {
  let array = [];
  for (const key in object) {
    array.push(object[key]);
  }
  return array;
}
let y = {
  0: 'Ada Love Lace',
  1: 'Class',
  2: 'Computation',
  3: 'Analytical engine',
};
let forInLoop2Result = forInLoop2(y);
console.log(forInLoop2Result);
