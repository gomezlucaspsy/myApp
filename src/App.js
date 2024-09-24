import './App.css';
import { useState } from 'react';


function App() {
  const[show, setShow] = useState(false);
  console.log("Talk with the admin https://docs.google.com/forms/d/1yQ1KlpqsmpJkstexPIPYhxL3I6GgobPtULhDGZxAc2s")
  return (
    <div className="App">
      <header className="App-header">
      <h1>News Online</h1>
      {show &&
      <div className='ControlPanel'>
      TN<br></br>
      <iframe width="400" height="225" src="https://www.youtube.com/embed/cb12KmMMDJA" title="TN EN VIVO I SEGUÍ LA TRANSMISIÓN DE TODO NOTICIAS EN VIVO" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe><br></br><hr></hr>
      TAIWAN<br></br><iframe width="400" height="225" src="https://www.youtube.com/embed/2mCSYvcfhtc" title="【ON AIR】TVBS新聞台 24 小時直播 |Taiwan News Live|台湾TVBS NEWS世界中のニュースを24時間配信中 | 대만 TVBS뉴스 24시간 생방송" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe><br></br><hr></hr> 
      AL JAZEERA<br></br><iframe width="400" height="225" src="https://www.youtube.com/embed/bNyUyrR0PHo" title="Al Jazeera Arabic Live قناة الجزيرة | البث الحي | البث المباشر" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe><br></br><hr></hr>
      DEUSTCH<br></br><iframe width="400" height="225" src="https://www.youtube.com/embed/CQ3KsEbsYHs" title="Euronews deutsch LIVE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe><br></br><hr></hr>
      </div>
      }
      <button class="round" type='button' onClick={()=>setShow(!show)}> 
      {show === true ? "Hide News Panel": "Show News Panel"}</button>
      </header>
    </div>
  );
}

export default App;
