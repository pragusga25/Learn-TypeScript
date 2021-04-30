import { User } from './models/User';

const user = new User({ name: 'John', age: 99 });

user.events.on('change', () => {
  console.log('From event');
});

user.events.trigger('change');

user.save();
