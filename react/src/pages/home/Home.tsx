import React from "react";
import Navbar from "../../commonComponents/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import CarouselHomePage from "./CarouselHomePage";
import Footer from "../../commonComponents/Footer";
import HomePagePicture from "../../assets/HomePage.png";
import QueenCityLaw from "../../assets/QueenCityLaw.png";
import BodyCorporateHomepage from "../../assets/BodyCorporateAdministration.png";
import WestpacAwards from "../../assets/WestpacAwards.png";
import ReaAwards from "../../assets/ReaAwards.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col justify-center">
      <Navbar />
      <div>
        {/* Search bar */}

        {/* Picture */}

        <div className="mx-24">
          <div className="flex md:flex-row items-center bg-gainsboro rounded-lg">
            <div className="md:w-1/2 p-8 w-1/2">
              <img
                src={HomePagePicture}
                alt="Pic1"
                className="max-w-full h-auto rounded-lg w-full"
              />
            </div>
            <div className="md:w-1/2 p-4 text-center px-12">
              <p className="text-4xl font-bold text-red100 pb-16">
                Property Management Auckland
              </p>
              <p className="text-2xl">
                Metro NZ is one of the top Auckland Property Management
                companies. All of our staff are property investors who have
                expert knowledge of the property market and your best interest
                in mind at all times. Check out our tailored services we offer
                as an Auckland property management company.
              </p>
              <div className="flex justify-center mt-32 gap-4 mb-4">
                <Link to="/my-tenancy-application">
                  <button className="bg-red100 text-white px-4 py-2.5 rounded hover:bg-red300 ">
                    Property Owners
                  </button>
                </Link>
                <Link to="/rental-property-search">
                  <button className="bg-red100 text-white px-4 py-2.5 rounded hover:bg-red300">
                    Rental Listings
                  </button>
                </Link>
                <Link to="/my-tenancy-application">
                  <button className="bg-red100 text-white px-4 py-2.5 rounded hover:bg-red300">
                    My Tenancy Application
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* flexbox */}
          <div className="mb-12 mt-16">
            <p className="text-center pb-12 font-bold text-3xl">
              Helping Clients To Achieve Harmony Through Our Expertise And
              Skills
            </p>

            <div className="w-full flex gap-4 pb-2 justify-center">
              <div className="relative w-1/5 rounded overflow-hidden">
                <img
                  src={BodyCorporateHomepage}
                  alt=""
                  className="w-full rounded transform transition-transform hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-50 text-black font-bold text-lg text-center hover:opacity-50 transition-opacity duration-300">
                  PROPERTY <br /> MANAGEMENT
                </div>
              </div>
              <div className="relative w-1/5 rounded">
                <img
                  src={BodyCorporateHomepage}
                  alt=""
                  className="w-full rounded"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-50 text-black font-bold text-lg text-center hover:opacity-50 transition-opacity duration-300">
                  BODY CORPORATE
                  <br /> ADMINISTRATION
                </div>
              </div>
              <div className="relative w-1/5 rounded">
                <img
                  src={BodyCorporateHomepage}
                  alt=""
                  className="w-full rounded"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-50 text-black font-bold text-lg text-center hover:opacity-50 transition-opacity duration-300">
                  BUILDING <br />
                  MANAGEMENT
                </div>
              </div>
              <div className="relative w-1/5 rounded">
                <img
                  src={BodyCorporateHomepage}
                  alt=""
                  className="w-full rounded"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-50 text-black font-bold text-lg text-center hover:opacity-50 transition-opacity duration-300">
                  DECLUTTERING
                  <br /> MANAGEMENT
                </div>
              </div>
            </div>
            <div className="w-full flex gap-4 pt-2 justify-center">
              <div className="relative w-1/5 rounded">
                <img
                  src={BodyCorporateHomepage}
                  alt=""
                  className="w-full rounded"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-50 text-black font-bold text-lg text-center hover:opacity-50 transition-opacity duration-300">
                  FREE PROPERTY
                  <br /> APPRAISALS
                </div>
              </div>
              <div className="relative w-1/5 rounded">
                <img
                  src={BodyCorporateHomepage}
                  alt=""
                  className="w-full rounded"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-50 text-black font-bold text-lg text-center hover:opacity-50 transition-opacity duration-300">
                  RENOVATION
                  <br /> PROPERTY
                  <br /> MANAGEMENT
                </div>
              </div>
              <div className="relative w-1/5 rounded">
                <img
                  src={BodyCorporateHomepage}
                  alt=""
                  className="w-full rounded"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-50 text-black font-bold text-lg text-center hover:opacity-50 transition-opacity duration-300">
                  INVESTMENT
                  <br /> PROPERTIES
                </div>
              </div>
              <div className="relative w-1/5 rounded">
                <img
                  src={BodyCorporateHomepage}
                  alt=""
                  className="w-full rounded"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-50 text-black font-bold text-lg text-center hover:opacity-50 transition-opacity duration-300">
                  RENTAL
                  <br /> PROPERTIES
                </div>
              </div>
            </div>
            <div className="flex justify-center py-12 gap-6 text-white">
              <button className="bg-red100 py-3 hover:bg-red300 px-12 rounded uppercase">
                Property Owners
              </button>
              <button className="bg-red100 py-3 hover:bg-red300 px-12 rounded uppercase">
                Rental Listings
              </button>
            </div>
          </div>

          <div>
            <p className="text-center text-3xl font-bold mt-8 mb-16">
              Working With Landlords, Tenants, Building Owners, and Property
              Investors
            </p>
          </div>

          {/* Carousel */}
          <CarouselHomePage />

          <div className="flex justify-center space-x-4 mt-16">
            <button className="bg-red100 text-white px-12 py-3 rounded hover:bg-red300">
              Call Today
            </button>
            <button className="bg-red100 text-white px-12 py-3 rounded hover:bg-red300">
              Email Us
            </button>
          </div>

          {/* Testimonial Page */}
          <section className="relative overflow-hidden px-6 py-24 sm:py-12 mt-12 lg:px-8 bg-gainsboro rounded-lg">
            <div>
              <p className="text-center text-3xl font-bold">Testimonials</p>
            </div>
            <div className="absolute inset-0 -z-10 bg-gradient-radial at-top bg-indigo-100 opacity-20" />
            <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left transform -skew-x-30 bg-white" />
            <div className="mx-auto max-w-2xl lg:max-w-4xl bg-white p-4 rounded-lg border-red100 border-3">
              <figure className="mt-10">
                <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
                  <p>
                    Everything was smooth and efficient, which I really
                    appreciate. I will be recommending them to others looking
                    for a home. My experience with NZ Metro Property was really
                    good from start to finish.
                  </p>
                </blockquote>
                <figcaption className="mt-10">
                  <img
                    className="mx-auto h-10 w-10 rounded-full"
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                  <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                    <div className="font-semibold text-gray-900">
                      Vanessa Jepson
                    </div>
                    <svg
                      viewBox="0 0 2 2"
                      width={3}
                      height={3}
                      aria-hidden="true"
                      className="fill-current text-gray-900"
                    >
                      <circle cx={1} cy={1} r={1} />
                    </svg>
                    <div className="text-gray-600">Posted on 23-08-2023</div>
                  </div>
                </figcaption>
              </figure>
            </div>
          </section>

          {/* Awards Section */}
          <div className="bg-white sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <p className="text-center text-3xl font-semibold leading-8 text-gray-900">
                Awards
              </p>
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
                <img src={WestpacAwards} alt="Tuple" width={1000} height={48} />
                <img
                  className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
                  src="https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-900.svg"
                  alt="SavvyCal"
                  width={158}
                  height={48}
                />
                <img src={ReaAwards} alt="Statamic" width={600} height={48} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
