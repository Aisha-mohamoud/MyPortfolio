import Header from "./Components/Header";
import Footer from "./Components/Footer";
import MainSection from "./Components/mainSection";
import ContactMe from "./pages/contactMe";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div >
      {/* <Header /> */}
      
      <Routes>
        <Route path="/" element={<MainSection />} />
        <Route path="/contactMe" element={<ContactMe />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
