import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer";
import About from "./pages/About/About";
import ContactUs from "./pages/Contact/ContactUs";
import Community from "./pages/Community/Community";
import Donate from "./pages/Donate/Donate";
import ScrollToTop from "./constant/ScrollToTop";
import JoinedCommunity from "./pages/Community/JoinedCommunity";
import GetInvolved from "./pages/GetInvolved/GetInvolved";
import Institute from "./pages/Institute/Institute";
import ProgrammePage from "./components/institute/ProgrammePage";

function App() {
  return (
    <div className="bg-[#E6DADA] min-h-screen flex flex-col">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/programmes/:type" element={<ProgrammePage />} />
          <Route path="/contact" element={<ContactUs />}></Route>
          <Route path="/communityApplication" element={<Community />}></Route>
          <Route path="/donate" element={<Donate />}></Route>
          <Route path="/joined" element={<JoinedCommunity />}></Route>
          <Route path="/get-involved" element={<GetInvolved />}></Route>
          <Route path="/institute" element={<Institute />}></Route>
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
