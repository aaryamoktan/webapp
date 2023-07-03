
import './App.css';
import "./App.scss"
import {
  BrowserRouter,
  Route,Routes
} from "react-router-dom";
import Home from './Content/Home/Home';
import About from './Content/About/About';
import Login from './Content/Login/Login';
import App1 from './App1';
function App() {
  return (
    <>
    <BrowserRouter>
  
  <Routes><Route path="/app1" element={<App1/>}/>
  <Route path="/" element={<Login/>}/>
  
  </Routes>
    </BrowserRouter>

    </>
  );
}

export default App;
