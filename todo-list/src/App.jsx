import "./App.css";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import { useState } from "react";

const todos = [
  { id: 1, title: "Complete weekly lessons" },
  { id: 2, title: "Do quizzes" },
  { id: 3, title: "Start working on the next lesson" },
];

function App() {
  const [todoList, setTodoList] = useState(todos);
  return (
    <div>
      <h1>Get It Done</h1>
      <TodoForm />
      <TodoList todoList={todoList} />
    </div>
  );
}

export default App;
