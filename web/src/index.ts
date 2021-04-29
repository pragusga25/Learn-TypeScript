import { User } from './models/User';

const user = new User({ name: 'Taufik Pragusga', age: 19 });

console.log(user.get('name'));
console.log(user.get('age'));
