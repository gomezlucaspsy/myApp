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
      <div className='topnav'>
      <ul>
        <li><a href="https://docs.google.com/forms/d/1yQ1KlpqsmpJkstexPIPYhxL3I6GgobPtULhDGZxAc2s" className='App-link'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-messenger" viewBox="0 0 16 16">
  <path d="M0 7.76C0 3.301 3.493 0 8 0s8 3.301 8 7.76-3.493 7.76-8 7.76c-.81 0-1.586-.107-2.316-.307a.639.639 0 0 0-.427.03l-1.588.702a.64.64 0 0 1-.898-.566l-.044-1.423a.639.639 0 0 0-.215-.456C.956 12.108 0 10.092 0 7.76m5.546-1.459-2.35 3.728c-.225.358.214.761.551.506l2.525-1.916a.48.48 0 0 1 .578-.002l1.869 1.402a1.2 1.2 0 0 0 1.735-.32l2.35-3.728c.226-.358-.214-.761-.551-.506L9.728 7.381a.48.48 0 0 1-.578.002L7.281 5.98a1.2 1.2 0 0 0-1.735.32z"/>
</svg>Admin</a></li>
      <li><a href="https://youtu.be/1esTygT7upo" className='App-link'>ATC ARGENTINA</a></li>

        <li><a href="" className='App-link'>3</a></li>
        <li><a href="" className='App-link'>4</a></li>
        <li><a href="" className='App-link'>5</a></li>
        <li><a href="" className='App-link'>6</a></li>
        <li><a href="" className='App-link'>7</a></li>
        <input type="text" placeholder="Search.."></input>
        </ul>
      </div>

      <iframe width="400" height="225" src="https://www.youtube.com/embed/lSRvsfr-kpg?si=G8uK_k_ELkuWqn4w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      <iframe width="400" height="225" src="https://www.youtube.com/embed/HfgIFGbdGJ0?si=85IjtI46RjZ7_9hV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      <iframe width="400" height="225" src="https://www.youtube.com/embed/IMtKOLghyk4?si=QFvbkUaa9GGVx6FE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      <iframe width="400" height="225" src="https://www.youtube.com/embed/ywgAZw8JKeY?si=63NDsbi5Zm5Xbdyn" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
      }
      <button class="round" type='button' onClick={()=>setShow(!show)}> 
      {show === true ? "Hide Control Panel": "Show Control Panel"}</button>
      </header>
    </div>
  );
}

export default App;
