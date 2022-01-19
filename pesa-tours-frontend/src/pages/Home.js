import React from "react";
import MetaTags from "react-meta-tags";
// Import Swiper React components
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper';
import "swiper/swiper.min.css";
import slider1 from "../assets/busevi/AM_00777 copy.jpg"
import vidslider2 from "../assets/AM_00851 copy.jpg"
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/components/navigation/navigation.min.css";

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
      

        <div className="overflow-x-hidden mt-24 sm:mt-0">
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
            className="destinationSlider xl:mt-24 overflow-x-hidden z-30"
          >
            <SwiperSlide>
            <div className="main-wrapper flex flex-col xl:flex-row bg-lightblue w-full z-50">
                <div className="px-20 xl:px-0 xl:pl-24 pt-12 flex flex-col justify-center w-full xl:w-1/2">
                  <h1 className="text-ocean text-6xl font-bold lg:w-1/2 uppercase">
                    Experience the best travel in Dalmatia
                  </h1>
                  <p className="text-ocean text-4xl xl:text-md my-5">
                    Lorem ipsum dolor sit amet amos eti ahid olor damus hix sirt
                  </p>
                  <div>
                    <Link to="/about">
                      <button className="bg-ocean mb-10 xl:mb-0 text-white text-2xl xl:text-md px-4 py-2 border border-ocean hover:text-ocean hover:bg-transparent transition duration-500">
                        Check our destinations
                      </button>
                    </Link>
                  </div>
                </div>
              <div className="flex flex-col justify-center overflow-x-hidden w-5/6 xl:w-1/2 mx-auto">
                <img
                  src={slider1}
                  alt=""
                />
              </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="main-wrapper flex flex-col xl:flex-row bg-lightblue w-full z-50">
                <div className="px-20 xl:px-0 xl:pl-24 pt-12 flex flex-col justify-center w-full xl:w-1/2">
                  <h1 className="text-ocean text-6xl font-bold lg:w-1/2 uppercase">
                    Experience the best travel in Dalmatia
                  </h1>
                  <p className="text-ocean text-4xl xl:text-md my-5">
                    Lorem ipsum dolor sit amet amos eti ahid olor damus hix sirt
                  </p>
                  <div>
                    <Link to="/about">
                      <button className="bg-ocean mb-10 xl:mb-0 text-white text-2xl xl:text-md px-4 py-2 border border-ocean hover:text-ocean hover:bg-transparent transition duration-500">
                        Check our destinations
                      </button>
                    </Link>
                  </div>
                </div>
              <div className="flex flex-col justify-center overflow-x-hidden w-5/6 xl:w-1/2 mx-auto">
                <img
                  src={vidslider2}
                  alt=""
                />
              </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="main-wrapper flex flex-col xl:flex-row bg-lightblue w-full z-50">
                <div className="px-20 xl:px-0 xl:pl-24 pt-12 flex flex-col justify-center w-full xl:w-1/2">
                  <h1 className="text-ocean text-6xl font-bold lg:w-1/2 uppercase">
                    Experience the best travel in Dalmatia
                  </h1>
                  <p className="text-ocean text-4xl xl:text-md my-5">
                    Lorem ipsum dolor sit amet amos eti ahid olor damus hix sirt
                  </p>
                  <div>
                    <Link to="/about">
                      <button className="bg-ocean mb-10 xl:mb-0 text-white text-2xl xl:text-md px-4 py-2 border border-ocean hover:text-ocean hover:bg-transparent transition duration-500">
                        Check our destinations
                      </button>
                    </Link>
                  </div>
                </div>
              <div className="flex flex-col justify-center overflow-x-hidden w-5/6 xl:w-1/2 mx-auto">
                <img
                  src={slider1}
                  alt=""
                />
              </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      {/* About section */}
      <section className="grid-cols-1 mt-96 sm:mt-0 sm:flex mt-8 px-24 my-12">
        <img
          src={aboutImg}
          className="w-4/5 sm:w-1/3 sm:h-auto mx-auto flex self-center transform rotate-12 -mt-48 sm:-mt-0 z-0 pr-12"
          alt=""
        />
        <div className="w-full mt-10 sm:mt-0 sm:w-1/2 flex flex-row sm:flex-col justify-center">
          <section className="flex flex-col my-8 px-24">
            <h2 className="mb-4 text-ocean font-semibold text-5xl mx-auto uppercase">
              Some experiences from our guests
            </h2>
            <Swiper
              slidesPerView={1}
              autoplay={{ delay: 5000 }}
              navigation={true}
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
