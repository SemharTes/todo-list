function TodoList() {
  const todoList = [
    { id: 1, title: "Complete weekly lessons" },
    { id: 2, title: "Do quizzes" },
    { id: 3, title: "Start working on the next lesson" },
  ];
  return (
    <ul>
      {todoList.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
}

export default TodoList;
