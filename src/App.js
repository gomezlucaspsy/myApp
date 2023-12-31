import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const[show, setShow] = useState(false);
  console.log("Talk with the admin https://docs.google.com/forms/d/1yQ1KlpqsmpJkstexPIPYhxL3I6GgobPtULhDGZxAc2s")
  return (
    <div className="App">
      <header className="App-header">
      <h1>Welcome to the Air Traffic Control (ATC)</h1>
      {show &&
      <div>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/ywgAZw8JKeY?si=63NDsbi5Zm5Xbdyn" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/IMtKOLghyk4?si=QFvbkUaa9GGVx6FE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/pQGIJ2vfK9c?si=YzKpBjT8KKp7jP5_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/lSRvsfr-kpg?si=G8uK_k_ELkuWqn4w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/HfgIFGbdGJ0?si=85IjtI46RjZ7_9hV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
      }
      <button class="round" type='button' onClick={()=>setShow(!show)}> 
      {show === true ? "Hide": "Show"}</button>

      </header>
    </div>
  );
}

export default App;
