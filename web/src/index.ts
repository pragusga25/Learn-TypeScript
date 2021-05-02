import { User } from './models/User';
import { UserForm } from './views/UserForm';

const user = User.buildUser({ name: 'BOCILLLL', age: 7 });

const userForm = new UserForm(document.getElementById('root'), user);
userForm.render();
