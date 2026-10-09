import "./App.css";

function App() {
  const todoList = [
    { id: 1, title: "Complete lesson 1" },
    { id: 2, title: "Do quizzes" },
    { id: 3, title: "Start working on lesson 2" },
  ];
  return (
    <div>
      <h1>Get It Done</h1>
      <ul>
        {todoList.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
