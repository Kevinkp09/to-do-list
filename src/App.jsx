import "./App.css";
import TodoList from "./TodoList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>To-Do List App</h1>
      </header>
      <main>
        <TodoList />
      </main>
    </div>
  );
}

export default App;
