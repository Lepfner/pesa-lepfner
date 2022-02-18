//React
import React from "react";
//Media logos
import face from "../assets/media/face.png";
import insta from "../assets/media/insta.png";
import jadrolinija from "../assets/media/j.png";
import areo from "../assets/media/aero.png";
import aerosplit from "../assets/media/aerosplit.jpeg";

function Footer() {

  return (
    <>
      <iframe
        title="frame"
        width="100%"
        height="400"
        frameborder="0"
        scrolling="no"
        marginheight="0"
        marginwidth="0"
        src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Supetar+(Hrvatska)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/sport-gps/">
        </a>
      </iframe>
      <div id="footer" className="bg-lightblue text-ocean px-24 py-12">
        <div className="xl:flex xl:flex-row xl:justify-evenly">
          <ul className="flex justify-evenly space-x-8">
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.facebook.com/Pe%C5%A1a-Tours-108995224601795/?ref=pages_you_manage"
              >
                <img
                  className="h-14 sm:h-12 mt-5 sm:mt-2 xl:mt-2"
                  src={face}
                  alt=""
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/pesatours/ "
                target="_blank"
                rel="noreferrer"
              >
                <img className="h-24 sm:h-16" src={insta} alt="" />
              </a>
            </li>
          </ul>
          <ul>
            <li>
              <p className="text-2xl text-justify sm:text-center mt-10 sm:mt-5 md:text-sm sm:text-md">
                Posjetite nas na društvene mreže i otkrijte još zanimljivosti,
                također nudimo vam link do Jadrolinija stranice za pomorski
                prijevoz putnika i vozila do kopna i također vam dajemo link od{" "}
                <a
                  className=""
                  href="http://www.split-airport.hr/index.php?lang=en"
                  target="_blank"
                  rel="noreferrer"
                >
                  <b>aerodroma Split</b>{" "}
                </a>
                i {' '}
                <a
                  href="https://www.airport-brac.hr/en/home/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <b>aerodroma Brač</b>
                </a>
              </p>
            </li>
          </ul>
          <ul className="flex mt-16 sm:mt-0 justify-evenly xl:justify-end space-x-8">
            <a
              href="https://www.jadrolinija.hr/"
              target="_blank"
              rel="noreferrer"
            >
              <img className="h-20 mt-2" src={jadrolinija} alt="" />
            </a>
            <a
              href="http://www.split-airport.hr/index.php?lang=en"
              target="_blank"
              rel="noreferrer"
            >
              <img className="h-20 mt-2" src={aerosplit} alt="" />
            </a>
            <a
              href="https://www.airport-brac.hr/en/home/"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <img className="h-40" src={areo} alt="" />
            </a>
          </ul>
        </div>
        <span className="h-px bg-ocean w-full block my-8"></span>
        <div className="flex justify-center text-ocean text-2xl md:text-sm sm:text-sm"></div>
      </div>
    </>
  );
}

export default Footer;
