import logo from './logo.svg';
import './App.css';
import "./App.scss"
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Nevbar from './Content/Nevbar/Nevbar';
import Home from './Content/Home/Home';
import About from './Content/About/About';
import Login from './Content/Login/Login';
function App() {
  return (
    <>
    <BrowserRouter>
    <Nevbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/login" element={<Login/>}/>

        
      </Routes>
    </BrowserRouter>

    </>
  );
}

export default App;
