import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import HomePageCarousel from '../../assets/HomePageCarousel.png'
function CarouselHomePage() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100 h-25"
          src={HomePageCarousel}
          alt="First slide"
        />
        <Carousel.Caption>
       
          <h3>Changing to Metro NZ Property Management is easy. We collect the required information from you and in return, you’ll see the benefits of working with a people-focused company. We have an enviable reputation for working with landlords, renters, building owners and property investors and property managers.</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={HomePageCarousel}
          alt="Second slide"
        />
        <Carousel.Caption>
 
          <h3>Changing to Metro NZ Property Management is easy. We collect the required information from you and in return, you’ll see the benefits of working with a people-focused company. We have an enviable reputation for working with landlords, renters, building owners and property investors and property managers.</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={HomePageCarousel}
          alt="Third slide"
        />
        <Carousel.Caption>
      
          <h3>Changing to Metro NZ Property Management is easy. We collect the required information from you and in return, you’ll see the benefits of working with a people-focused company. We have an enviable reputation for working with landlords, renters, building owners and property investors and property managers.</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselHomePage;