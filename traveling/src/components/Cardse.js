import '../App.css';
import bd from '../bd/bd'
import Fla from '../img/Flag_of_Seychelles.svg.png'
function Cardse() {
    
    const mystyle={
        width: "max(45%, 45vw)",
        height: "max(25%, 25vh)",
        position: "absolute",
        top: "470%"
        
    }
    const pr={
        position:"absolute",
        left:"5%",
        bottom:"500%"
    }
    const ai={
        fontSize: '20px',
        color: '#fff',
        position: 'absolute',
        top: '1%',
    }
  return (
    
        <div className="App AppPid">
            
            <div id='DomText'>
                <a style={ai} href='/'></a>
                <h4 id="DomH4">{bd.cardseH3}</h4>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <img style={mystyle} src={Fla} />
                <p style={pr}>Прапор</p>
            </div>
            
        </div>
    
      
  );
}

export default Cardse;
