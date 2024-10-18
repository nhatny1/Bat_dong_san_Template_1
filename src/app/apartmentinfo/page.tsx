import "./main.css";
import FollowUs from "../components/followus/followus";

export default function Page() {
    return (
        <>
            <div className="bg-[#1a1b1d] py-10">
                <section className="apartment-info-list">
                    <div className="container">
                        <div className="flex flex-wrap">
                            <div className="w-full">
                                <div className="apartment-info">
                                    {/* Apartment B1 */}
                                    <div className="apartment-info-item flex flex-col lg:flex-row items-start lg:items-center mb-10 lg:mb-12 pb-8 lg:pb-12 border-b border-white/10">
                                        <div className="w-full lg:w-1/3 mb-6 lg:mb-0">
                                            <div className="left-item">
                                                <h2 className="info-number text-[#bd8c62] text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight">B1</h2>
                                                <h3 className="info-title text-[#ddd] text-lg sm:text-xl font-semibold mt-2 mb-3 sm:mb-5">Duplex Apartment</h3>
                                                <div className="info-icon flex items-center mt-2">
                                                    <i className="fas fa-expand w-4 h-5 mr-2" style={{ color: '#bd8c62' }}></i>
                                                    <span className="text-white text-sm">1200 sq</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-full lg:w-1/12 mb-6 lg:mb-0">
                                            <ul className="space-y-2 sm:space-y-4 text-white text-sm">
                                                <li>2 Rooms</li>
                                                <li>Floor 1</li>
                                                <li>Balcony</li>
                                            </ul>
                                        </div>
                                        <div className="w-full lg:w-5/12 mb-6 lg:mb-0 mt-4 lg:mt-0 lg:ml-4">
                                            <div className="mid-item">
                                                <img src="/images/image/416x414/386x234.png" alt="img" className="max-w-full sm:max-w-[300px] md:max-w-[330px]" />
                                            </div>
                                        </div>
                                        <div className="w-full lg:w-1/6 text-left lg:text-right">
                                            <div className="right-item">
                                                <h2 className="right-title text-white text-2xl sm:text-3xl font-jost">$395,500</h2>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Apartment B2 (Duplicate) */}
                                    <div className="apartment-info-item flex flex-col lg:flex-row items-start lg:items-center mb-10 lg:mb-12 pb-8 lg:pb-12 border-b border-white/10">
                                        <div className="w-full lg:w-1/3 mb-6 lg:mb-0">
                                            <div className="left-item">
                                                <h2 className="info-number text-[#bd8c62] text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight">B2</h2>
                                                <h3 className="info-title text-[#ddd] text-lg sm:text-xl font-semibold mt-2 mb-3 sm:mb-5">Suplex Apartment</h3>
                                                <div className="info-icon flex items-center mt-2">
                                                    <i className="fas fa-expand w-4 h-5 mr-2" style={{ color: '#bd8c62' }}></i>
                                                    <span className="text-white text-sm">1200 sq</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-full lg:w-1/12 mb-6 lg:mb-0">
                                            <ul className="space-y-2 sm:space-y-4 text-white text-sm">
                                                <li>3 Rooms</li>
                                                <li>Floor 2</li>
                                                <li>Parking</li>
                                            </ul>
                                        </div>
                                        <div className="w-full lg:w-5/12 mb-6 lg:mb-0 mt-4 lg:mt-0 lg:ml-4">
                                            <div className="mid-item">
                                                <img src="/images/image/416x414/301x234.png" alt="img" className="max-w-full sm:max-w-[300px] md:max-w-[330px]" />
                                            </div>
                                        </div>
                                        <div className="w-full lg:w-1/6 text-left lg:text-right">
                                            <div className="right-item">
                                                <h2 className="right-title text-white text-2xl sm:text-3xl font-jost">$495,500</h2>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Apartment B3 (Third Instance) */}
                                    <div className="apartment-info-item flex flex-col lg:flex-row items-start lg:items-center mb-10 lg:mb-12 pb-8 lg:pb-12 border-b border-white/10">
                                        <div className="w-full lg:w-1/3 mb-6 lg:mb-0">
                                            <div className="left-item">
                                                <h2 className="info-number text-[#bd8c62] text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight">B3</h2>
                                                <h3 className="info-title text-[#ddd] text-lg sm:text-xl font-semibold mt-2 mb-3 sm:mb-5">Penthouses Apartment
                                                </h3>
                                                <div className="info-icon flex items-center mt-2">
                                                    <i className="fas fa-expand w-4 h-5 mr-2" style={{ color: '#bd8c62' }}></i>
                                                    <span className="text-white text-sm">1100 sq</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-full lg:w-1/12 mb-6 lg:mb-0">
                                            <ul className="space-y-2 sm:space-y-4 text-white text-sm">
                                                <li>4 Rooms</li>
                                                <li>Floor 1</li>
                                                <li>balcony</li>
                                            </ul>
                                        </div>
                                        <div className="w-full lg:w-5/12 mb-6 lg:mb-0 mt-4 lg:mt-0 lg:ml-4">
                                            <div className="mid-item">
                                                <img src="/images/image/416x414/386x234.png" alt="img" className="max-w-full sm:max-w-[300px] md:max-w-[330px]" />
                                            </div>
                                        </div>
                                        <div className="w-full lg:w-1/6 text-left lg:text-right">
                                            <div className="right-item">
                                                <h2 className="right-title text-white text-2xl sm:text-3xl font-jost">$295,500</h2>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            {/* Follow Us Section */}
            <FollowUs />
        </>
    );
}
