import React from 'react';

const Contact = () => {
  return (
    <div>
      {/* Banner Section */}
      

      {/* Contact Info Section */}
      <section className="bg-[#1a1a1a] text-white py-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-around items-center gap-8 md:gap-0">
          {/* Any Question */}
          <div className="text-center flex flex-col items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32" className="mb-4 text-[#bd8c62] w-[45px] h-[45px]">
              <path fill="currentColor" d="M24 13h-2a3.003 3.003 0 0 0-3-3V8a5.006 5.006 0 0 1 5 5"/>
              <path fill="currentColor" d="M28 13h-2a7.01 7.01 0 0 0-7-7V4a9.01 9.01 0 0 1 9 9m-2 16h-.17C6.18 27.87 3.39 11.29 3 6.23a3 3 0 0 1 2.761-3.221Q5.88 3 6 3h5.27a2 2 0 0 1 1.86 1.26L14.65 8a2 2 0 0 1-.44 2.16l-2.13 2.15a9.36 9.36 0 0 0 7.58 7.6l2.17-2.15a2 2 0 0 1 2.17-.41l3.77 1.51A2 2 0 0 1 29 20.72V26a3 3 0 0 1-3 3M6 5a1 1 0 0 0-1.003.997q0 .042.003.083C5.46 12 8.41 26 25.94 27a1 1 0 0 0 1.058-.938L27 26v-5.28l-3.77-1.51l-2.87 2.85l-.48-.06c-8.7-1.09-9.88-9.79-9.88-9.88l-.06-.48l2.84-2.87L11.28 5z"/>
            </svg>
            <h4 className="text-lg font-semibold">Any Question</h4>
            <p className="text-[#cfcfcf]">0032 564 789</p>
            <p className="text-[#cfcfcf]">507-753-3580</p>
          </div>

          {/* E-mail */}
          <div className="text-center flex flex-col items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 36 36" className="mb-4 text-[#bd8c62] w-[45px] h-[45px]">
              <path fill="currentColor" d="M32 6H4a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2m-1.54 22H5.66l7-7.24l-1.44-1.39L4 26.84V9.52l12.43 12.37a2 2 0 0 0 2.82 0L32 9.21v17.5l-7.36-7.36l-1.41 1.41ZM5.31 8h25.07L17.84 20.47Z"/>
              <path fill="none" d="M0 0h36v36H0z"/>
            </svg>
            <h4 className="text-lg font-semibold">E-mail</h4>
            <p className="text-[#cfcfcf]">beauly155@gmail.com</p>
            <p className="text-[#cfcfcf]">beauly2654@gmail.com</p>
          </div>

          {/* Address */}
          <div className="text-center flex flex-col items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48" className="mb-4 text-[#bd8c62] w-[45px] h-[45px]">
              <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4">
                <path d="M8 36v8h32V4H8v8M6 30h4m-4-6h4m-4-6h4"/>
                <circle cx="24" cy="17" r="4"/>
                <path d="M32 35a8 8 0 1 0-16 0"/>
              </g>
            </svg>
            <h4 className="text-lg font-semibold">Address</h4>
            <p className="text-[#cfcfcf]">San Francisco, CA 33</p>
            <p className="text-[#cfcfcf]">6B at Trinity Place</p>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="w-full h-[525px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=..."
          width="100%"
          height="525"
          style={{ border: 0 }}
          loading="lazy"
        ></iframe>
      </section>

      {/* Form Section */}
      <section className="bg-[#1a1a1a] text-white py-16">
        <div className="max-w-4xl mx-auto text-center w-full px-4 sm:px-8 md:px-0">
        <h2 className="text-[55px] text-3xl mb-4 text-white font-serif">
        Get in Touch
        </h2>
          <p className="text-lg mb-8 text-[18px] w-[640px] text-center mx-auto font-Jost test-[#cfcfcf]">
            Trage agile frameworks to provide a robust synopsis for high level overviews Iterative approaches to corporate strategy foster collabo
          </p>
          <div className="flex justify-center items-center">
          <form className="w-[650px]">
            <div>
              <input
                type="text"
                placeholder="Full Name"
                className="border border-[#bd8c62] bg-[#1a1a1a] text-white p-3 w-full font-Jost"
              />
            </div>
            <div className="mt-5">
              <input
                type="email"
                placeholder="Email"
                className="border border-[#bd8c62] bg-[#1a1a1a] text-white p-3 w-full font-Jost"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left mt-5">
              <input
                type="tel"
                placeholder="Phone"
                className="border border-[#bd8c62] bg-[#1a1a1a] text-white p-3  w-full font-Jost"
              />
              <select className="border border-[#bd8c62] bg-[#1a1a1a] text-white p-3  w-full font-Jost">
                <option value="">Select Time</option>
                <option value="morning">15:30</option>
                <option value="afternoon">15:35</option>
                <option value="evening">15:40</option>
              </select>

              <textarea
                placeholder="Message"
                className="border border-[#bd8c62] bg-[#1a1a1a] text-white p-3 w-full md:col-span-2 font-Jost"
              ></textarea>

              <button
                type="submit"
                className="md:col-span-2 bg-[#bd8c62] text-white py-3 px-6  font-semibold hover:bg-[#a97150] transition font-Jost"
              >
                Submit Request
              </button>
            </div>
          </form>
        </div>

        </div>
      </section>

      {/* Follow Us Section */}
      <section className="pt-1 py-3" style={{ backgroundColor: '#2b2c30' }}>
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-10">
                    <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-serif mb-6 sm:mb-8 md:mb-12 mt-8 sm:mt-12 md:mt-16">Follow us</h2>
                    <p className="text-center  text-gray-200 mx-auto leading-relaxed text-base sm:text-lg md:text-xl mb-6 sm:mb-8 md:mb-10 max-w-xl">
                        Trage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaboration.
                    </p>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-4">
                    {/* Follow Item */}
                    <div className="relative overflow-hidden group">
                        <img
                            src="/images/image/416x414/266x321.jpg"
                            alt="img"
                            className="w-full h-auto transition-opacity duration-300 ease-in-out"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <a
                                href="#"
                                className="text-white text-2xl sm:text-3xl md:text-4xl transform scale-0 transition-transform duration-300 ease-in-out group-hover:scale-100 hover:text-orange-500"
                            >
                                <i className="fab fa-instagram"></i>
                            </a>
                        </div>
                    </div>

                    {/* Repeat other follow items */}
                    <div className="relative overflow-hidden group">
                        <img
                            src="/images/image/416x414/266x321.jpg"
                            alt="img"
                            className="w-full h-auto transition-opacity duration-300 ease-in-out"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <a
                                href="#"
                                className="text-white text-2xl sm:text-3xl md:text-4xl transform scale-0 transition-transform duration-300 ease-in-out group-hover:scale-100 hover:text-orange-500"
                            >
                                <i className="fab fa-instagram"></i>
                            </a>
                        </div>
                    </div>
                    <div className="relative overflow-hidden group">
                        <img
                            src="/images/image/416x414/266x321.jpg"
                            alt="img"
                            className="w-full h-auto transition-opacity duration-300 ease-in-out"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <a
                                href="#"
                                className="text-white text-2xl sm:text-3xl md:text-4xl transform scale-0 transition-transform duration-300 ease-in-out group-hover:scale-100 hover:text-orange-500"
                            >
                                <i className="fab fa-instagram"></i>
                            </a>
                        </div>
                    </div>
                    <div className="relative overflow-hidden group">
                        <img
                             src="/images/image/416x414/266x321.jpg"
                            alt="img"
                            className="w-full h-auto transition-opacity duration-300 ease-in-out"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <a
                                href="#"
                                className="text-white text-2xl sm:text-3xl md:text-4xl transform scale-0 transition-transform duration-300 ease-in-out group-hover:scale-100 hover:text-orange-500"
                            >
                                <i className="fab fa-instagram"></i>
                            </a>
                        </div>
                    </div>
                    <div className="relative overflow-hidden group">
                        <img
                             src="/images/image/416x414/266x321.jpg"
                            alt="img"
                            className="w-full h-auto transition-opacity duration-300 ease-in-out"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <a
                                href="#"
                                className="text-white text-2xl sm:text-3xl md:text-4xl transform scale-0 transition-transform duration-300 ease-in-out group-hover:scale-100 hover:text-orange-500"
                            >
                                <i className="fab fa-instagram"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center my-8">
                    <a
                        href="#"
                        className="bg-[#2f2f2f] border border-[#bd8c62] text-[#bd8c62] font-jost inline-block text-lg font-medium leading-none capitalize py-3 px-8 tracking-normal rounded-none relative z-10 overflow-hidden group"
                    >
                        <span className="relative z-10 text-sm">Follow @Beauly.Home</span>
                        <div className="absolute inset-0 bg-white opacity-20 w-[50px] h-[155px] transform rotate-[35deg] top-[-50px] left-[-75px] transition-all duration-[1000ms] ease-in-out group-hover:left-[120%] z-[-1]"></div>
                    </a>
                </div>
            </div>
        </section>
    </div>
  );
};

export default Contact;
