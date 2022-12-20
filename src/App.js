import './App.css';
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import SignUp from "./components/SignUp";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/add" element={<h1>Add Product</h1>} />
        <Route path="/update" element={<h1>profile Product</h1>} />
        <Route path="/profile" element={<h1>Profile</h1>} />
        <Route path="/logout" element={<h1>logout</h1>} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <Footer />
    </>


  );
}

export default App;
