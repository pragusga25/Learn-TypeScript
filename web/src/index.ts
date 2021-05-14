import { UserEdit } from './views/UserEdit';
import { User } from './models/User';

const user = User.buildUser({ name: 'BOCILLLL', age: 7 });

const root = document.getElementById('root');
if (root) {
  const userEdit = new UserEdit(root, user);
  userEdit.render();

  console.log(UserEdit);
} else {
  throw new Error('Root element not found');
}
