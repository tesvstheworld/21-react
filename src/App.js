import "./App.css";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Testimonial from "./components/Testimonial";
function App() {
  return (
    <div className="App">
      <>
        <HeroSection />
        <Testimonial />
        <Footer />
      </>
    </div>
  );
}

export default App;
