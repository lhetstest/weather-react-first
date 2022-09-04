import './App.css';
import Weather from './components/Weather';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather app</h1>
        <Weather />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Made with React
        </a>
      </header>
    </div>
  );
}

export default App;
