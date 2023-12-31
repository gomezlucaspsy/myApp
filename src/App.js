import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/pQGIJ2vfK9c?si=YzKpBjT8KKp7jP5_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
