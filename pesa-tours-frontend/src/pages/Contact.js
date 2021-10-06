import React from "react";

import MetaTags from "react-meta-tags";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <>
      {/* Hero section with meta tags */}
      <MetaTags>
        <title>Peša Tours || Contact</title>
        <meta name="description" content="Some description." />
        <meta property="og:title" content="Peša Tours" />
        <meta property="og:image" content="path/to/image.jpg" />
      </MetaTags>
      <div className="flex flex-col justify-end w-full min-h-half px-4 md:px-24 py-4 bg-skin">
        <h1 className="text-ocean text-5xl uppercase font-bold">Contact us</h1>
      </div>
    </>
  );
}

export default Contact;
