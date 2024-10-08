function addTwoNumbers(num1, num2) {
  return num1 + num2;
}
const sum = addTwoNumbers(2, 2);
console.log('Sum of addTwoNumbers:', sum);

function convertHoursToMinutes(hour) {
  return hour * 60;
}
const minutes = convertHoursToMinutes(2);
console.log('convertHoursToMinutes answer:', minutes);

function getGreeting(name) {
  return 'Hello ' + name;
}
const greeting = getGreeting('World');
console.log(greeting);

function multiplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}
const productDividedByFive = multiplyAndDivideBy5(35, 10);
console.log(productDividedByFive);

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}
const difference = subtractTwoNumbers(22, 7);
console.log(difference);

function getCircleCircumference(radius) {
  return radius * 2 * Math.PI;
}

const circumference = getCircleCircumference(5);
console.log(circumference);

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}
const fullName = getFullName('Juan', 'Ramirez');
console.log(fullName);

function cube(number) {
  return number * number * number;
}
const cubed = cube(5);
console.log(cubed);
