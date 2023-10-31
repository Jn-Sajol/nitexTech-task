import "./App.css";
import Navbar from './components/Navbar';
import Home from './components/Home';
import Services from "./components/Services";
import About from './components/About';
import Product from './components/Product';
import Myfooter from "./components/Myfooter";
import Faq from "./components/Faq";
import Testimonial from "./components/Testimonial";

function App() {
  return (
    <>
     <Navbar />
     <Home />
     <Services />
     <About />
     <Product />
     <Testimonial/>
     <Faq/>
     <Myfooter/>
    </>
  );
}

export default App;
