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
      <iframe width="400" height="225" src="https://www.youtube.com/embed/Tnp0VS9dzXY" title="C5N EN VIVO | Toda la información en un solo lugar - Seguí la transmisión las 24 horas" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      <iframe width="400" height="225" src="https://www.youtube.com/embed/2mCSYvcfhtc" title="【ON AIR】TVBS新聞台 24 小時直播 |Taiwan News Live|台湾TVBS NEWS世界中のニュースを24時間配信中 | 대만 TVBS뉴스 24시간 생방송" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>    
      <iframe width="400" height="225" src="https://www.youtube.com/embed/YDfiTGGPYCk" title="LiveNOW from FOX" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>  
      <iframe width="400" height="225" src="https://www.youtube.com/embed/9sE12tg3CmA" title="【正在直播：CCTV中文国际】全球新闻热点、时事点评、深度报道、纪录片、电视剧等 | LIVE NOW" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      <iframe width="400" height="225" src="https://www.youtube.com/embed/bNyUyrR0PHo" title="Al Jazeera Arabic Live قناة الجزيرة | البث الحي | البث المباشر" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
      }
      <button class="round" type='button' onClick={()=>setShow(!show)}> 
      {show === true ? "Hide News Panel": "Show News Panel"}</button>
      </header>
    </div>
  );
}

export default App;
