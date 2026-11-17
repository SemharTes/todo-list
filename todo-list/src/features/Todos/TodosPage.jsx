import TodoList from "./TodoList/TodoList";
import TodoForm from "./TodoForm";
import { useState } from "react";

function TodosPage() {
  const [todoList, setTodoList] = useState([]);

  function addTodo(todoTitle) {
    const newTodo = { id: Date.now(), title: todoTitle, isCompleted: false };
    setTodoList((previous) => [newTodo, ...previous]);
  }

  function completeTodo(id) {
    const updatedTodos = todoList.map((todo) =>
      todo.id === id ? { ...todo, isCompleted: true } : todo,
    );
    setTodoList(updatedTodos);
  }

  function updateTodo(editedTodo) {
    const updatedTodos = todoList.map((todo) =>
      todo.id === editedTodo.id ? { ...editedTodo } : todo,
    );
    setTodoList(updatedTodos);
  }

  return (
    <div>
      <TodoForm onAddTodo={addTodo} />
      <TodoList
        todoList={todoList}
        onCompleteTodo={completeTodo}
        onUpdateTodo={updateTodo}
      />
    </div>
  );
}

export default TodosPage;
