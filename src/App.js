import Header from "./components/Header"
import logo from './logo.svg';
import './App.css';
import HeroSection from "./components/HeroSection";
import Projects from "./components/Projects";
import { BuyerReview , SellerReview } from "./components/Reviews";
import Contact from "./components/Contact";


function App() {
  return (
    <div className="App">
      <div>
     <Header/>
      <HeroSection/>
      <Projects/>

      <BuyerReview/>
      <SellerReview/>
      <Contact/>
     </div>
     
     
     
     
     
     
     
     
     
     
     
     
    </div>
  );
}

export default App;
