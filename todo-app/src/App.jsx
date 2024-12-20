import './App.css';
import TodoTemplate from './components/TodoTemplate.jsx';
import TodoInsert from './components/TodoInsert.jsx';
import React, { useCallback, useRef, useState } from 'react';
import TodoList from './components/TodoList.jsx';

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '리액트 공부',
      checked: true,
    }, {
      id: 2,
      text: '자바 공부',
      checked: true,
    }, {
      id: 3,
      text: '집안일',
      checked: false,
    },
  ]);

  const nextId = useRef(4);
  const onInsert = useCallback(
    text => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      setTodos(todos.concat(todo));
      nextId.current++;
    }
    , [todos]);

  const onRemove = useCallback(id => {
    setTodos(todos.filter(todo => todo.id !== id));
  }, [todos]);

  const onToggle = useCallback(id => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, checked: !todo.checked } : todo,
    ));
  }, [todos]);

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  );
}

export default App;
