import './App.css';
import Navbar from "./Components/NavBar/Navbar";
import AllRouters from "./Components/AllRouters";
import { BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <AllRouters/>
      </BrowserRouter>
    </div>
  );
}

export default App;
