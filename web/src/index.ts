import { User } from './models/User';

const user = new User({ name: 'Bocil FF', age: 10 });

user.on('save', () => {
  console.log(user);
});

user.save();
