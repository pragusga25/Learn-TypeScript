import { User } from './models/User';

const user = new User({ name: 'John in The House', age: 99 });

console.log(user.get('name'));

user.on('change', () => {
  console.log('User was changed');
});

user.set({ name: 'Pragusga Taufik' });
