"use client";
import FollowUs from "../components/followus/followus";

import "@fortawesome/fontawesome-free/css/all.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { Icon } from "@iconify/react/dist/iconify.js";
import styles from "../home.module.css";
import style from "./developer.module.css";

import classNames from "classnames/bind";
const cx = classNames.bind(styles);

export default function Page() {
  return (
    <>
      <div className="bg-black flex justify-center items-center min-h-screen">
        <div className="container mx-auto flex flex-col md:flex-row items-center px-4 py-10">
          <div className="image-container flex-1 text-center">
            <img
              src="https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Earth/Beauly%20-%20Single%20Property%20HTML%20Template/Template/assets/img/images/about-img-2.jpg"
              alt="Image"
              className="w-[518px] mx-auto"
            />
          </div>
          <div className="text-container flex-1 pl-0 md:pl-10 mt-6 md:mt-0">
            <div className="flex mb-5 items-center">
              <svg
                className="mr-2"
                xmlns="http://www.w3.org/2000/svg"
                width="40px"
                height="40px"
                viewBox="0 0 512 512">
                <path
                  fill="none"
                  stroke="#c37f09"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="32"
                  d="M80 212v236a16 16 0 0 0 16 16h96V328a24 24 0 0 1 24-24h80a24 24 0 0 1 24 24v136h96a16 16 0 0 0 16-16V212"
                />
                <path
                  fill="none"
                  stroke="#c37f09"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="51"
                  d="M480 256L266.89 52c-5-5.28-16.69-5.34-21.78 0L32 256m368-77V64h-48v69"
                />
              </svg>
              <h2 className="text-md text-custom-beige text-2xl">
                Welcome to Beauty
              </h2>
            </div>
            <h1 className="text-3xl text-white font-bold mt-2">
              The Building Realty
            </h1>
            <h1 className="text-3xl text-white font-bold">& Services</h1>
            <p className="text-white mt-5 text-xs leading-relaxed">
              We are a team of experienced professionals dedicated to providing
              you with the best possible real estate services. Our passion for
              real estate, combined with our expertise and knowledge of the
              market, enables us to deliver exceptional results for our clients.
              We pride ourselves on our customer service, and we strive to
              exceed your expectations every step of the way. We are available
              to answer any questions you may have and provide you with the
              information you need to make informed decisions
            </p>
            <a
              href="#"
              className="inline-block mt-6 bg-yellow-500 text-white py-3 px-6 rounded-lg transition duration-300 hover:bg-yellow-400">
              Get In Touch →
            </a>
          </div>
        </div>
      </div>

      <div className="bg-gray-900 flex justify-center items-center min-h-screen">
        {/* Team Section */}
        {/* Our Team Section */}
        <section className="bg-[#1a1a1a] w-full text-[#cfcfcf] py-16 text-center">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-[55px] text-3xl mb-4 text-white font-serif">
              Our Team of Experts
            </h2>

            <p className="text-lg mb-8 w-[620px] text-[17px] text-center mx-auto">
              Trage agile frameworks to provide a robust synopsis for high level
              overviews. Iterative approaches to corporate strategy foster
              collaboration.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 items-center justify-center">
              {/* Team Member 1 */}
              <div
                className={`${style["team-item"]} bg-[#1a1b1d] p-0 border border-gray-400`}>
                <img
                  className="h-[350px] sm:h-[400px] lg:h-[494px] w-full object-cover mx-auto"
                  src="/images/image/416x414/team-2.jpg"
                  alt="Riyan Parag"
                />
                <div className="p-4">
                  <h3 className="mt-2 text-xl font-bold text-white">
                    Riyan Parag
                  </h3>
                  <p>Agent</p>
                </div>
                {/* Icons */}
                <div className={style["team-social"]}>
                  <a href="#">
                    <FontAwesomeIcon icon={faFacebookF} />
                  </a>
                  <a href="#">
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                  <a href="#">
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                  <a href="#">
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                </div>
              </div>

              {/* Team Member 2 */}
              <div
                className={`${style["team-item"]} bg-[#1a1b1d] p-0 border border-gray-400`}>
                <img
                  className="h-[350px] sm:h-[400px] lg:h-[494px] w-full object-cover mx-auto"
                  src="/images/image/416x414/team-2.jpg"
                  alt="Albert Mills"
                />
                <div className="p-4">
                  <h3 className="mt-2 text-xl font-bold text-white">
                    Albert Mills
                  </h3>
                  <p>Co-Founder</p>
                </div>
                {/* Icons */}
                <div className={style["team-social"]}>
                  <a href="#">
                    <FontAwesomeIcon icon={faFacebookF} />
                  </a>
                  <a href="#">
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                  <a href="#">
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                  <a href="#">
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                </div>
              </div>

              {/* Team Member 3 */}
              <div
                className={`${style["team-item"]} bg-[#1a1b1d] p-0 border border-gray-400`}>
                <img
                  className="h-[350px] sm:h-[400px] lg:h-[494px] w-full object-cover mx-auto"
                  src="/images/image/416x414/team-2.jpg"
                  alt="David William"
                />
                <div className="p-4">
                  <h3 className="mt-2 text-xl font-bold text-white">
                    David William
                  </h3>
                  <p>Main Architect</p>
                </div>
                {/* Icons */}
                <div className={style["team-social"]}>
                  <a href="#">
                    <FontAwesomeIcon icon={faFacebookF} />
                  </a>
                  <a href="#">
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                  <a href="#">
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                  <a href="#">
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className={cx("box-color", "w-full", "py-16")}>
        <div
          className={cx(
            "max-w-screen-xl mx-auto p-4",
            "flex",
            "flex-wrap",
            "justify-between"
          )}>
          <div
            className={cx(
              "sub",
              "basis-full",
              "lg:basis-1/2",
              "flex",
              "flex-col",
              "justify-start",
              "gap-3",
              "pl-2",
              "mb-3"
            )}>
            <div className={cx("title", "text-lg")}>Apartments Amenities</div>
            <div className={cx("highlight", "w-10/12", "mb-1")}>
              Outstanding way of luxury life
            </div>
            <Link
              href={""}
              className={cx(
                "btn-header",
                "hidden",
                "lg:flex",
                "items-center",
                "justify-center",
                "gap-1",
                "h-fit",
                "py-2", // Giảm padding
                "px-5", // Giảm padding
                "text-white",
                "w-2/5"
              )}>
              Schedule a Visit
              <FontAwesomeIcon icon={faArrowRight} className={cx("w-3")} />
            </Link>
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
                  icon="solar:home-outline"
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
                Smart Homes
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
                  icon="weui:location-outlined"
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
                Atractive Location
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

      <FollowUs />
    </>
  );
}
