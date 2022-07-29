import React from 'react'
import './Home.css'
import Product from "./Product.js"

function Home() {
  return (
    <div className="home">
        <div className='home__container'>
            <img className="home__image"
            src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt =""/>
        </div>

        <div className="home__row">
            <Product
            id="12321341"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
            price={639.0}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
          />
          <Product
            id="49538094"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={50890.0}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
          />
        </div>
        <div className="home__row">
        <Product
            id="4903850"
            title="Samsung Galaxy Watch4"
            price={32400.99}
            rating={3}
            image="https://images.samsung.com/is/image/samsung/assets/in/2108/pcd/watches/mo/PCD_showcase_3_card_watch4_MO.png?$264_264_PNG$"
          />
          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={3700}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={71900}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>
        <div className="home__row">
        <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={135000.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
        </div>
        
    </div>
    
  )
}

export default Home