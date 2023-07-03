
import './App.css';
import "./App.scss"
import {
  BrowserRouter,
  Route, Routes
} from "react-router-dom";
import Login from './Content/Login/Login';
import Registration from './Content/Login/Registration';
import App1 from './App1';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes><Route path="/app1" element={<App1 />} />
          <Route path="/" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
