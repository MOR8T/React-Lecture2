import './App.css';
import Component from './components/Component/Component';
import Condition from './components/ConditionalRendering/Condition';
import Handing from './components/HandlingEvents/Handing';
import List from './components/Lists&Keys/List';


function App() {
  return (
    <div className="App">
      <Component/>
      <Handing/>
      <Condition/>
      <List/>
    </div>
  );
}

export default App;
