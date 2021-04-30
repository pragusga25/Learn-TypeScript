import { User } from './models/User';

const user = new User({ name: 'John in The House', age: 99 });

user.sync.save();
