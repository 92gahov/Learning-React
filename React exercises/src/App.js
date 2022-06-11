import './App.css';
import { Axios } from './Components/Axios';
import Counter from './Components/Counter';
import CounterHook from './Components/CounterHook';
import Episodes from './Components/Episodes';

function App() {
  return (
    <div className="App">
      <Axios></Axios>
      <Counter />
      <CounterHook />
      <Episodes />
    </div>
  );
}

export default App;
