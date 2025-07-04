import { render, screen, fireEvent } from '@testing-library/react';

import TodoList from './TodoList';
import '@testing-library/jest-dom';

// Проверка рендера компонента
it('рендерит заголовок', () => {
  render(<TodoList />);
  expect(screen.getByText(/todo list/i)).toBeInTheDocument();
});

// Проверка добавления задачи
it('добавляет новую задачу', () => {
  render(<TodoList />);
  const input = screen.getByPlaceholderText(/введите задачу/i);
  const button = screen.getByText(/добавить/i);

  fireEvent.change(input, { target: { value: 'Купить хлеб' } });
  fireEvent.click(button);

  expect(screen.getByText('Купить хлеб')).toBeInTheDocument();
});

// Проверка удаления задачи
it('удаляет задачу', () => {
  render(<TodoList />);
  const input = screen.getByPlaceholderText(/введите задачу/i);
  const button = screen.getByText(/добавить/i);

  fireEvent.change(input, { target: { value: 'Погулять с собакой' } });
  fireEvent.click(button);

  const deleteButton = screen.getByText(/удалить/i);
  fireEvent.click(deleteButton);

  expect(screen.queryByText('Погулять с собакой')).not.toBeInTheDocument();
}); 
