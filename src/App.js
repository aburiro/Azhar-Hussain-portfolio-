import Header from "./components/Header";
import './App.css';
import HeroSection from "./components/HeroSection";
import Projects from "./components/Projects";
import { BuyerReview, SellerReview } from "./components/Reviews";
 import Contact from "./components/Contact Us";
import 'bootstrap/dist/css/bootstrap.min.css';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
// Remove the duplicate import statement below
// import SellerReview from './components/Review'; 
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <div>
        <Header />
        <HeroSection />
        <Projects />
        <Tabs
          defaultActiveKey="profile"
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          <Tab eventKey="home" title="Buy Review">
            <BuyerReview />
          </Tab>
          <Tab eventKey="profile" title="Seller Review ">
            <SellerReview />
          </Tab>
        </Tabs>
        <Contact Us/> 
        <Footer />
      </div>
    </div>
  );
}

export default App;
