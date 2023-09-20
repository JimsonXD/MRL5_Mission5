import React from "react";
import Navbar from "../../commonComponents/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import CarouselHomePage from './CarouselHomePage';
import Footer from "../../commonComponents/Footer";
import HomePagePicture from '../../assets/HomePage.png';
import QueenCityLaw from '../../assets/QueenCityLaw.png'
import BodyCorporateHomepage from '../../assets/BodyCorporateAdministration.png';
import WestpacAwards from '../../assets/WestpacAwards.png';
import ReaAwards from '../../assets/ReaAwards.png';
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col justify-center">
      <Navbar />
      <div>
        {/* Search bar */}

        {/* Picture */}
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <img
              src={HomePagePicture}
              alt="Pic1"
              className="max-w-full h-auto"
            />
          </div>
          <div className="md:w-1/2 p-4">
            <p className="text-red-500 mb-4">Property Management Auckland</p>
            <p className="text-lg">
              Metro NZ is one of the top Auckland Property Management companies.
              All of our staff are property investors who have expert knowledge
              of the property market and your best interest in mind at all
              times. Check out our tailored services we offer as an Auckland
              property management company.
            </p>
            <div className="flex justify-center space-x-4 mt-4">
              <Link to="/my-tenancy-application">
                <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700">
                  Property Owners
                </button>
              </Link>
              <Link to="/rental-property-search">
                <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700">
                  Rental Listings
                </button>
              </Link>
              <Link to="/my-tenancy-application">
                <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700">
                  My Tenancy Application
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="text-center text-2xl mt-8 mb-4">
          Helping Clients To Achieve Harmony Through Our Expertise and Skills
        </div>

        {/* flexbox */}
        <div className="flex flex-wrap justify-center">
          {/* Your flexItemright elements go here */}
        </div>

        <div className="flex justify-center space-x-4 mt-4">
          <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700">
            Property Owners
          </button>
          <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700">
            Rental Listings
          </button>
        </div>

        <div className="text-center text-2xl mt-8 mb-4">
          Working With Landlords, Tenants, Building Owners, and Property Investors
        </div>

        {/* Carousel */}
        <CarouselHomePage />

        <div className="flex justify-center space-x-4 mt-4">
          <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700">
            Call Today
          </button>
          <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700">
            Email Us
          </button>
        </div>

        {/* Testimonial Page */}
        <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
          <div className="text-center text-2xl mt-4 mb-10">Testimonials</div>
          {/* Your testimonial content here */}
        </section>

        {/* Awards Section */}
        <div className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
              Awards
            </h2>
            <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
              <img
                src={QueenCityLaw}
                alt="Transistor"
                width={500}
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
                src={WestpacAwards}
                alt="Tuple"
                width={1000}
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
                src={ReaAwards}
                alt="Statamic"
                width={600}
                height={48}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
