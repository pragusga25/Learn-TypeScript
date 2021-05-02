import { Collection } from './models/Collection';
import { User, UserProps } from './models/User';

const collection = new Collection<User, UserProps>(
  (json: UserProps) => User.buildUser(json),
  'http://localhost:3000/users'
);

collection.on('change', () => {
  console.log(collection);
});

collection.fetch();
