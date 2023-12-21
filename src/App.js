import Home from "./pages/Home";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import BookDetails from "./pages/BookDetails";
import Login from "./pages/Login";
import NavbarBook from "./components/NavbarBook";
import FooterBook from "./components/FooterBook";
import ElektronikP from "./pages/ElektronikP";
import Kirtasiye from "./pages/Kirtasiye";
import Payy from "./pages/Payy";




function App() {
  return (
    <div className="App d-flex  flex-column justify-content-space-between w-100">
      <NavbarBook />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ElektronikP" element={<ElektronikP/>}/>
        <Route path="/Kirtasiye" element={<Kirtasiye/>}/>
        


        <Route path="/BookDetails/:id" element={<BookDetails />} />
        <Route path="/Payy/" element={<Payy />} />
        
        <Route path="/login" element={<Login />} />
       
        
      </Routes>
      
      <FooterBook className="footer" />
    </div>
  );
}

export default App;
