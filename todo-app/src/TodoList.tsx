import { useState } from 'react';
import './TodoList.scss';

interface Todo {
  id: number;
  text: string;
}

const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState('');

  const addTodo = () => {
    if (input.trim() === '') return;
    setTodos([...todos, { id: Date.now(), text: input }]);
    setInput('');
  };

  const removeTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="todo-list">
      <h2>Todo List</h2>
      <div className="todo-input">
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Введите задачу..."
        />
        <button onClick={addTodo}>Добавить</button>
      </div>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => removeTodo(todo.id)}>Удалить</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList; 
