"use client";
import "./main.css";
import { useState, useEffect } from 'react';
import FollowUs from "../components/followus/followus";

export default function Page() {
    const [activeTab, setActiveTab] = useState('penthouse');
    const [blink, setBlink] = useState(false);
    const handleTabClick = (tab: string) => {
        setBlink(true);
        setActiveTab(tab);
    };

    useEffect(() => {
        if (blink) {
            const timer = setTimeout(() => setBlink(false), 1000);
            return () => clearTimeout(timer);
        }
    }, [blink]);

    return (
        <>
            <section className="apartment-info-list a bg-[#1a1b1d]">
                <div className="container py-20">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-serif text-white">Floor Plan</h2>
                        <p className="text-sm md:text-base text-gray-300 mt-7">
                            Trage agile frameworks to provide a robust synopsis for high level overviews.<br />
                            Iterative approaches to corporate strategy foster collabo.
                        </p>
                    </div>
                    <div>
                        <div className="plan-tab">
                            <nav>
                                <div className="flex flex-wrap justify-center space-x-2 md:space-x-8">
                                    <button
                                        className={`text-sm md:text-base font-medium ${activeTab === 'penthouse' ? 'text-[#CD9161] border-b-[1px] border-r-[1px] border-[#CD9161] pr-2 pb-1 pt-2' : 'text-white py-2 hover:text-[#CD9161] border-b-[1px] border-r-[1px] border-transparent hover:border-[#CD9161] transition duration-300 pr-2 pb-1'}`}
                                        onClick={() => handleTabClick('penthouse')}
                                    >
                                        Penthouse
                                    </button>
                                    <button
                                        className={`text-sm md:text-base font-medium ${activeTab === 'apartment' ? 'text-[#CD9161] border-b-[1px] border-r-[1px] border-[#CD9161] pr-2 pb-1 pt-2' : 'text-white py-2 hover:text-[#CD9161] border-b-[1px] border-r-[1px] border-transparent hover:border-[#CD9161] transition duration-300 pr-2 pb-1'}`}
                                        onClick={() => handleTabClick('apartment')}
                                    >
                                        Apartment
                                    </button>
                                    <button
                                        className={`text-sm md:text-base font-medium ${activeTab === 'simplex' ? 'text-[#CD9161] border-b-[1px] border-r-[1px] border-[#CD9161] pr-2 pb-1 pt-2' : 'text-white py-2 hover:text-[#CD9161] border-b-[1px] border-r-[1px] border-transparent hover:border-[#CD9161] transition duration-300 pr-2 pb-1'}`}
                                        onClick={() => handleTabClick('simplex')}
                                    >
                                        Simplex
                                    </button>
                                    <button
                                        className={`text-sm md:text-base font-medium ${activeTab === 'duplex' ? 'text-[#CD9161] border-b-[1px] border-r-[1px] border-[#CD9161] pr-2 pb-1 pt-2' : 'text-white py-2 hover:text-[#CD9161] border-b-[1px] border-r-[1px] border-transparent hover:border-[#CD9161] transition duration-300 pr-2 pb-1'}`}
                                        onClick={() => handleTabClick('duplex')}
                                    >
                                        Duplex
                                    </button>
                                </div>
                            </nav>
                        </div>

                        <div className={`tab-content py-10 md:py-20 ${blink ? 'blink' : ''}`} id="nav-tabContent">
                            {activeTab === 'penthouse' && (
                                <div className="tab-pane fade show active" role="tabpanel" aria-labelledby="nav-home-tab">
                                    <div className="flex flex-col md:flex-row justify-center items-center">
                                        <div className="w-full md:w-1/2 pr-0 md:pr-8 flex flex-col justify-center">
                                            <ul className="space-y-4 full-width-md">
                                                <li className="border-b border-gray-600 pb-2 flex justify-between items-center">
                                                    <h3 className="font-sans text-sm md:text-base text-white">Floor No</h3>
                                                    <h3 className="text-sm md:text-base font-sans text-white">03</h3>
                                                </li>
                                                <li className="border-b border-gray-600 pb-2 flex justify-between items-center">
                                                    <h3 className="font-sans text-sm md:text-base text-white">Rooms</h3>
                                                    <h3 className="text-sm md:text-base font-sans text-white">03</h3>
                                                </li>
                                                <li className="border-b border-gray-600 pb-2 flex justify-between items-center">
                                                    <h3 className="font-sans text-sm md:text-base text-white">Bathrooms</h3>
                                                    <h3 className="text-sm md:text-base font-sans text-white">03</h3>
                                                </li>
                                                <li className="border-b border-gray-600 pb-2 flex justify-between items-center">
                                                    <h3 className="font-sans text-sm md:text-base text-white">Total area, SQ.M</h3>
                                                    <h3 className="text-sm md:text-base font-sans text-white">120</h3>
                                                </li>
                                                <li className="border-b border-gray-600 pb-2 flex justify-between items-center">
                                                    <h3 className="font-sans text-sm md:text-base text-white">Parking</h3>
                                                    <h3 className="text-sm md:text-base font-sans text-white">Yes</h3>
                                                </li>
                                                <li className="border-b border-gray-600 pb-2 flex justify-between items-center">
                                                    <h3 className="font-sans text-sm md:text-base text-white">Outdoor View</h3>
                                                    <h3 className="text-sm md:text-base font-sans text-white">City</h3>
                                                </li>
                                                <li className="border-b border-gray-600 pb-2 flex justify-between items-center">
                                                    <h3 className="font-sans text-sm md:text-base text-white">Price</h3>
                                                    <h3 className="text-sm md:text-base font-sans text-white">$3500/m2</h3>
                                                </li>
                                            </ul>
                                            <div className="mt-14 flex items-center">
                                                <a href="#">
                                                    <img src="images/image/416x414/Pdf.png" alt="pdf" className="mr-2" />
                                                </a>
                                                <div>
                                                    <h3 className="font-sans text-sm md:text-base text-white">
                                                        Property <br /> Description PDF
                                                    </h3>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="w-full md:w-1/2 h-2/3 mt-8 md:mt-0">
                                            <div className="plan-thumb text-white">
                                                <img src="images/image/416x414/587X557.png" alt="plan" className="w-full h-auto" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {activeTab === 'apartment' && (
                                <div className="tab-pane fade show" role="tabpanel" aria-labelledby="nav-profile-tab">
                                    <div className="flex flex-col md:flex-row justify-center items-center">
                                        <div className="w-full md:w-1/2 pr-0 md:pr-8 flex flex-col justify-center">
                                            <ul className="space-y-4">
                                                <li className="border-b border-gray-600 pb-2 flex justify-between items-center">
                                                    <h3 className="font-sans text-sm md:text-base text-white">Floor No</h3>
                                                    <h3 className="text-sm md:text-base font-sans text-white">03</h3>
                                                </li>
                                                <li className="border-b border-gray-600 pb-2 flex justify-between items-center">
                                                    <h3 className="font-sans text-sm md:text-base text-white">Rooms</h3>
                                                    <h3 className="text-sm md:text-base font-sans text-white">03</h3>
                                                </li>
                                                <li className="border-b border-gray-600 pb-2 flex justify-between items-center">
                                                    <h3 className="font-sans text-sm md:text-base text-white">Bathrooms</h3>
                                                    <h3 className="text-sm md:text-base font-sans text-white">03</h3>
                                                </li>
                                                <li className="border-b border-gray-600 pb-2 flex justify-between items-center">
                                                    <h3 className="font-sans text-sm md:text-base text-white">Total area, SQ.M</h3>
                                                    <h3 className="text-sm md:text-base font-sans text-white">120</h3>
                                                </li>
                                                <li className="border-b border-gray-600 pb-2 flex justify-between items-center">
                                                    <h3 className="font-sans text-sm md:text-base text-white">Parking</h3>
                                                    <h3 className="text-sm md:text-base font-sans text-white">Yes</h3>
                                                </li>
                                                <li className="border-b border-gray-600 pb-2 flex justify-between items-center">
                                                    <h3 className="font-sans text-sm md:text-base text-white">Outdoor View</h3>
                                                    <h3 className="text-sm md:text-base font-sans text-white">City</h3>
                                                </li>
                                                <li className="border-b border-gray-600 pb-2 flex justify-between items-center">
                                                    <h3 className="font-sans text-sm md:text-base text-white">Price</h3>
                                                    <h3 className="text-sm md:text-base font-sans text-white">$3500/m2</h3>
                                                </li>
                                            </ul>
                                            <div className="mt-14 flex items-center">
                                                <a href="#">
                                                    <img src="images/image/416x414/Pdf.png" alt="pdf" className="mr-2" />
                                                </a>
                                                <div>
                                                    <h3 className="font-sans text-sm md:text-base text-white">
                                                        Property <br /> Description PDF
                                                    </h3>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="w-full md:w-1/2 h-2/3 mt-8 md:mt-0">
                                            <div className="plan-thumb">
                                                <img src="images/image/416x414/587X557.png" alt="plan" className="w-full h-auto" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {activeTab === 'simplex' && (
                                <div className="tab-pane fade show" role="tabpanel" aria-labelledby="nav-contact-tab">
                                    <div className="flex flex-col md:flex-row justify-center items-center">
                                        <div className="w-full md:w-1/2 pr-0 md:pr-8 flex flex-col justify-center">
                                            <ul className="space-y-4">
                                                <li className="border-b border-gray-600 pb-2 flex justify-between items-center">
                                                    <h3 className="font-sans text-sm md:text-base text-white">Floor No</h3>
                                                    <h3 className="text-sm md:text-base font-sans text-white">03</h3>
                                                </li>
                                                <li className="border-b border-gray-600 pb-2 flex justify-between items-center">
                                                    <h3 className="font-sans text-sm md:text-base text-white">Rooms</h3>
                                                    <h3 className="text-sm md:text-base font-sans text-white">03</h3>
                                                </li>
                                                <li className="border-b border-gray-600 pb-2 flex justify-between items-center">
                                                    <h3 className="font-sans text-sm md:text-base text-white">Bathrooms</h3>
                                                    <h3 className="text-sm md:text-base font-sans text-white">03</h3>
                                                </li>
                                                <li className="border-b border-gray-600 pb-2 flex justify-between items-center">
                                                    <h3 className="font-sans text-sm md:text-base text-white">Total area, SQ.M</h3>
                                                    <h3 className="text-sm md:text-base font-sans text-white">120</h3>
                                                </li>
                                                <li className="border-b border-gray-600 pb-2 flex justify-between items-center">
                                                    <h3 className="font-sans text-sm md:text-base text-white">Parking</h3>
                                                    <h3 className="text-sm md:text-base font-sans text-white">Yes</h3>
                                                </li>
                                                <li className="border-b border-gray-600 pb-2 flex justify-between items-center">
                                                    <h3 className="font-sans text-sm md:text-base text-white">Outdoor View</h3>
                                                    <h3 className="text-sm md:text-base font-sans text-white">City</h3>
                                                </li>
                                                <li className="border-b border-gray-600 pb-2 flex justify-between items-center">
                                                    <h3 className="font-sans text-sm md:text-base text-white">Price</h3>
                                                    <h3 className="text-sm md:text-base font-sans text-white">$3500/m2</h3>
                                                </li>
                                            </ul>
                                            <div className="mt-14 flex items-center">
                                                <a href="#">
                                                    <img src="images/image/416x414/Pdf.png" alt="pdf" className="mr-2" />
                                                </a>
                                                <div>
                                                    <h3 className="font-sans text-sm md:text-base text-white">
                                                        Property <br /> Description PDF
                                                    </h3>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="w-full md:w-1/2 h-2/3 mt-8 md:mt-0">
                                            <div className="plan-thumb">
                                                <img src="images/image/416x414/587X557.png" alt="plan" className="w-full h-auto" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {activeTab === 'duplex' && (
                                <div className="tab-pane fade show" role="tabpanel" aria-labelledby="nav-info-tab">
                                    <div className="flex flex-col md:flex-row justify-center items-center">
                                        <div className="w-full md:w-1/2 pr-0 md:pr-8 flex flex-col justify-center">
                                            <ul className="space-y-4">
                                                <li className="border-b border-gray-600 pb-2 flex justify-between items-center">
                                                    <h3 className="font-sans text-sm md:text-base text-white">Floor No</h3>
                                                    <h3 className="text-sm md:text-base font-sans text-white">03</h3>
                                                </li>
                                                <li className="border-b border-gray-600 pb-2 flex justify-between items-center">
                                                    <h3 className="font-sans text-sm md:text-base text-white">Rooms</h3>
                                                    <h3 className="text-sm md:text-base font-sans text-white">03</h3>
                                                </li>
                                                <li className="border-b border-gray-600 pb-2 flex justify-between items-center">
                                                    <h3 className="font-sans text-sm md:text-base text-white">Bathrooms</h3>
                                                    <h3 className="text-sm md:text-base font-sans text-white">03</h3>
                                                </li>
                                                <li className="border-b border-gray-600 pb-2 flex justify-between items-center">
                                                    <h3 className="font-sans text-sm md:text-base text-white">Total area, SQ.M</h3>
                                                    <h3 className="text-sm md:text-base font-sans text-white">120</h3>
                                                </li>
                                                <li className="border-b border-gray-600 pb-2 flex justify-between items-center">
                                                    <h3 className="font-sans text-sm md:text-base text-white">Parking</h3>
                                                    <h3 className="text-sm md:text-base font-sans text-white">Yes</h3>
                                                </li>
                                                <li className="border-b border-gray-600 pb-2 flex justify-between items-center">
                                                    <h3 className="font-sans text-sm md:text-base text-white">Outdoor View</h3>
                                                    <h3 className="text-sm md:text-base font-sans text-white">City</h3>
                                                </li>
                                                <li className="border-b border-gray-600 pb-2 flex justify-between items-center">
                                                    <h3 className="font-sans text-sm md:text-base text-white">Price</h3>
                                                    <h3 className="text-sm md:text-base font-sans text-white">$3500/m2</h3>
                                                </li>
                                            </ul>
                                            <div className="mt-14 flex items-center">
                                                <a href="#">
                                                    <img src="images/image/416x414/Pdf.png" alt="pdf" className="mr-2" />
                                                </a>
                                                <div>
                                                    <h3 className="font-sans text-sm md:text-base text-white">
                                                        Property <br /> Description PDF
                                                    </h3>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="w-full md:w-1/2 h-2/3 mt-8 md:mt-0">
                                            <div className="plan-thumb">
                                                <img src="images/image/416x414/587X557.png" alt="plan" className="w-full h-auto" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            <FollowUs />
        </>
    );
}