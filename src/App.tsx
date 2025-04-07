import Footer from "./components/Footer";
import Hero from "./components/Hero";
import NavBar from "./components/NabBar";
import { BrowserRouter } from "react-router";

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <Hero/>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}
