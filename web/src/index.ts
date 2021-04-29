import { User } from './models/User';

const user = new User({ name: 'Taufik Pragusga', age: 19 });

user.on('change', () => {
  console.log('Hello, I am in change event 1');
});

user.on('change', () => {
  console.log('Hello, I am in change event 2');
});

user.trigger('change');

console.log(user);

// console.log(user.get('name'));
// console.log(user.get('age'));

// user.set({ name: 'Pragusga' });

// console.log(user.get('name'));
// console.log(user.get('age'));
