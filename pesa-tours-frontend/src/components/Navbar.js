import React,{useState} from "react";
import { Link } from "react-router-dom";
import "../styles.css";
function Navbar() {
  const [Val, setVal] = useState('about')
  function d(b){
    switch (b) {
    case 'About':
      window.location.href=`/about-trip`
      break;
      case 'About Construction':
       window.location.href=`/about-construction`
       break;
       case 'About Destination':
       window.location.href=`/about-destination`
       break;
             default: console.log('aaaaaaa')
      break;}
  }
  return (
    <nav className="flex justify-between py-4 px-24 bg-white bg-opacity-60 absolute top-0 left-0 right-0 items-center z-40">
      <h2>Peša tours</h2>
      <ul className="flex space-x-8 text-ocean text-bold items-center">
        <li>
          <Link to="/"><p class="link">Home</p></Link>
        </li>
        <li>
          <Link to="/destinations"><p class="link">Destinations</p></Link>
        </li>
        <li>
          <Link to="/construction-list"><p class="link">Constructions</p></Link>
        </li>
        <li class="link">
          <select value={Val}
          className="bg-transparent focus:no-underline" 
          defaultValue={'about'}
         onChange={(e)=>{setVal(e.target.value);
          let b=e.target.value
          console.log(b)
     d(b)
         }}>
           <option value="about">about</option>
            <option value="About">
            
              About Trip
            </option>
            <option value="About Construction">
             About Construction
            </option>
            <option value="About Destination">
              About Destination
            </option>
          </select>
        </li>
        <li>
          <Link to="/contact"><p class="link">Contact</p></Link>
        </li>
      </ul>
      <Link to="/contact">
        <button className="bg-transparent text-ocean px-4 py-2 border border-ocean hover:border-transparent hover:bg-skin font-bold transition duration-500 uppercase z-10">
          Get in touch
        </button>
      </Link>
    </nav>
  );
}

export default Navbar;
