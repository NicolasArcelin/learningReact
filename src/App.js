import Todo from "./components/Todo";

function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo text="Learn React" />
      <Todo text="Master React" />
      <Todo text="Be Awesome" />
      <Todo text="Be extra awsome" />
    </div>
  );
}

export default App;
