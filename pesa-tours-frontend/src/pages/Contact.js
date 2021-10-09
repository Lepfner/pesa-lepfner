import React from "react";
import Select from 'react-select';
import MetaTags from "react-meta-tags";

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
      <section className="flex mt-8 px-24 my-12">
        <div className="w-1/2 flex flex-col justify-center">
          <form>
          <label className="block text-gray-700 text-sm font-bold mb-2 ml-3" for="fullname">
            Name & lastname
          </label>
          <input className="shadow appearance-none border rounded w-2/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Name & lastname"/>
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
          <Select options={options} isSearchable={true} isClearable={true} className="appearance-none shadow rounded w-2/3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" placeholder="Destination"/>
          <label className="block text-gray-700 text-sm font-bold mb-2 ml-3 mt-5" for="message">
            Message
          </label>
          <textarea className="resize-none shadow appearance-none border rounded w-2/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="textarea" placeholder="Message"/>
          <br/>
          <button type="submit" className="bg-ocean text-white w-2/3 px-4 py-2 mt-5 border border-ocean hover:text-ocean hover:bg-transparent transition duration-500">
              Send
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Contact;
