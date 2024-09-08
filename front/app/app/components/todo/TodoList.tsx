'use client'

import React, { useEffect, useState } from 'react';
import getData from './TodoGetData';
import TodoPost from './TodoPost';

type Todo = {
  id: string;
  title: string;
  completed: boolean;
};

const TodoComponent = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [title, setTitle] = useState('');

  useEffect(() => {
    getData().then(data => {
      setTodos(data);
    });
  }, []);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const response =await TodoPost(title)
      const newTodo = await response.json();
      setTodos([...todos, newTodo]);
      setTitle('');
    } catch (error) {
      console.error('Failed to create todo:', error);
    }
  };

  return (
    <div className="" >
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border rounded p-2 mr-2"
        />
        <button type="submit" className="bg-blue-500 text-white font-bold rounded p-2">
          保存
        </button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}   
      </ul>
    </div>
  );
}

export default TodoComponent;
