import './App.css';
import Hello from './components/Hello';
import Msg from './components/Msg';
import Comp from './components/Comp1';
import StateEx from './components/StateEx';
function App() {
  return (
    <div className="App">
  <Hello />
  <Msg />
  <Comp name ="Mahadev" />
  <Comp name ="ShivaParvatiiii" />
  <Comp name ="Krishnaa" />
  <StateEx />
    </div>
  );
}

export default App;