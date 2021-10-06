import React from "react";
import MetaTags from "react-meta-tags";
import { Link } from "react-router-dom";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/components/navigation/navigation.min.css";

import aboutImg from "../assets/about-home.jpg";

// import Swiper core and required modules
import SwiperCore, { EffectCoverflow, Navigation } from "swiper/core";

// install Swiper modules
SwiperCore.use([EffectCoverflow, Navigation]);

function Home() {
  return (
    <>
      {/* Hero section with meta tags */}
      <MetaTags>
        <title>Peša Tours || Travel Dalmatia</title>
        <meta name="description" content="Some description." />
        <meta property="og:title" content="Peša Tours" />
        <meta property="og:image" content="path/to/image.jpg" />
      </MetaTags>
      <div className="main-wrapper flex bg-skin">
        <div className="pl-24 pt-12 flex flex-col justify-center w-1/2">
          <h1 className="text-ocean text-6xl font-bold lg:w-1/2 uppercase">
            Experience the best travel in Dalmatia
          </h1>
          <p className="text-ocean my-5">
            Lorem ipsum dolor sit amet amos eti ahid olor damus hix sirt
          </p>
          <div>
            <Link to="/destinations">
            <button className="bg-ocean text-white px-4 py-2 border border-ocean hover:text-ocean hover:bg-transparent transition duration-500">
              Check our destinations
            </button>
            </Link>
          </div>
        </div>
        <div className="flex flex-col justify-center overflow-x-hidden w-1/2 mx-auto">
          <div className="overflow-x-hidden">
            <Swiper
              navigation={true}
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={"auto"}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              className="destinationSlider overflow-x-hidden"
            >
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
      {/* About section */}
      <section className="flex mt-8 px-24 my-12">
        <img
          src={aboutImg}
          className="w-1/3 h-auto mx-auto flex self-center transform rotate-12 -mt-32 pr-12"
        />
        <div className="w-1/2 flex flex-col justify-center">
          <h2 className="uppercase text-ocean text-3xl font-light mb-4">
            As innovative and young group of people
          </h2>
          <h2 className="uppercase text-ocean text-4xl font-semibold mb-12">
            We are more than tours Destination planning company
          </h2>
          <p className="text-ocean mb-8">
            Anim aliqua amet ut cillum amet aliqua ea ut reprehenderit aliquip
            nostrud nulla. Adipisicing proident pariatur consectetur sint sunt
            irure duis qui sit minim. Pariatur laboris tempor quis ullamco ut
            pariatur veniam sunt pariatur.
          </p>
          <Link to="/about">
            <button className="bg-ocean text-white px-4 py-2 border border-ocean hover:text-ocean hover:bg-white transition duration-500">
              Find out more
            </button>
          </Link>
        </div>
      </section>
      {/* Testimonials */}
      <section className="flex flex-col my-8 px-24">
        <h2 className="mb-4 text-ocean font-semibold text-5xl mx-auto mt-24 uppercase">
          Some of experiences from our guests
        </h2>
        <Swiper
          slidesPerView={1}
          className="testimonialsSwiper overflow-x-hidden min-h-half"
        >
          <SwiperSlide>
            <div className="text-ocean w-full px-8">
              <p className="text-lg italic w-1/2 mx-auto mt-12">
                Anim aliqua amet ut cillum amet aliqua ea ut reprehenderit
                aliquip nostrud nulla. Adipisicing proident pariatur consectetur
                sint sunt irure duis qui sit minim. Pariatur laboris tempor quis
                ullamco ut pariatur veniam sunt pariatur.
              </p>
              <p className="flex justify-end">- John Doe</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="text-ocean w-full px-8">
              <p className="text-lg italic w-1/2 mx-auto mt-12">
                Anim aliqua amet ut cillum amet aliqua ea ut reprehenderit
                aliquip nostrud nulla. Adipisicing proident pariatur consectetur
                sint sunt irure duis qui sit minim. Pariatur laboris tempor quis
                ullamco ut pariatur veniam sunt pariatur.
              </p>
              <p className="flex justify-end">- John Doe</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="text-ocean w-full px-8">
              <p className="text-lg italic w-1/2 mx-auto mt-12">
                Anim aliqua amet ut cillum amet aliqua ea ut reprehenderit
                aliquip nostrud nulla. Adipisicing proident pariatur consectetur
                sint sunt irure duis qui sit minim. Pariatur laboris tempor quis
                ullamco ut pariatur veniam sunt pariatur.
              </p>
              <p className="flex justify-end">- John Doe</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
}

export default Home;
