import './App.css';
import CountDownTimerTest from './components/countdown-timer/test';
import DigitalClock from './components/digital-clock';
import PaginationTest from './components/pagination/test';

function App() {
  return (
    <div className="App">
      <PaginationTest />
      <DigitalClock />
      <CountDownTimerTest />
    </div>
  );
}

export default App;
