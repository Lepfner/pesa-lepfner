import React from "react";
import MetaTags from "react-meta-tags";
// Import Swiper React components
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper';
import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/components/navigation/navigation.min.css";
import bus from "../assets/busevi/AM_00777 copy.jpg";

import aboutImg from "../assets/about-home.jpg";

// import Swiper core and required modules
import SwiperCore, { EffectCoverflow, Navigation } from "swiper/core";

// install Swiper modules
SwiperCore.use([EffectCoverflow, Navigation]);
SwiperCore.use([Autoplay]);

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
      <div className="main-wrapper flex bg-lightblue">
      

        <div className="overflow-x-hidden">
          <Swiper
            autoplay={{ delay: 5000 }}
            navigation={true}
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={1}
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
            <div className="main-wrapper flex bg-lightblue w-full">
        <div className="pl-24 pt-12 flex flex-col justify-center w-1/2">
              <h1 className="text-ocean text-6xl font-bold lg:w-1/2 uppercase">
                Experience the best travel in Dalmatia
              </h1>
              <p className="text-ocean my-5">
                Lorem ipsum dolor sit amet amos eti ahid olor damus hix sirt
              </p>
              <div>
                <Link to="/about">
                  <button className="bg-ocean text-white px-4 py-2 border border-ocean hover:text-ocean hover:bg-transparent transition duration-500">
                    Check our destinations
                  </button>
                </Link>
              </div>
              </div>
              <div className="flex flex-col justify-center overflow-x-hidden w-1/2 mx-auto">
                <img
                  src="https://swiperjs.com/demos/images/nature-1.jpg"
                  alt=""
                />
              </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="main-wrapper flex bg-lightblue w-screen h-full">
        <div className="pl-24 pt-12 flex flex-col justify-center w-1/2">
              <h1 className="text-ocean text-6xl font-bold lg:w-1/2 uppercase">
                Experience the best travel in Dalmatia
              </h1>
              <p className="text-ocean my-5">
                Lorem ipsum dolor sit amet amos eti ahid olor damus hix sirt
              </p>
              <div>
                <Link to="/about">
                  <button className="bg-ocean text-white px-4 py-2 border border-ocean hover:text-ocean hover:bg-transparent transition duration-500">
                    Check our destinations
                  </button>
                </Link>
              </div>
              </div>
              <div className="flex flex-col justify-center overflow-x-hidden w-1/2 mx-auto">
                <img
                  className="w-full h-full"
                  src="https://happytovisit.com/glib/1/Rent-Leut-Boat-Private-Daily-Rent-from-Split-and-Trogir-for-up-to-12-People-1-29462.png"
                  alt=""
                />
              </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="main-wrapper flex bg-lightblue ">
        <div className="pl-24 pt-12 flex flex-col justify-center w-1/2">
              <h1 className="text-ocean text-6xl font-bold lg:w-1/2 uppercase">
                Experience the best travel in Dalmatia
              </h1>
              <p className="text-ocean my-5">
                Lorem ipsum dolor sit amet amos eti ahid olor damus hix sirt
              </p>
              <div>
                <Link to="/about">
                  <button className="bg-ocean text-white px-4 py-2 border border-ocean hover:text-ocean hover:bg-transparent transition duration-500">
                    Check our destinations
                  </button>
                </Link>
              </div>
              </div>
              <div className="flex flex-col justify-center overflow-x-hidden w-1/2 mx-auto">
                <img src={bus} alt="" />
              </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      {/* About section */}
      <section className="flex mt-8 px-24 my-12">
        <img
          src={aboutImg}
          className="w-1/3 h-auto mx-auto flex self-center transform rotate-12 -mt-96 pr-12"
          alt=""
        />
        <div className="w-1/2 flex flex-col justify-center">
          <section className="flex flex-col my-8 px-24">
            <h2 className="mb-4 text-ocean font-semibold text-5xl mx-auto muppercase">
              Some of experiences from our guests
            </h2>
            <Swiper
              slidesPerView={1}
              autoplay={{ delay: 5000 }}
              className="testimonialsSwiper overflow-x-hidden min-h-half"
            >
              <SwiperSlide>
                <div className="text-ocean w-full px-8">
                  <p className="text-lg italic w-1/2 mx-auto mt-12">
                    Anim aliqua amet ut cillum amet aliqua ea ut reprehenderit
                    aliquip nostrud nulla. Adipisicing proident pariatur
                    consectetur sint sunt irure duis qui sit minim. Parit
                    pariatur.
                  </p>
                  <p className="flex justify-end">- John Doe</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="text-ocean w-full px-8">
                  <p className="text-lg italic w-1/2 mx-auto mt-12">
                    Anim aliqua amet ut cillum amet aliqua ea ut reprehenderit
                    aliquip nostrud nulla. Adiptur laboris tempor quis ullamco
                    ut pariatur veniam sunt pariatur.
                  </p>
                  <p className="flex justify-end">- John Doe</p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="text-ocean w-full px-8">
                  <p className="text-lg italic w-1/2 mx-auto mt-12">
                    Anim aliqua amet ut cillum amet aliqua ea ut reprehenderit
                    aliquip nostrud nulla. Adipisicing proident pariatur
                    consectetur sint sunt irure duis qui sit minim. Pariatur
                    laboris tempor quis ullamco ut pariatur veniam sunt
                    pariatur.
                  </p>
                  <p className="flex justify-end">- John Doe</p>
                </div>
              </SwiperSlide>
            </Swiper>
          </section>
        </div>
      </section>
      {/* Testimonials */}
    </>
  );
}

export default Home;
