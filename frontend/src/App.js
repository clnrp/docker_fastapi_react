import './App.css';

// 1 - config react router, sem links
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

// pages
import Home from "./pages/Home";
import About from "./pages/About";
import Signin from "./pages/Signin";
import ApiTest from './pages/ApiTest';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/apitest' element={<ApiTest />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
