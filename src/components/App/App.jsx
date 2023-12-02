import TodoManager from "../TodoManager/TodoManager";

function App() {
  localStorage.setItem("todos", []);

  return (
    <>
      <TodoManager />
    </>
  );
}

export default App;
