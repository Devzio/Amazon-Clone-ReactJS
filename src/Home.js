import React from "react";
import Product from "./Product";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        // src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Currency_v2_en_US_1x._CB428993290_.jpg"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""
      />

      {/* Product id, title, price, rating, image */}
      <div className="home__row">
        <Product
          id="001"
          title="PlayStation 5 Console"
          price={599}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/619BkvKW35L._SL1500_.jpg"
        />
        <Product
          id="002"
          title="PlayStation 5 Digital Edition"
          price={499}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/61JbCra%2B7GL._SL1500_.jpg"
        />
      </div>

      <div className="home__row">
        <Product
          id="003"
          title="Xbox Series X"
          price={499}
          rating={5}
          image="https://gamespot1.cbsistatic.com/uploads/scale_super/1574/15747411/3614974-series-xbox3.jpg"
        />
        <Product
          id="004"
          title="Xbox Series S"
          price={299}
          rating={4}
          image="https://cnet1.cbsistatic.com/img/bC24-vEo52MbJTtANdL3IW4LBWM=/1200x630/2020/09/08/10314fa6-8360-4891-af6d-79e3532720f3/xbox-series-s-real-photo-scaled.jpg"
        />
        <Product
          id="005"
          title="Nintendo Switch 2"
          price={299}
          rating={5}
          image="https://retrododo.com/wp-content/uploads/2020/04/nintendo-switch-2.jpg"
        />
        {/* <Product
          id="002"
          title="Kenwood kMix Stand Mixer for Baking Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 litre Glass Bowl"
          price={239.9}
          rating={4}
          image="https://www.kenwoodworld.com/WebImage/Global/Product%20images/Kmix%20products/KMX754RD/KMX754RD_800x600.png"
        /> */}
      </div>

      <div className="home__row">
        <Product
          id="006"
          title="LG 34UC98 Curved UltraWide and 27UD88 4K monitor"
          price={1199.99}
          rating={5}
          image="https://www.slashgear.com/wp-content/uploads/2016/03/lg-4k-1-900x420.jpg"
        />
      </div>

      {/* Product */}
    </div>
  );
}

export default Home;
