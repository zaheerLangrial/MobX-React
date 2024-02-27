import { types, flow } from 'mobx-state-tree';

const User = types.model('User' , {
    id : types.identifier,
    name : types.string,
    email : types.string
})

const UserModel = types
  .model({
    users: types.array(User),
  })
  .actions((self) => ({
    fetchUsers: flow(function* fetchUsers() {
      try {
        const response = yield fetch('https://jsonplaceholder.typicode.com/users');
        const todos = yield response.json();
        self.users = todos.map((user) => ({
            id : user.id.toString(),
            name : user.username,
            email : user.email
        }))
      } catch (error) {
        console.error('Error fetching todos:', error);
      }
    }),
  }));

const UserStore = UserModel.create();

export default UserStore;
