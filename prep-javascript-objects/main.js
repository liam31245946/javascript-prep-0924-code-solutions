const person = {
  firstName: 'Liam',
  lastName: 'Nguyen',
  hobby: 'Practicing coding',
};

const fullName = person.firstName + ' ' + person.lastName;

person.job = 'Student';

person['previousJob'] = 'Server';

console.log('log:', person);
console.log('Full Name:', fullName);
console.log('my job: ', person.job);
console.log('my previous job: ', person['previousJob']);
console.log('Person Object:', person);
