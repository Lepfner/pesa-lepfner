//React components
import React, { useEffect } from "react";
import MetaTags from "react-meta-tags";

function Partners() {

  useEffect(() => {
    document.getElementById("footer").style.backgroundColor = "#ddebe9";
  });

  return (
    <>
      {/* Hero section with meta tags */}
      <MetaTags>
        <title>Peša Tours || Contact</title>
        <meta name="description" content="Some description." />
        <meta property="og:title" content="Peša Tours" />
        <meta property="og:image" content="path/to/image.jpg" />
      </MetaTags>
      <div className="flex flex-col justify-end w-full min-h-half px-4 md:px-24 py-4 bg-lightblue">
        <h1 className="text-ocean text-5xl uppercase font-bold ml-20 xl:ml-0">NAŠI PARTNERI</h1>
      </div>
      <section className="flex flex-col xl:flex-row mt-8 px-24 my-16 mb-64 xl:mb-48">
        {/* Work in progress */}
      </section>
    </>
  )
}

export default Partners