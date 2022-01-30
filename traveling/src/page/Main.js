// http://192.168.0.103:3000
import '../App.css';
import Header from '../components/Header'
import pid from '../img/pid.jpg';
import Dom from '../img/DomRep_Bacardi_Insel.jpg';
import Se  from '../img/Se.JPG';
import bd from '../bd/bd';
function Main() {
  let ukrPid='Україна,Підволочиськ'
  let enPid='Ukraine,Pidvolochysk '
  let anoPid='Цікаве маленьке селище на Тернопільщині';
  let c={
    fontFamily: "'Oswald', sans-serif",
  }
  return (
    <div className="App">
      <Header />
      
      <a id='Pid' href='Pid'>
          <div id='Pidd'>
              <h4 id="PidH4">{enPid+ukrPid}</h4>
              <p id="ano">{anoPid}</p>
              <img id='pidimg' src={pid}/>
              
          </div>
      </a>
      <a id='Domi' href='Domi'>
          <div id='Domii'>
            <h4 style={c} id='DomiH4'>{bd.DomiH4}</h4>
            <p style={c} id="ano1">{bd.ano1}</p>
            <img id="img1" src={Dom}/>
          </div>
      </a>
      {/* Сейшели */}
      <a id="se" href='se'>
          <div id='see'>
            <h4 id='seH4'>{bd.seH4}</h4>
            <p id="seano">{bd.seano}</p>
            <img id="img11" src={Se}/> 
          </div>
      </a>
    </div>
  );
}

export default Main;
