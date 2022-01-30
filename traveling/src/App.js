import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Pid from './page/Pid';
import Main from './page/Main';
import Domi from './page/Domi'
import Se from './page/se'
function App() {
  return (
    <div className="App AppMai">
      
      <Router>
        <Routes>
          <Route exact path="/" element={<Main />}/>
          <Route exact path="/Pid" element={<Pid />}/>
          <Route exact path="/Domi" element={<Domi />}/>
          <Route exact path="/se" element={<Se />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
