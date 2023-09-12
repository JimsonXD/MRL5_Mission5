import React from "react";
import Navbar from "../../commonComponents/Navbar";
import Footer from "../../commonComponents/Footer";
import HomePagePicture from '../../assets/HomePage.png'


const Home = () => {
  
  const products = [
    {
      id: 1,
      imageSrc: HomePagePicture,
      imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
  ]
  
  
  
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
        <div className="bg-white">
          <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <h2 className="sr-only">Products</h2>

            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
              {products.map((product) => (
                <a key={product.id} href='' className="group">
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                    <img
                      src={product.imageSrc}
                      alt={product.imageAlt}
                      className="h-full w-full object-cover object-center group-hover:opacity-75"
                    />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* flexbox */}
        
    
      </div>
      <Footer />
    </div>
  );
};

export default Home;
