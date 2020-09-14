import React, { useState } from 'react';
import { AddTodoForm } from './AddTodoForm';
import { TodoList } from './TodoList';

const initialTodos: Array<Todo> = [
  {text: 'Calvin', complete: true}, 
  {text: 'Coolidge', complete: true}, 
  {text: 'Masha', complete: false}
];

const App: React.FunctionComponent = () => {
  const [todos, setTodos] = useState(initialTodos);

  const toggleTodo: ToggleTodo = selectedTodo => {
    const newTodos = todos.map(todo => {
    if(todo === selectedTodo) {
      return {
        ...todo, 
        complete: !todo.complete
      };
    }
    return todo;
  }); 
    setTodos(newTodos);
};

  return (
    <React.Fragment>
    <header>
      <h1>
        TODO List with Typescript!
      </h1>
    </header>
    <TodoList todos={todos} toggleTodo={toggleTodo} />
    <AddTodoForm />
    </React.Fragment>
  );
};

export default App;
