/* eslint-disable react/jsx-no-undef */
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Projects from "./components/Projects";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { BuyerReview } from "./components/Reviews";

export function App() {
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


        {/* <Contact Us/> */}
      </div>












    </div>
  );
}
