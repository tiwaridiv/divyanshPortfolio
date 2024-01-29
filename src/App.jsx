import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { Footer, Navbar } from "./components";
import { About, Contact, Home, Projects } from "./pages";
import Otpverf from "./pages/login/Otpverf";

const App = () => {
  return (
    <main className="bg-slate-300/20">
      <Router>
        <Routes>
          {/* Otpverf route without Navbar */}
          <Route path="/otpverf" element={<Otpverf />} />

          {/* Other routes with Navbar */}
          <Route
            path="/*"
            element={
              <>
                <Navbar />
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/projects" element={<Projects />} />
                  <Route path="/contact" element={<Contact />} />
                </Routes>
                <Footer />
              </>
            }
          />
        </Routes>
      </Router>
    </main>
  );
};

export default App;
