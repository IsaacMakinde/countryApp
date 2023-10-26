import React, { useState, useEffect } from "react";

import TodoService from "../services/toDoService";
import FetchClient from "../serviceClients/fetchClient";

const Header = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const todoService = new TodoService(FetchClient);
    const fetchTodos = async () => {
      try {
        const todos = await todoService.getTodos();
        setTodos(todos);
      } catch (error) {
        console.error(error);
      }
    };

    fetchTodos();
  }, []);

  const handleCreateTodo = async (todo: any) => {
    const todoService = new TodoService(FetchClient);
    try {
      const createdTodo = await todoService.createTodo(todo);
      setTodos([...todos, createdTodo]);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <button
        onClick={() =>
          handleCreateTodo({ title: "New todo", completed: false })
        }
      >
        Create Todo
      </button>
      <ul>
        {todos.map((todo: any) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
};
export default Header;
