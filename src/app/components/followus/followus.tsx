import "@fortawesome/fontawesome-free/css/all.min.css";
import "./follow.css";
export default function FollowUs() {
  return (
    <section className="pt-1 py-3" style={{ backgroundColor: "#2b2c30" }}>
      <div className="max-w-7xl mx-auto px-20">
        <div className="text-center mb-10">
          <h2 className="text-white font-serif mb-6 sm:mb-8 md:mb-12 mt-8 sm:mt-12 md:mt-16">
            Follow us
          </h2>
          <p className="text-center font-sans text-gray-200 mx-auto leading-relaxed mb-6 sm:mb-8 md:mb-10 max-w-xl">
            Trage agile frameworks to provide a robust synopsis for high level
            overviews. Iterative approaches to corporate strategy foster
            collaboration.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-4">
          {/* Follow Item */}
          <div className="relative overflow-hidden group">
            <img
              src="images/image/416x414/266x321.jpg"
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
              src="images/image/416x414/266x321.jpg"
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
              src="images/image/416x414/266x321.jpg"
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
              src="images/image/416x414/266x321.jpg"
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
              src="images/image/416x414/266x321.jpg"
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
  );
}
