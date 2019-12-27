import React from 'react';
import './App.css';
import TopAds from './components/TopAds';
import Topbar from './components/Topbar';
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import SliderContent from './components/SliderContent';
import Features from './components/Features';
import Trending from './components/Trending';
import BestSeller from './components/BestSeller';
import SiteOffer from './components/SiteOffer';
import OfferText from './components/OfferText';
import Newsletter from './components/Newsletter';
import Brand from './components/Brand';
import Footer from './components/Footer';
import {Switch, Route} from 'react-router-dom';
import Shop from './screen/Shop';

function App () {
  return (
    <React.Fragment>
      <TopAds />
      <Topbar />
      <Navbar />
      <Slider>
        <SliderContent>
          <h4>new inspiration 2020 </h4>
          <h1>apple products made for you!</h1>
          <h3>trending in all countries worldwide</h3>
          <a href="/" className="slider-btn">Shop Now</a>
        </SliderContent>
      </Slider>
      <Features />
      <Trending />
      <BestSeller />
      <SiteOffer>
        <div className="offer-container">
          <OfferText>
            <div>
              <h3>limited time offer</h3>
              <h2>-40% off</h2>
              <h3>get the best deals now</h3>
            </div>
          </OfferText>
        </div>
      </SiteOffer>
      <hr />
      <hr />
      <Newsletter />
      <Brand />

      <Footer />
      <Switch>
        {/* <Route path="/" component={TopAds} /> */}
        <Route path="/shop" component={Shop} />
      </Switch>

    </React.Fragment>
  );
}

export default App;
