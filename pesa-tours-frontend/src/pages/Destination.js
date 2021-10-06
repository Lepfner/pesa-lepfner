import React from "react";

import MetaTags from "react-meta-tags";
import { Link } from "react-router-dom";

import Footer from "../components/Footer";


function Destination() {
  return (
    <>
      {/* Hero section with meta tags */}
      <MetaTags>
        <title>Peša Tours || Destination</title>
        <meta name="description" content="Some description." />
        <meta property="og:title" content="Peša Tours" />
        <meta property="og:image" content="path/to/image.jpg" />
      </MetaTags>
      <div>Destination works</div>
      <Footer />
    </>
  );
}

export default Destination;
