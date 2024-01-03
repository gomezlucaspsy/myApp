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
      <div className='ControlPanel'>
      <ul>
        <li><a href="<iframe width="853" height="480" src="https://www.youtube.com/embed/1esTygT7upo" title="Emisión de prueba." frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>" className='App-link'>ATC ARGENTINA</a></li>
        <li><a href="" className='App-link'>2</a></li>
        <li><a href="" className='App-link'>3</a></li>
        <li><a href="" className='App-link'>4</a></li>
        <li><a href="" className='App-link'>5</a></li>
        <li><a href="" className='App-link'>6</a></li>
        <li><a href="" className='App-link'>7</a></li>
        <li><a href="" className='App-link'>8</a></li>
      </ul>
      <iframe width="400" height="225" src="https://www.youtube.com/embed/ywgAZw8JKeY?si=63NDsbi5Zm5Xbdyn" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      <iframe width="400" height="225" src="https://www.youtube.com/embed/IMtKOLghyk4?si=QFvbkUaa9GGVx6FE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      <iframe width="400" height="225" src="https://www.youtube.com/embed/lSRvsfr-kpg?si=G8uK_k_ELkuWqn4w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      <iframe width="400" height="225" src="https://www.youtube.com/embed/HfgIFGbdGJ0?si=85IjtI46RjZ7_9hV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
      }
      <button class="round" type='button' onClick={()=>setShow(!show)}> 
      {show === true ? "Hide Control Panel": "Show Control Panel"}</button>
      </header>
    </div>
  );
}

export default App;
