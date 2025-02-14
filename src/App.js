import './App.css';
import Hello from './components/Hello';
import Msg from './components/Msg';
import Comp from './components/Comp1';
import Useeffect from './components/Useeffect';
import Refhook from './components/Refhook';

function App() {
  return (
    <div className="App">
  <Hello />
  <Msg />
  <Comp name ="Mahadev" />
  <Comp name ="ShivaParvatiiii" />
  <Comp name ="Krishnaa" />
  <Useeffect />
    </div>
  );
}

export default App;