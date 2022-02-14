import React from "react";
import MetaTags from "react-meta-tags";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faInfo, faAddressBook, faClock } from '@fortawesome/free-solid-svg-icons';

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
      <div class="flex flex-col justify-end w-full min-h-half px-4 md:px-24 py-4 bg-lightblue">
        <h1 class="text-ocean text-5xl uppercase font-bold ml-20 xl:ml-0">Contact us</h1>
      </div>
      <section class="flex flex-col xl:flex-row mt-8 px-24 my-16 mb-64 xl:mb-48">
        <div class="w-full xl:w-1/2 flex flex-col justify-center">
          <form>
            <label class="block text-gray-700 text-2xl xl:text-sm font-bold mb-2 ml-3" for="fullname">Fullname</label>
            <input class="shadow appearance-none border text-xl xl:text-sm rounded h-16 xl:h-10 w-full xl:w-2/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Enter fullname" />
            <label class="block text-gray-700 text-2xl xl:text-sm font-bold mb-2 ml-3 mt-5" for="e-mail">E-mail</label>
            <input class="shadow appearance-none border text-xl xl:text-sm rounded h-16 xl:h-10 w-full xl:w-2/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="email" placeholder="E-mail" />
            <label class="block text-gray-700 text-2xl xl:text-sm font-bold mb-2 ml-3 mt-5" for="phone">Phone number</label>
            <input class="shadow appearance-none border text-xl xl:text-sm rounded h-16 xl:h-10 w-full xl:w-2/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Phone number" />
            <label class="block text-gray-700 text-2xl xl:text-sm font-bold mb-2 ml-3 mt-5" for="message">Message</label>
            <textarea class="resize-none shadow h-1/5 text-xl xl:text-sm appearance-none border rounded w-full xl:w-2/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="textarea" placeholder="Message"></textarea>
            <br />
            <button type="submit" class="bg-ocean text-white w-full xl:w-2/3 h-20 xl:h-12 px-4 py-2 mt-5 text-3xl xl:text-sm border border-ocean hover:text-ocean hover:bg-transparent transition duration-500">Send</button>
          </form>
        </div>
        <div class="w-full xl:w-1/2 mt-20 xl:mt-0 flex flex-col justify-center xl:justify-start">
          <div class="inline-block">
          <FontAwesomeIcon icon={faPhone} className="h-4"/>
          <a href="tel:+385911378939" class="text-ocean mb-8 ml-4 inline text-3xl xl:text-lg">Phone: Luka Bakija +385 91 137 8939</a>
          </div>
          <br />
          <div class="inline-block">
            <FontAwesomeIcon icon={faPhone} className="h-4"/>
            <a href="tel:+385911378939" class="text-ocean mb-8 inline text-3xl xl:text-lg">WhatsApp: Luka Bakija +385 91 137 8939</a></div>
          <br />
          <div class="inline-block">
            <FontAwesomeIcon icon={faInfo} className="h-4"/>
            <a href="mailto: pesatours@gmail.com" class="text-ocean mb-8 inline ml-5 text-3xl xl:text-lg">Email: pesatours@gmail.com</a>
          </div>
          <br />
          <div class="inline-block">
            <FontAwesomeIcon icon={faAddressBook} className="h-4"/>
            <p class="text-ocean mb-8 ml-4 inline text-3xl xl:text-lg">Adress: Stjepana Radića 10 , Supetar, Brač, Croatia</p>
          </div>
          <br />
          <div class="inline-block">
            <FontAwesomeIcon icon={faClock} className="h-4"/>
            <p class="text-ocean mb-8 ml-3 inline text-3xl xl:text-lg">Working hours: Monday - Sunday, 24/7</p>
          </div>
          <br />
        </div>
      </section>
    </>
  );
}

export default Contact;
