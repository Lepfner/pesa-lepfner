 
import React from "react";
import Select from 'react-select';
import MetaTags from "react-meta-tags";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faInfo, faAddressBook, faClock } from '@fortawesome/free-solid-svg-icons';

function Contact() {

  const options = [
    { value: 'brac', label: 'Obilazak otoka Brača' },
    { value: 'spilja', label: 'Modra Špilja' },
    { value: 'boat', label: 'Cjelodnevni najam broda' },
    { value: 'hvar', label: 'Hvar & Pakleni otoci' },
    { value: 'solta', label: 'Kupanje na Šolti i Plava laguna' }
  ]

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
      <section className="flex mt-8 px-24 my-16">
        <div className="w-1/2 flex flex-col justify-center">
          <form>
          <label className="block text-gray-700 text-sm font-bold mb-2 ml-3" for="fullname">
            Fullname
          </label>
          <input className="shadow appearance-none border rounded w-2/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Enter fullname"/>
          <label className="block text-gray-700 text-sm font-bold mb-2 ml-3 mt-5" for="e-mail">
            E-mail
          </label>
          <input className="shadow appearance-none border rounded w-2/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="email" placeholder="E-mail"/>
          <label className="block text-gray-700 text-sm font-bold mb-2 ml-3 mt-5" for="phone">
          Phone number
          </label>
          <input className="shadow appearance-none border rounded w-2/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Phone number"/>
          <label className="block text-gray-700 text-sm font-bold mb-2 ml-3 mt-5" for="destination">
            Destination
          </label>
          <Select defaultValue={{label: `${localStorage.getItem('current')}`, value: 0}} options={options} isSearchable={true} isClearable={true} className="appearance-none shadow rounded w-2/3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" placeholder="Destination"/>
          <label className="block text-gray-700 text-sm font-bold mb-2 ml-3 mt-5" for="message">
            Message
          </label>
          <textarea className="resize-none shadow h-1/5 appearance-none border rounded w-2/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="textarea" placeholder="Message"/>
          <br/>
          <button type="submit" className="bg-ocean text-white w-2/3 px-4 py-2 mt-5 border border-ocean hover:text-ocean hover:bg-transparent transition duration-500">
              Send
            </button>
          </form>
        </div>
        <div className="w-1/2 flex flex-col justify-start">
        <div className="inline-block">
        <FontAwesomeIcon icon={faPhone} className="h-4"/>
        <a href="tel:+385911378939" className="text-ocean mb-8 ml-4 inline text-xl">
          Phone: Luka Bakija +385 91 137 8939
        </a>
        </div><br/>
        <div className="inline-block">
        <FontAwesomeIcon icon={faInfo} className="h-4 ml-1"/>
        <a href={"mailto: pesatours@gmail.com"} className="text-ocean mb-8 inline ml-5 text-xl">
          Email: pesatours@gmail.com
        </a>
        </div><br/>
        <div className="inline-block">
        <FontAwesomeIcon icon={faAddressBook} className="h-4"/>
        <p className="text-ocean mb-8 ml-4 inline text-xl">
          Adress: Stjepana Radića 10 , Supetar, Brač, Croatia
        </p>
        </div><br/>
        <div className="inline-block">
        <FontAwesomeIcon icon={faClock} className="h-4"/>
        <p className="text-ocean mb-8 ml-3 inline text-xl">
          Working hours: Monday - Sunday, 24/7
        </p>
        </div><br/>
        </div>
      </section>
    </>
  );
}

export default Contact;
