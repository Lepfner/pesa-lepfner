import React from "react";
import MetaTags from "react-meta-tags";
import aboutImg from "../assets/about-home.jpg";

function About() {
  return (
    <>
      {/* Hero section with meta tags */}
      <MetaTags>
        <title>Peša Tours || About us</title>
        <meta name="description" content="Some description." />
        <meta property="og:title" content="Peša Tours" />
        <meta property="og:image" content="path/to/image.jpg" />
      </MetaTags>
      <div className="flex flex-col justify-end w-full min-h-half px-4 md:px-24 py-4 bg-skin">
        <h1 className="text-ocean text-5xl uppercase font-bold">About us</h1>
      </div>
      <section className="flex mt-8 px-24 my-12">
        <img
          src={aboutImg}
          alt=""
          className="w-1/2 pr-24 h-auto mx-auto flex self-center"
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
            pariatur veniam sunt pariatur. Anim aliqua amet ut cillum amet
            aliqua ea ut reprehenderit aliquip nostrud nulla. Adipisicing
            proident pariatur consectetur sint sunt irure duis qui sit minim.
            Pariatur laboris tempor quis ullamco ut pariatur veniam sunt
            pariatur. Anim aliqua amet ut cillum amet aliqua ea ut reprehenderit
            aliquip nostrud nulla. Adipisicing proident pariatur consectetur
            sint sunt irure duis qui sit minim. Pariatur laboris tempor quis
            ullamco ut pariatur veniam sunt pariatur. Anim aliqua amet ut cillum
            amet aliqua ea ut reprehenderit aliquip nostrud nulla. Adipisicing
            proident pariatur consectetur sint sunt irure duis qui sit minim.
            Pariatur laboris tempor quis ullamco ut pariatur veniam sunt
            pariatur.
          </p>
        </div>
      </section>
    </>
  );
}

export default About;
