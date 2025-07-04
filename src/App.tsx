import './App.scss'
import CounterButton from './CounterButton';
import TodoList from './TodoList';

function App() {

  return (
    <>
      <div className="card">
        <CounterButton />
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR2
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <TodoList />
    </>
  )
}

export default App
