import React from 'react';
import { TodoListItem } from './TodoListItem';

const todos: Array<Todo> = [
  {text: 'Calvin', complete: true}, 
  {text: 'Coolidge', complete: true}, 
  {text: 'Masha', complete: false}
];

const App: React.FunctionComponent = () => {
  return (
    <React.Fragment>
    <TodoListItem todo={todos[0]} />;
    <TodoListItem todo={todos[1]} />;
    <TodoListItem todo={todos[2]} />;
    </React.Fragment>
  );
};

export default App;
