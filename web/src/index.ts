import { User } from './models/User';

const user = new User({ name: 'John', age: 99 });

user.save();
