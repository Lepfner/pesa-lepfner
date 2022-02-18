//React components
import MetaTags from "react-meta-tags";
import React, { useEffect } from "react";
//Pictures
import aboutImg from "../assets/other/about-home.jpg";

function About() {

  useEffect(() => {
    document.getElementById("footer").style.backgroundColor = "#ddebe9";
  });

  return (
    <>
      {/* Hero section with meta tags */}
      <MetaTags>
        <title>Peša Tours || About us</title>
        <meta name="description" content="Some description." />
        <meta property="og:title" content="Peša Tours" />
        <meta property="og:image" content="path/to/image.jpg" />
      </MetaTags>
      <div className="flex flex-col justify-end w-full min-h-half px-4 md:px-24 py-4 bg-lightblue">
        <h1 className="text-ocean text-5xl uppercase font-bold ml-20 xl:ml-0">
          O nama
        </h1>
      </div>
      <section className="flex flex-col xl:flex-row mt-8 px-24 my-12">
        <img
          src={aboutImg}
          alt=""
          className="w-full xl:w-1/2 xl:pr-24 h-auto mx-auto flex self-center"
        />
        <div className="w-full mt-10 xl:mt-0 xl:w-1/2 flex flex-col justify-center">
          <h2 className="uppercase text-ocean text-3xl font-light mb-4">
            Kao mlada i inovativna grupa ljudi
          </h2>
          <h2 className="uppercase text-ocean text-4xl font-semibold mb-12">
            Mi smo više od obične putne agencije
          </h2>
          <p className="text-ocean text-3xl xl:text-xl mb-8">
            Pešatours j.d.o.o. osnovana je 2008. godine u Supetru, gdje i ima
            sjedište. Vlasnik, ujedno i direktor tvrtke, je Tino Peša, rođen 24.
            listopada 1984. godine, koji se ovim poslom bavi od 2005.<br /> godine.
            Osnovna djelatnost tvrtke je prijevoz putnika, kako na moru tako i
            na kopnu, građevinski radovi ( niskogradnja,visokogradnja ) i iskopi
            svih vrsta. Tvrtka ima 12 stalno zaposlenih, dok ta brojka doseže 20
            zaposlenih u sezoni. Tvrtka Pešatours posjeduje visokokvalitetni
            brod „Dubai Limited“, 4 autobusa s 49 sjedala, 1 mini bus od 19
            sjedela te jedan master od 15 sjedala i 3 kombija s 8 sjedala. Više
            o svim našim vozilima i uslugama pogledajte na našoj stranici i
            društvenim mrežama.<br /> U iščekivanju vašeg dolaska.
          </p>
        </div>
      </section>
    </>
  );
}

export default About;
