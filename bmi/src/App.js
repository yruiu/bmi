import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Main from './pages/Main';
import Calc from './pages/Calc';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Main />}/>
          <Route exact path="/Calc" element={<Calc />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
