import ApmGallery from "../components/ApmGallery/page";
import FollowUs from "../components/followus/followus";
import Showcounter from "../components/Showcounter/page";
import Single from "../components/Single/single";

import styles from "../home.module.css";
import { Icon } from "@iconify/react/dist/iconify.js";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

export default function Page() {
  return (
    <>
      <div className="bg-black-300 text-white min-h-screen flex items-center justify-center">
        <div className="flex flex-col lg:flex-row max-w-5xl items-center p-5">
          <img
            src="/images/image/416x414/518x562.jpg"
            className="w-full lg:w-1/2 mb-5 lg:mb-0"
          />
          <div className="lg:ml-10 text-center lg:text-left lg:w-1/2">
            <h2 className="text-custom-beige text-sm mb-2">
              Welcome to Beauly
            </h2>
            <h1 className="text-3xl font-bold mb-6 max-w-xs">
              The Building Retail & Services
            </h1>
            <p className="text-xs max-w-sm mb-6 text-gray-300">
              We are a team of experienced professionals dedicated to providing
              you with the best possible real estate services. Our passion for
              real estate, combined with our expertise and knowledge of the
              market, enables us to deliver exceptional results for our clients.
              We pride ourselves on our customer service, and we strive to
              exceed your expectations every step of the way. We are available
              to answer any questions you may have and provide you with the
              information you need to make informed decisions.
            </p>

            <button className="bg-custom-beige text-white px-6 py-3 mb-3">
              Get In Touch →
            </button>
          </div>
        </div>
      </div>

      <Showcounter />

      <div className="bg-bg-custom text-white">
        <h2 className="text-4xl text-center font-bold mb-2">Floor Plan</h2>
        <p className="text-gray-400 text-center mb-6 max-w-xl  mx-auto">
          Trage agile frameworks to provide a robust synopsis for high level
          overviews. Iterative approaches to corporate strategy foster
          collaboration.
        </p>
        <div className="flex flex-col lg:flex-row max-w-6xl p-5  mx-auto">
          {/* Left Column: Floor Plan Details */}
          <div className="lg:w-1/2 mb-10 lg:mb-0 lg:mr-10 ml-20">
            {/* Table with Details */}
            <div className="space-y-2">
              <div className="flex justify-between border-b border-gray-600 py-2">
                <span>Floor No</span>
                <span>03</span>
              </div>
              <div className="flex justify-between border-b border-gray-600 py-2">
                <span>Rooms</span>
                <span>03</span>
              </div>
              <div className="flex justify-between border-b border-gray-600 py-2">
                <span>Bathrooms</span>
                <span>03</span>
              </div>
              <div className="flex justify-between border-b border-gray-600 py-2">
                <span>Total Area, SQ.M</span>
                <span>120</span>
              </div>
              <div className="flex justify-between border-b border-gray-600 py-2">
                <span>Parking</span>
                <span>Yes</span>
              </div>
              <div className="flex justify-between border-b border-gray-600 py-2">
                <span>Outdoor View</span>
                <span>City</span>
              </div>
              <div className="flex justify-between border-b border-gray-600 py-2">
                <span>Price</span>
                <span>$3500/m²</span>
              </div>
            </div>

            {/* PDF Download Section */}
            <div className="mt-8">
              <a
                href="#"
                className="flex items-center text-yellow-600 hover:text-yellow-700 transition">
                <span className="mr-2">📄</span> Property Description PDF
              </a>
            </div>
          </div>

          <img
            src="/images/image/416x414/587x557.png"
            className="w-full lg:w-1/2"
          />
        </div>
      </div>
      {/*icon xoay xoay*/}
      <div className={cx("w-full", "py-16", "bg-nhay-nhay")}>
        <div
          className={cx(
            "max-w-screen-xl mx-auto p-4",
            "flex",
            "justify-between"
          )}>
          <div
            className={cx(
              "sub",
              "flex",
              "flex-col",
              "justify-start",
              "gap-3",
              "pl-2",
              "mb-3"
            )}></div>

          <div
            className={cx(
              "sub-item",
              "basis-full",
              "lg:basis-1/4",
              "sm:basis-2/4",
              "flex",
              "flex-col",
              "items-center",
              "gap-4",
              "px-2",
              "mb-4"
            )}>
            <div
              className={cx(
                "flex",
                "flex-col",
                "items-center",
                "gap-4",
                "py-9",
                "px-4"
              )}>
              <div className={cx("icon")}>
                <Icon
                  icon="mingcute:swimming-pool-line"
                  className={cx("icon-svg", "w-16", "h-16")}
                />
              </div>
              <div
                className={cx(
                  "title",
                  "text-2xl",
                  "lg:text-lg",
                  "text-white",
                  "font-medium"
                )}>
                Swimming Pool
              </div>
              <div
                className={cx(
                  "text-slate-200",
                  "text-sub",
                  "text-lg",
                  "lg:text-xs",
                  "text-center"
                )}>
                Immigration advisory visa a foundation was establishe with a
                ideaImmigration advisory visa a foundation
              </div>
            </div>
          </div>
          <div
            className={cx(
              "sub-item",
              "basis-full",
              "lg:basis-1/4",
              "sm:basis-2/4",
              "flex",
              "flex-col",
              "items-center",
              "gap-4",
              "px-2",
              "mb-4"
            )}>
            <div
              className={cx(
                "flex",
                "flex-col",
                "items-center",

                "gap-4",
                "py-9",
                "px-4"
              )}>
              <div className={cx("icon")}>
                <Icon
                  icon="streamline:wifi-router"
                  className={cx("icon-svg", "w-16", "h-16")}
                />
              </div>
              <div
                className={cx(
                  "title",
                  "text-2xl",
                  "lg:text-lg",
                  "text-white",
                  "font-medium"
                )}>
                Fast Speed WI-FI
              </div>
              <div
                className={cx(
                  "text-slate-200",
                  "text-sub",
                  "text-lg",
                  "lg:text-xs",
                  "text-center"
                )}>
                Immigration advisory visa a foundation was establishe with a
                ideaImmigration advisory visa a foundation
              </div>
            </div>
          </div>
          <div
            className={cx(
              "sub-item",
              "basis-full",
              "lg:basis-1/4",
              "sm:basis-2/4",
              "flex",
              "flex-col",
              "items-center",
              "gap-4",
              "px-2",
              "mb-4"
            )}>
            <div
              className={cx(
                "flex",
                "flex-col",
                "items-center",

                "gap-4",
                "py-9",
                "px-4"
              )}>
              <div className={cx("icon")}>
                <Icon
                  icon="ion:car-sport-outline"
                  className={cx("icon-svg", "w-16", "h-16")}
                />
              </div>
              <div
                className={cx(
                  "title",
                  "text-2xl",
                  "lg:text-lg",
                  "text-white",
                  "font-medium"
                )}>
                Parking Space
              </div>
              <div
                className={cx(
                  "text-slate-200",
                  "text-sub",
                  "text-lg",
                  "lg:text-xs",
                  "text-center"
                )}>
                Immigration advisory visa a foundation was establishe with a
                ideaImmigration advisory visa a foundation
              </div>
            </div>
          </div>
          <div
            className={cx(
              "sub-item",
              "basis-full",
              "lg:basis-1/4",
              "sm:basis-2/4",
              "flex",
              "flex-col",
              "items-center",
              "gap-4",
              "px-2",
              "mb-4"
            )}>
            <div
              className={cx(
                "flex",
                "flex-col",
                "items-center",

                "gap-4",
                "py-9",
                "px-4"
              )}>
              <div className={cx("icon")}>
                <Icon
                  icon="circum:dumbbell"
                  className={cx("icon-svg", "w-16", "h-16")}
                />
              </div>
              <div
                className={cx(
                  "title",
                  "text-2xl",
                  "lg:text-lg",
                  "text-white",
                  "font-medium"
                )}>
                Fitness Center
              </div>
              <div
                className={cx(
                  "text-slate-200",
                  "text-sub",
                  "text-lg",
                  "lg:text-xs",
                  "text-center"
                )}>
                Immigration advisory visa a foundation was establishe with a
                ideaImmigration advisory visa a foundation
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*end - icons*/}
      <div className="bg-bg-custom  text-white mt-24">
        <h2 className="text-4xl text-center mb-2 font-bold mb-2">
          Property Gallery
        </h2>
        <p className="text-gray-400 text-center max-w-xl   mx-auto">
          Trage agile frameworks to provide a robust synopsis for high level
          overviews. Iterative approaches to corporate strategy foster collabo
        </p>
      </div>
      <ApmGallery />
      <Single />

      {/*form điền thông tin */}
      <div className={cx("contact")}>
        <div
          className={cx(
            "max-w-screen-xl mx-auto p-4",
            "flex",
            "flex-col",
            "gap-14",
            "flex-wrap",
            "pt-20"
          )}>
          <h2
            className={cx(
              "contact-title",
              "text-white",
              "text-4xl",
              "flex",
              "items-center",
              "flex-col",
              "w-full"
            )}>
            Request A Viewing
            <span
              className={cx(
                "descript",

                "text-sm",
                "w-6/12",
                "mt-5",
                "text-center"
              )}>
              Trage agile frameworks to provide a robust synopsis for high level
              overviews.Iterative approaches to corporate strategy foster
              collaborative thinking.
            </span>
          </h2>
          <div className={cx("flex", "justify-center", "gap-5", "w-full")}>
            <div className={cx("contact-form", "basis-10/12", "lg:basis-6/12")}>
              <form className={cx("w-full", "flex", "flex-col", "gap-3")}>
                <input
                  type="text"
                  placeholder="Your Name"
                  className={cx("w-full", "py-2", "border", "border-gray-300")}
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className={cx(
                    "w-full",
                    "py-2",
                    "border",
                    "border-gray-300",
                    "mt-4"
                  )}
                />
                <div
                  className={cx(
                    "group",
                    "flex",
                    "flex-col",
                    "lg:flex-row",
                    "gap-5"
                  )}>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className={cx(
                      "w-full",
                      "py-2",
                      "border",
                      "border-gray-300",
                      "mt-4"
                    )}
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className={cx(
                      "w-full",
                      "py-2",
                      "border",
                      "border-gray-300",
                      "mt-4"
                    )}
                  />
                </div>
                <textarea
                  placeholder="Your Message"
                  className={cx(
                    "w-full",
                    "py-2",
                    "border",
                    "border-gray-300",
                    "mt-4"
                  )}></textarea>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <button className="text-white bg-custom-beige w-2/5 px-4 py-2 mb-5 ">
            Submit Request
          </button>
        </div>
      </div>
      {/*end-form điền thông tin */}
      <FollowUs />
    </>
  );
}
