import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SliderProvider } from "./context/SliderContext";
import Header from "./components/Header";
import Gallery from "./pages/Gallery";
import Slideshow from "./pages/Slideshow";

function App() {
  return (
    <Router>
      <Header />
      <SliderProvider>
        <Routes>
          <Route path="/" element={<Gallery />} />
          <Route path="/slideshow" element={<Slideshow />} />
        </Routes>
      </SliderProvider>
    </Router>
  );
}

export default App;
