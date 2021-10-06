import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      {/* Map */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d92768.38644546816!2d16.605398!3d43.397677!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x134a9d978135cf1f%3A0x7187868186fb2805!2sSupetar%2C%20Hrvatska!5e0!3m2!1shr!2sus!4v1629740861752!5m2!1shr!2sus"
        width={"100%"}
        height={"800"}
      ></iframe>
      <div className="bg-lightblue text-ocean px-24 py-12">
        <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3">
          <ul className="flex flex-col space-y-8">
            <li>
              <Link to="/about">
                <p>About Us</p>
              </Link>
            </li>
            <li>
              <Link to="/destinations">
                <p>Destinations</p>
              </Link>
            </li>
            <li>
              <Link to="/contact">
                <p>Contact</p>
              </Link>
            </li>
          </ul>
          <ul className="flex flex-col space-y-8">
            <li><a target="_blank" href="https://www.facebook.com/Pe%C5%A1a-Tours-108995224601795">Facebook</a></li>
            <li><a target="_blank" href="https://www.instagram.com/pesatours/">Instagram</a></li>
          </ul>
        </div>
        <span className="h-px bg-ocean w-full block my-8"></span>
        <div className="flex justify-center text-ocean ">Peša Tours - Design and Development by <a href="https://epic-code.hr" target="_blank" className="font-bold"> &nbsp;Epic Code</a></div>
      </div>
    </>
  );
}

export default Footer;
