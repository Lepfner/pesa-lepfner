//React components
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';
//Data
import Sea from '../Data/sea.json';
import Transfer from '../Data/transfer.json'
import Table from '../Data/CjelodnevniTable';
//Images
import bus1 from "../assets/busevi/AM_00777 copy.jpg";
import bus2 from "../assets/busevi/AM_00826 copy.jpg";
import bus3 from "../assets/busevi/AM_00858 copy.jpg";
import bus4 from "../assets/busevi/AM_00782 copy.jpg";
import bus5 from "../assets/busevi/AM_00786 copy.jpg";
import bus6 from "../assets/busevi/AM_00797 copy.jpg";
import bus7 from "../assets/busevi/AM_00800 copy.jpg";
import bus8 from "../assets/busevi/AM_00803 copy.jpg";
import bus9 from "../assets/busevi/AM_00819 copy.jpg";
import brac1 from '../assets/sea/brac1.jpg';
import brac2 from '../assets/sea/brac2.jpg';
import brac3 from '../assets/sea/brac3.jpg';
import ms1 from '../assets/sea/ms1.jpg';
import ms2 from '../assets/sea/ms2.jpeg';
import ms3 from '../assets/sea/ms3.jpeg';
import boat1 from '../assets/brodovi/20200810_113107.JPG';
import boat2 from '../assets/brodovi/20200810_104859.JPG';
import boat3 from '../assets/brodovi/20200724_130659.JPG';
import hvar1 from '../assets/sea/hvar1.jpg';
import hvar2 from '../assets/sea/hvar2.jpg';
import hvar3 from '../assets/sea/hvar3.jpg';
import solta1 from '../assets/sea/solta1.jpg';
import solta2 from '../assets/sea/solta2.jpg';
import solta3 from '../assets/sea/solta3.jpg';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/components/navigation/navigation.min.css";

function Destinations() {

    useEffect(() => {
        document.getElementById("footer").style.backgroundColor = "#ddebe9";
    });

    var busevi = [];
    var brodovi = [];

    const seaPath = ["brac", "spilja", "boat", "hvar", "solta"];
    const transPath = ["transfer", "rent", "excursion"];

    const location = useLocation();
    const path = location.pathname.slice(15);
    var Data;
    var sendTable;

    const tableData = [
        <table>
            <tr>
                <th colSpan={2}>RELACIJE</th>
                <th>LUXURY VAN (8 PAX)</th>
                <th>STANDARD VAN (8 PAX)</th>
                <th>MASTER (14 PAX)</th>
                <th>SPRINTER (19 PAX)</th>
                <th>BUS (30 PAX)</th>
                <th>BUS (49 PAX)</th>
            </tr>
            <tr>
                <th colSpan={2}>OD-DO</th>
                <th colSpan={6}>ULAZNE CIJENE</th>
            </tr>
            <tr className='text-center'>
                <td colSpan={2}>BRAČ - CJELODNEVNI IZLET (do 10h) 250km</td>
                <td> 1.500,00 kn </td>
                <td> 1.200,00 kn </td>
                <td> 1.400,00 kn </td>
                <td> 1.700,00 kn </td>
                <td> 2.200,00 kn </td>
                <td> 2.600,00 kn </td>
            </tr>
            <tr className='text-center'>
                <td colSpan={2}>BRAČ - CJELODNEVNI IZLET (do 4h) 125km</td>
                <td> 1.100,00 kn </td>
                <td> 900,00 kn </td>
                <td> 1.000,00 kn </td>
                <td> 1.200,00 kn </td>
                <td> 2.600,00 kn </td>
                <td> 2.000,00 kn </td>
            </tr>
        </table>
    ]

    const table2Data = [
        <table>
            <tr>
                <th colSpan={2}>RELACIJE</th>
                <th>LUXURY VAN (8 PAX)</th>
                <th>STANDARD VAN (8 PAX)</th>
                <th>MASTER (14 PAX)</th>
                <th>SPRINTER (19 PAX)</th>
                <th>BUS (30 PAX)</th>
                <th>BUS (49 PAX)</th>
            </tr>
            <tr>
                <th colSpan={2}>OD-DO</th>
                <th colSpan={6}>ULAZNE CIJENE</th>
            </tr>
            <h1 className="text-ocean text-center w-full text-3xl xl:text-xl font-light mb-8 mt-8"><b>POLAZIŠTE IZ SUPETAR</b></h1>
            <tr className='text-center'>
                <td colSpan={2}>SUPETAR - LOCCO</td>
                <td> 180,00 kn </td>
                <td> 120,00 kn </td>
                <td> 200,00 kn </td>
                <td> 300,00 kn </td>
                <td> 550,00 kn </td>
                <td> 700,00 kn </td>
            </tr>
            <tr className='text-center'>
                <td colSpan={2}>SUPETAR - POSTIRA/SUTIVAN/NEREŽIŠĆA</td>
                <td> 280,00 kn </td>
                <td> 220,00 kn </td>
                <td> 320,00 kn </td>
                <td> 450,00 kn </td>
                <td> 800,00 kn </td>
                <td> 1.000,00 kn </td>
            </tr>
            <tr className='text-center'>
                <td colSpan={2}>SUPETAR - MILNA</td>
                <td> 350,00 kn </td>
                <td> 280,00 kn </td>
                <td> 400,00 kn </td>
                <td> 500,00 kn </td>
                <td> 900,00 kn </td>
                <td> 1.100,00 kn </td>
            </tr>
            <tr className='text-center'>
                <td colSpan={2}>SUPETAR - PUČIŠĆA</td>
                <td> 400,00 kn </td>
                <td> 320,00 kn </td>
                <td> 500,00 kn </td>
                <td> 600,00 kn </td>
                <td> 1.000,00 kn </td>
                <td> 1.200,00 kn </td>
            </tr>
            <tr className='text-center'>
                <td colSpan={2}>SUPETAR - AERODROM BRAČ</td>
                <td> 400,00 kn </td>
                <td> 320,00 kn </td>
                <td> 500,00 kn </td>
                <td> 600,00 kn </td>
                <td> 1.000,00 kn </td>
                <td> 1.200,00 kn </td>
            </tr>
            <tr className='text-center'>
                <td colSpan={2}>SUPETAR - BOL</td>
                <td> 500,00 kn </td>
                <td> 400,00 kn </td>
                <td> 550,00 kn </td>
                <td> 650,00 kn </td>
                <td> 1.100,00 kn </td>
                <td> 1.300,00 kn </td>
            </tr>
            <tr className='text-center'>
                <td colSpan={2}>SUPETAR - SUMARTIN/SELCA/POVLJA</td>
                <td> 600,00 kn </td>
                <td> 500,00 kn </td>
                <td> 700,00 kn </td>
                <td> 800,00 kn </td>
                <td> 1.300,00 kn </td>
                <td> 1.500,00 kn </td>
            </tr>
            <h1 className="text-ocean text-center w-full text-3xl xl:text-xl font-light mb-8 mt-8"><b>POLAZIŠTE IZ BOL</b></h1>
            <tr className='text-center'>
                <td colSpan={2}>BOL - LOCCO</td>
                <td> 180,00 kn </td>
                <td> 120,00 kn </td>
                <td> 200,00 kn </td>
                <td> 300,00 kn </td>
                <td> 1.100,00 kn </td>
                <td> 1.300,00 kn </td>
            </tr>
            <tr className='text-center'>
                <td colSpan={2}>BOL - AERODROM BRAČ</td>
                <td> 300,00 kn </td>
                <td> 220,00 kn </td>
                <td> 320,00 kn </td>
                <td> 420,00 kn </td>
                <td> 1.100,00 kn </td>
                <td> 1.300,00 kn </td>
            </tr>
            <tr className='text-center'>
                <td colSpan={2}>BOL - SUTIVAN/POSTIRA</td>
                <td> 450,00 kn </td>
                <td> 380,00 kn </td>
                <td> 580,00 kn </td>
                <td> 680,00 kn </td>
                <td> 1.300,00 kn </td>
                <td> 1.500,00 kn </td>
            </tr>
            <tr className='text-center'>
                <td colSpan={2}>BOL - SUMARTIN/SELCA/POVLJA/PUČIŠĆA</td>
                <td> 450,00 kn </td>
                <td> 380,00 kn </td>
                <td> 580,00 kn </td>
                <td> 680,00 kn </td>
                <td> 1.300,00 kn </td>
                <td> 1.500,00 kn </td>
            </tr>
            <tr className='text-center'>
                <td colSpan={2}>BOL - MILNA</td>
                <td> 500,00 kn </td>
                <td> 420,00 kn </td>
                <td> 650,00 kn </td>
                <td> 750,00 kn </td>
                <td> 1.300,00 kn </td>
                <td> 1.500,00 kn </td>
            </tr>
            <h1 className="text-ocean text-center w-full text-3xl xl:text-xl font-light mb-8 mt-8"><b>POLAZIŠTE IZ SUTIVAN</b></h1>
            <tr className='text-center'>
                <td colSpan={2}>SUTIVAN - LOCCO</td>
                <td> 180,00 kn </td>
                <td> 120,00 kn </td>
                <td> 200,00 kn </td>
                <td> 300,00 kn </td>
                <td> 800,00 kn </td>
                <td> 1.000,00 kn </td>
            </tr>
            <tr className='text-center'>
                <td colSpan={2}>SUTIVAN - MILNA</td>
                <td> 280,00 kn </td>
                <td> 220,00 kn </td>
                <td> 320,00 kn </td>
                <td> 400,00 kn </td>
                <td> 900,00 kn </td>
                <td> 1.100,00 kn </td>
            </tr>
            <tr className='text-center'>
                <td colSpan={2}>SUTIVAN - POSTIRA</td>
                <td> 280,00 kn </td>
                <td> 220,00 kn </td>
                <td> 320,00 kn </td>
                <td> 400,00 kn </td>
                <td> 900,00 kn </td>
                <td> 1.100,00 kn </td>
            </tr>
            <tr className='text-center'>
                <td colSpan={2}>SUTIVAN - PUČIŠĆA</td>
                <td> 500,00 kn </td>
                <td> 400,00 kn </td>
                <td> 550,00 kn </td>
                <td> 650,00 kn </td>
                <td> 1.200,00 kn </td>
                <td> 1.400,00 kn </td>
            </tr>
            <tr className='text-center'>
                <td colSpan={2}>SUTIVAN - AERODROM BRAČ</td>
                <td> 500,00 kn </td>
                <td> 400,00 kn </td>
                <td> 550,00 kn </td>
                <td> 650,00 kn </td>
                <td> 1.200,00 kn </td>
                <td> 1.400,00 kn </td>
            </tr>
            <tr className='text-center'>
                <td colSpan={2}>SUTIVAN - SUMARTIN/SELCA/POVLJA</td>
                <td> 600,00 kn </td>
                <td> 550,00 kn </td>
                <td> 800,00 kn </td>
                <td> 900,00 kn </td>
                <td> 1.400,00 kn </td>
                <td> 1.600,00 kn </td>
            </tr>
            <h1 className="text-ocean text-center w-full text-3xl xl:text-xl font-light mb-8 mt-8"><b>POLAZIŠTE IZ POSTIRA</b></h1>
            <tr className='text-center'>
                <td colSpan={2}>POSTIRA - LOCCO</td>
                <td> 180,00 kn </td>
                <td> 120,00 kn </td>
                <td> 200,00 kn </td>
                <td> 300,00 kn </td>
                <td> 800,00 kn </td>
                <td> 1.000,00 kn </td>
            </tr>
            <tr className='text-center'>
                <td colSpan={2}>POSTIRA - PUČIŠĆA</td>
                <td> 400,00 kn </td>
                <td> 320,00 kn </td>
                <td> 500,00 kn </td>
                <td> 600,00 kn </td>
                <td> 1.000,00 kn </td>
                <td> 1.200,00 kn </td>
            </tr>
            <tr className='text-center'>
                <td colSpan={2}>POSTIRA - MILNA</td>
                <td> 450,00 kn </td>
                <td> 380,00 kn </td>
                <td> 580,00 kn </td>
                <td> 680,00 kn </td>
                <td> 1.200,00 kn </td>
                <td> 1.400,00 kn </td>
            </tr>
            <tr className='text-center'>
                <td colSpan={2}>POSTIRA - AERODROM BRAČ</td>
                <td> 450,00 kn </td>
                <td> 380,00 kn </td>
                <td> 580,00 kn </td>
                <td> 680,00 kn </td>
                <td> 1.200,00 kn </td>
                <td> 1.400,00 kn </td>
            </tr>
            <h1 className="text-ocean text-center w-full text-3xl xl:text-xl font-light mb-8 mt-8"><b>POLAZIŠTE IZ MILNA</b></h1>
            <tr className='text-center'>
                <td colSpan={2}>MILNA - LOCCO</td>
                <td> 180,00 kn </td>
                <td> 120,00 kn </td>
                <td> 200,00 kn </td>
                <td> 300,00 kn </td>
                <td> 900,00 kn </td>
                <td> 1.100,00 kn </td>
            </tr>
            <tr className='text-center'>
                <td colSpan={2}>MILNA - AERODROM BRAČ</td>
                <td> 450,00 kn </td>
                <td> 380,00 kn </td>
                <td> 580,00 kn </td>
                <td> 680,00 kn </td>
                <td> 1.200,00 kn </td>
                <td> 1.400,00 kn </td>
            </tr>
            <tr className='text-center'>
                <td colSpan={2}>MILNA - SUMARTIN/SELCA/POVLJA/PUČIŠĆA</td>
                <td> 600,00 kn </td>
                <td> 500,00 kn </td>
                <td> 800,00 kn </td>
                <td> 1.000,00 kn </td>
                <td> 1.400,00 kn </td>
                <td> 1.600,00 kn </td>
            </tr>
            <h1 className="text-ocean text-center w-full text-3xl xl:text-xl font-light mb-8 mt-8"><b>POLAZIŠTE IZ AERODROM BRAČ</b></h1>
            <tr className='text-center'>
                <td colSpan={2}>AERODROM BRAČ - SUMARTIN/SELCA/POVLJA/PUČIŠĆA</td>
                <td> 500,00 kn </td>
                <td> 400,00 kn </td>
                <td> 550,00 kn </td>
                <td> 650,00 kn </td>
                <td> 1.300,00 kn </td>
                <td> 1.500,00 kn </td>
            </tr>
        </table>
    ]

    if (seaPath.includes(path)) {
        Data = Sea;
    }

    if (transPath.includes(path)) {
        Data = Transfer;
        if (path === "transfer") {
            sendTable = table2Data;
        } else {
            sendTable = tableData;
        }
    }

    switch (path) {
        case "brac":
            brodovi = [brac1, brac2, brac3];
            break;
        case "spilja":
            brodovi = [ms1, ms2, ms3];
            break;
        case "boat":
            brodovi = [boat1, boat2, boat3];
            break;
        case "hvar":
            brodovi = [hvar1, hvar2, hvar3];
            break;
        case "solta":
            brodovi = [solta1, solta2, solta3];
            break;
        case "transfer":
            busevi = [bus1, bus2, bus3];
            break;
        case "rent":
            busevi = [bus4, bus5, bus6];
            break;
        case "excursion":
            busevi = [bus7, bus8, bus9];
            break;
        default:
    }
    
    return (
        <div>
            {Data.filter(name => name.slug === `${path}`).map(filteredName => (
                <div>
                    <div className="flex flex-col justify-end w-full min-h-half px-4 md:px-24 py-4 bg-lightblue">
                        <h1 className="text-ocean ml-20 xl:ml-0 text-5xl uppercase font-bold">{filteredName.name}</h1>
                    </div>
                    <section className="flex flex-col xl:flex-row mt-8 px-24 my-12">
                        <div className="w-full xl:w-2/3 flex flex-col justify-center">
                            <h2 className="text-ocean w-full text-3xl xl:text-xl font-light mb-4">
                                <Table data={sendTable} />
                                {filteredName.description}
                            </h2>
                            <Link to="/contact">
                                <button onClick={localStorage.setItem('current', `${filteredName.name}`)} className="bg-ocean text-5xl xl:text-lg text-white h-32 xl:h-16 px-4 w-full xl:w-full self-center mt-5 py-2 border border-ocean hover:text-ocean hover:bg-transparent transition duration-500">
                                    Rezervirajte!
                                </button>
                            </Link>
                        </div>
                        <div className="xl:ml-20 w-full xl:w-1/3 mt-10 xl:mt-0">
                            <div className="flex justify-center">
                                <Swiper
                                    autoplay={{ delay: 5000 }}
                                    navigation={true}
                                    effect={"coverflow"}
                                    grabCursor={true}
                                    centeredSlides={true}
                                    slidesPerView={1}
                                    coverflowEffect={{
                                        rotate: 50,
                                        stretch: 0,
                                        depth: 100,
                                        modifier: 1,
                                        slideShadows: true,
                                    }}
                                    className="destinationSlider overflow-x-hidden z-30" id="destinationSlider"
                                >
                                    <SwiperSlide>
                                    <img
                                    src={filteredName.isLand ? busevi[filteredName.buffer - 1] : brodovi[filteredName.buffer - 1]}
                                    alt=""
                                    className="h-96 md:h-64 max-h-96 w-full"
                                />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                    <img
                                    src={filteredName.isLand ? busevi[filteredName.buffer] : brodovi[filteredName.buffer]}
                                    alt=""
                                    className="h-96 md:h-64 max-h-96 w-full"
                                />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                    <img
                                    src={filteredName.isLand ? busevi[filteredName.buffer + 1] : brodovi[filteredName.buffer + 1]}
                                    alt=""
                                    className="h-96 md:h-64 max-h-96 w-full"
                                />
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                    </section>
                </div>
            ))}
        </div>
    )
}

export default Destinations