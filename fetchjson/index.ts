import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then((res) => {
  const todo: Todo = res.data as Todo;
  // const todo: Todo = res.data;

  const { id } = todo;
  const { title } = todo;
  const { completed } = todo;

  logTodo(id, title, completed);
});

const logTodo = (id, title, completed) => {
  console.log(`
        The Todo with ID: ${id}
        Has a little of: ${title}
        Is it finished? ${completed}
    `);
};
