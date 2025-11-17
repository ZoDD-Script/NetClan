import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-[#E6DADA]">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about"></Route>
        <Route path="/contact"></Route>
        <Route path="/application"></Route>
        <Route path="/application"></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
