import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SliderProvider } from "./context/SliderContext";
import Header from "./components/Header";
import Gallery from "./pages/Gallery";
import Slideshow from "./pages/Slideshow";

function App() {
  return (
    <SliderProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Gallery />} />
          <Route path="/slideshow" element={<Slideshow />} />
        </Routes>
      </Router>
    </SliderProvider>
  );
}

export default App;
