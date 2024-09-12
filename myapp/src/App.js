import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Products} from "./Screens/Products"
import Navbar from "./Components/Navbar"
import DetailPage from './Screens/DetailPage'
import Cart from './Screens/Cart'

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/pro" element={<Products />} />
          <Route path="/detail/:id" element={<DetailPage />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
