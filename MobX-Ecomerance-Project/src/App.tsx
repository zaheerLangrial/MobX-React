import "./App.css";
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Login from "./pages/Login";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/home" element={<Home />}/>
        <Route path="/cart" element={<Cart />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
