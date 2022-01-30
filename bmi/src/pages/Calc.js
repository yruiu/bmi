import '../App.css';
import bd from '../bd/bd'
function Calc() {
  let s={
    "color":"red"
  }
  return (
    <div id="app">
      <p style={s}>{bd.h}</p>
    </div>
  );
}

export default Calc;