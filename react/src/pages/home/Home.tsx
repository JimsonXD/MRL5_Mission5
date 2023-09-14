import React from "react";
import Navbar from "../../commonComponents/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import CarouselHomePage from '../home/CarouselHomePage';
import Footer from "../../commonComponents/Footer";
import HomePagePicture from '../../assets/HomePage.png';
import BodyCorporateHomepage from '../../assets/BodyCorporateAdministration.png'
import BookViewingTimespopups from '../../pages/popups/BookViewingTime'
import EnquireNowpopups from '../../pages/popups/EnquireNowPopup'
import styles from '../../pages/home/Home.module.css';





const Home = () => {
  
  
  
  
  
  return (
    
    <div className="flex flex-col justify-center">
      <Navbar />
      <div>
        {/* Search bar */}
        <div className="relative mt-2 rounded-md shadow-sm">
          <input
            type="text"
            name="price"
            id="price"
            className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="Type an Address, Suburb or City"
          />
        </div>

        {/* Picture */}
        <div className={styles.flexContainer1}>
  <div className={styles.flexItemleft1}>
    <div className={styles.imageContainer}>
      <img
        src={HomePagePicture}
       
        style={{
          maxWidth: '100%',
          height: 'auto',
          display: 'block',
        }}
        alt="Pic1"
      />
    </div>
    <div className={styles.flexItemrightitle}>
      <br></br>
      <br></br>
      <p>Property Management Auckland</p>
      <p>
        Metro NZ is one of the top Auckland Property Management companies. All
        of our staff are property investors who have expert knowledge of the
        property market and your best interest in mind at all times. Check out
        our tailored services we offer as an Auckland property management
        company.
        <div className={styles.buttoncontainer}>
        <button className={styles.redbutton}>Property Owners</button>
        <button className={styles.redbutton}>Rental Listings</button>
        <button className={styles.redbutton}>My Tenancy Application</button>
    </div>

      </p>
    </div>
  </div>
</div>

        <div className={styles.SecondSlogan}>Helping Clients To Achieve Harmony Through Our Expertise and Skills</div>
        {/* flexbox */}
        <div className={styles.flexContainer}>
      <div className={styles.flexItemleft}>Property Management<img
      src={BodyCorporateHomepage} alt="pic1"
    /></div>
      <div className={styles.flexItemright}>Body Corporate Administration<img
      src={BodyCorporateHomepage} alt="pic1"
      
     
    /></div>
      <div className={styles.flexItemright}>Building Management<img
      src={BodyCorporateHomepage} alt="pic1"
    /></div>
      <div className={styles.flexItemright}>Decluttering Management<img
      src={BodyCorporateHomepage} alt="pic1"
    /></div>
      <div className={styles.flexItemright}>Free Property Appraisals<img
      src={BodyCorporateHomepage} alt="pic1"
    /></div>
      <div className={styles.flexItemright}>Renovation Property Management<img
      src={BodyCorporateHomepage} alt="pic1"
    /></div>
      <div className={styles.flexItemright}>Investment Properties<img
      src={BodyCorporateHomepage} alt="pic1"
    /></div>
      <div className={styles.flexItemright}>Rental Properties<img
      src={BodyCorporateHomepage} alt="pic1"
    /></div>
    </div>
    <div className={styles.buttoncontainer}>
        <button className={styles.redbutton}>Property Owners</button>
        <button className={styles.redbutton}>Rental Listings</button>
    </div>


    <div className={styles.SecondSlogan}>Working With Landlords, Tenants,Building Owners and Property Investors</div>
    {/* Carousel */}
  
      <CarouselHomePage/>
      <div className={styles.buttoncontainer}>
        <button className={styles.redbutton}>Call Today</button>
        <button className={styles.redbutton}>Email Us</button>
    </div>

    {/*  Testimonial Page*/}

    
    <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
    <div className={styles.SecondSlogan}>Testimonials</div>
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white " />
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
       
      
        <figure className="mt-10">
          <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
            <p>
                                          
            Everything was smooth and efficient, which i really appreciate. I will be recommending them to others looking for home. My experience with NZ metro property was really good from start to finish. 
            </p>
          </blockquote>
          <figcaption className="mt-10">
            <img
              className="mx-auto h-10 w-10 rounded-full"
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
            <div className="mt-4 flex items-center justify-center space-x-3 text-base">
              <div className="font-semibold text-gray-900">Vanessa Jepson</div>
              <svg viewBox="0 0 2 2" width={3} height={3} aria-hidden="true" className="fill-gray-900">
                <circle cx={1} cy={1} r={1} />
              </svg>
              <div className="text-gray-600">posted on 23-08-202</div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>


    {/* Awards Section */}

    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
         Awards
        </h2>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <img
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src="https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg"
            alt="Transistor"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src="https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg"
            alt="Reform"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src="https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg"
            alt="Tuple"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
            src="https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-900.svg"
            alt="SavvyCal"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
            src="https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg"
            alt="Statamic"
            width={158}
            height={48}
          />
        </div>
      </div>
    </div>

    <BookViewingTimespopups/>
    <EnquireNowpopups/>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
