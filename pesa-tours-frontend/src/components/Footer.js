import React from "react";
import face from "../assets/face.png";
import insta from "../assets/insta.png";
import jadrolinija from "../assets/j.png";
import areo from "../assets/aero.png";
import aerosplit from "../assets/aerosplit.jpeg";
function Footer() {
  return (
    <>
      {/* Map */}
      <iframe
        title="frame"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d92768.38644546816!2d16.605398!3d43.397677!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x134a9d978135cf1f%3A0x7187868186fb2805!2sSupetar%2C%20Hrvatska!5e0!3m2!1shr!2sus!4v1629740861752!5m2!1shr!2sus"
        width={"100%"}
        height={"400"}
      ></iframe>
      <div className="bg-lightblue text-ocean px-24 py-12">
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
