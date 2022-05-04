
import './App.css';
import Names from './components/Names';

function App() {
  return (
    <div className="App">
      <Names lastName="Doe" firstName="John" age ="45" color="black"/>
      <Names lastName="Smith" firstName="Jane" age ="33" color="brown"/>
      <Names lastName="Wayne" firstName="Bruce" age ="22" color="black"/>
      <Names lastName="Smooth" firstName="Bill" age ="55" color="brown"/>
    </div>
  );
}

export default App;
