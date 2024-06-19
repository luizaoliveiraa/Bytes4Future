import logo from './logo.svg';
import './App.css';
import { ButtonNumber } from './components/thingsGerar';
import { NameGenerator } from './components/thingsGerar';
import { NumAleatorio } from './components/thingsGerar';

function App() {
  return (
    <div className="App">
     <ButtonNumber/>
     <NameGenerator/>
     <NumAleatorio/>
    </div>
  );
}

export default App;
