"use client";
import FollowUs from "../components/followus/followus";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Icon } from "@iconify/react/dist/iconify.js";
import styles from "../home.module.css";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);
export default function Page() {
  return (
    <>
      <div className="container bg-black max-w-full mx-auto flex flex-col md:flex-row items-center px-4 py-10">
        <div className="image-container flex-1 text-center">
          <img
            src="https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Earth/Beauly%20-%20Single%20Property%20HTML%20Template/Template/assets/img/images/about-img-2.jpg"
            alt="Image"
            className="w-[518px] mx-auto"
          />
        </div>
        <div className="text-container flex-1 pl-0 md:pl-10 mt-6 md:mt-0">
          <div className="flex mb-5 items-center">
            <path
              fill="none"
              stroke="#c37f09"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="32"
              d="M80 212v236a16 16 0 0 0 16 16h96V328a24 24 0 0 1 24-24h80a24 24 0 0 1 24 24v136h96a16 16 0 0 0 16-16V212"
            />
            <path
              fill="none"
              stroke="#c37f09"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="51"
              d="M480 256L266.89 52c-5-5.28-16.69-5.34-21.78 0L32 256m368-77V64h-48v69"
            />
            <h2 className="text-md text-lg text-yellow-300">
              Leading Real Estate Agent in The City
            </h2>
          </div>
          <h1 className="text-3xl text-white font-bold mt-2">Curtis Campher</h1>
          <p className="text-white text-xs mt-4 leading-relaxed">
            Quisque dignissim enim diam, eget pulvinar ex viverra id . Nulla a
            lobortis lectus, id volutpat magna. Morbi consequat porttitor
            fermentum. Nulla vestibulum tincidunt viverra. Vestibulum accumsan
            molestie lorem, non laoreet massa. Duis at dui sem. Vivamus ut
            gravida libero Quisque dignissim enim diam, eget pulvinar ex viverra
            id. Nulla a lobortisQuisdignissim enim diam, eget pulvinar ex
            viverra id. Nulla a lobortis lectus, id volutpat magna. Morbti
            consequat porttitor fermentum. Nulla vestibulum tincidunt
          </p>
          <img
            src="https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Earth/Beauly%20-%20Single%20Property%20HTML%20Template/Template/assets/img/icon/sign.png"
            className="inline-block mt-6 text-white py-3 px-6 rounded-lg transition duration-300"
            alt="Signature"
          />
        </div>
      </div>

      <div className="container w-full bg-bleck mx-auto p-10">
        <div className={cx("title-boxApartment", "mb-5")}>
          <div className={cx("text-white", "text-6xl", "lg:text-4xl", "mb-3")}>
            Choose An Apartment
          </div>
          <p className={cx("w-full", "w-full", "px-1", "mb-3")}>
            Trage agile frameworks to provide a robust synopsis for high level
            overviews.Iterative approaches to corporate strategy foster collabo
          </p>

          <div
            className={cx(
              "boxApartment",
              "flex",
              "justify-center",
              "lg:justify-between",
              "flex-wrap",
              "gap-1"
            )}>
            <div className={cx("Apartment-item", "mb-3")}>
              <div className={cx("image", "w-full")}>
                <img
                  src="https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Earth/Beauly%20-%20Single%20Property%20HTML%20Template/Template/assets/img/project/project-1.jpg"
                  alt="Apartment 1"
                />
              </div>
              <div className={cx("content", "p-5")}>
                <h3
                  className={cx(
                    "text-white",
                    "text-left",
                    "text-2xl",
                    "lg:text-lg",
                    "pb-3"
                  )}>
                  Futuristic House
                </h3>
                <ul className={cx("flex", "gap-4")}>
                  <li
                    className={cx(
                      "flex",
                      "items-center",
                      "gap-1",
                      "color-sub",
                      "text-xs"
                    )}>
                    <Icon
                      icon="material-symbols-light:bed-outline"
                      className={cx("icon-svg", "w-5", "h-5")}
                    />
                    x2
                  </li>
                  <li
                    className={cx(
                      "flex",
                      "items-center",
                      "gap-1",
                      "color-sub",
                      "text-xs"
                    )}>
                    <Icon
                      icon="ph:bathtub"
                      className={cx("icon-svg", "w-4", "h-4")}
                    />
                    x3
                  </li>
                  <li
                    className={cx(
                      "flex",
                      "items-center",
                      "gap-1",
                      "color-sub",
                      "text-xs"
                    )}>
                    <Icon
                      icon="lineicons:full-screen"
                      className={cx("icon-svg", "w-4", "h-4")}
                    />
                    1200 sq
                  </li>
                </ul>
              </div>
            </div>
            <div className={cx("Apartment-item", "mb-3", "relative")}>
              <div
                className={cx(
                  "box-new",
                  "absolute",
                  "z-30",
                  "right-2",
                  "top-3",
                  "px-3",
                  "py-1",
                  "text-white",
                  "text-sm"
                )}>
                New
              </div>
              <div className={cx("image", "w-full")}>
                <img
                  src="https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Earth/Beauly%20-%20Single%20Property%20HTML%20Template/Template/assets/img/project/project-1.jpg"
                  alt="Apartment 1"
                />
              </div>
              <div className={cx("content", "p-5")}>
                <h3
                  className={cx(
                    "text-white",
                    "text-left",
                    "text-2xl",
                    "lg:text-lg",
                    "pb-3"
                  )}>
                  Duplex Apartment
                </h3>
                <ul className={cx("flex", "gap-4")}>
                  <li
                    className={cx(
                      "flex",
                      "items-center",
                      "gap-1",
                      "color-sub",
                      "text-xs"
                    )}>
                    <Icon
                      icon="material-symbols-light:bed-outline"
                      className={cx("icon-svg", "w-5", "h-5")}
                    />
                    x2
                  </li>
                  <li
                    className={cx(
                      "flex",
                      "items-center",
                      "gap-1",
                      "color-sub",
                      "text-xs"
                    )}>
                    <Icon
                      icon="ph:bathtub"
                      className={cx("icon-svg", "w-4", "h-4")}
                    />
                    x3
                  </li>
                  <li
                    className={cx(
                      "flex",
                      "items-center",
                      "gap-1",
                      "color-sub",
                      "text-xs"
                    )}>
                    <Icon
                      icon="lineicons:full-screen"
                      className={cx("icon-svg", "w-4", "h-4")}
                    />
                    1200 sq
                  </li>
                </ul>
              </div>
            </div>
            <div className={cx("Apartment-item", "mb-3")}>
              <div className={cx("image", "w-full")}>
                <img
                  src="https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Earth/Beauly%20-%20Single%20Property%20HTML%20Template/Template/assets/img/project/project-1.jpg"
                  alt="Apartment 1"
                />
              </div>
              <div className={cx("content", "p-5")}>
                <h3
                  className={cx(
                    "text-white",
                    "text-left",
                    "text-2xl",
                    "lg:text-lg",
                    "pb-3"
                  )}>
                  Modern House
                </h3>
                <ul className={cx("flex", "gap-4")}>
                  <li
                    className={cx(
                      "flex",
                      "items-center",
                      "gap-1",
                      "color-sub",
                      "text-xs"
                    )}>
                    <Icon
                      icon="material-symbols-light:bed-outline"
                      className={cx("icon-svg", "w-5", "h-5")}
                    />
                    x2
                  </li>
                  <li
                    className={cx(
                      "flex",
                      "items-center",
                      "gap-1",
                      "color-sub",
                      "text-xs"
                    )}>
                    <Icon
                      icon="ph:bathtub"
                      className={cx("icon-svg", "w-4", "h-4")}
                    />
                    x3
                  </li>
                  <li
                    className={cx(
                      "flex",
                      "items-center",
                      "gap-1",
                      "color-sub",
                      "text-xs"
                    )}>
                    <Icon
                      icon="lineicons:full-screen"
                      className={cx("icon-svg", "w-4", "h-4")}
                    />
                    1200 sq
                  </li>
                </ul>
              </div>
            </div>
            <div className={cx("Apartment-item", "mb-3")}>
              <div className={cx("image", "w-full")}>
                <img
                  src="https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Earth/Beauly%20-%20Single%20Property%20HTML%20Template/Template/assets/img/project/project-1.jpg"
                  alt="Apartment 1"
                />
              </div>
              <div className={cx("content", "p-5")}>
                <h3
                  className={cx(
                    "text-white",
                    "text-left",
                    "text-2xl",
                    "lg:text-lg",
                    "pb-3"
                  )}>
                  Luxury Apartments
                </h3>
                <ul className={cx("flex", "gap-4")}>
                  <li
                    className={cx(
                      "flex",
                      "items-center",
                      "gap-1",
                      "color-sub",
                      "text-xs"
                    )}>
                    <Icon
                      icon="material-symbols-light:bed-outline"
                      className={cx("icon-svg", "w-5", "h-5")}
                    />
                    x2
                  </li>
                  <li
                    className={cx(
                      "flex",
                      "items-center",
                      "gap-1",
                      "color-sub",
                      "text-xs"
                    )}>
                    <Icon
                      icon="ph:bathtub"
                      className={cx("icon-svg", "w-4", "h-4")}
                    />
                    x3
                  </li>
                  <li
                    className={cx(
                      "flex",
                      "items-center",
                      "gap-1",
                      "color-sub",
                      "text-xs"
                    )}>
                    <Icon
                      icon="lineicons:full-screen"
                      className={cx("icon-svg", "w-4", "h-4")}
                    />
                    1200 sq
                  </li>
                </ul>
              </div>
            </div>
            <div className={cx("Apartment-item", "mb-3")}>
              <div className={cx("image", "w-full")}>
                <img
                  src="https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Earth/Beauly%20-%20Single%20Property%20HTML%20Template/Template/assets/img/project/project-1.jpg"
                  alt="Apartment 1"
                />
              </div>
              <div className={cx("content", "p-5")}>
                <h3
                  className={cx(
                    "text-white",
                    "text-left",
                    "text-2xl",
                    "lg:text-lg",
                    "pb-3"
                  )}>
                  Apartment Block
                </h3>
                <ul className={cx("flex", "gap-4")}>
                  <li
                    className={cx(
                      "flex",
                      "items-center",
                      "gap-1",
                      "color-sub",
                      "text-xs"
                    )}>
                    <Icon
                      icon="material-symbols-light:bed-outline"
                      className={cx("icon-svg", "w-5", "h-5")}
                    />
                    x2
                  </li>
                  <li
                    className={cx(
                      "flex",
                      "items-center",
                      "gap-1",
                      "color-sub",
                      "text-xs"
                    )}>
                    <Icon
                      icon="ph:bathtub"
                      className={cx("icon-svg", "w-4", "h-4")}
                    />
                    x3
                  </li>
                  <li
                    className={cx(
                      "flex",
                      "items-center",
                      "gap-1",
                      "color-sub",
                      "text-xs"
                    )}>
                    <Icon
                      icon="lineicons:full-screen"
                      className={cx("icon-svg", "w-4", "h-4")}
                    />
                    1200 sq
                  </li>
                </ul>
              </div>
            </div>
            <div className={cx("Apartment-item", "mb-3")}>
              <div className={cx("image", "w-full")}>
                <img
                  src="https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Earth/Beauly%20-%20Single%20Property%20HTML%20Template/Template/assets/img/project/project-1.jpg"
                  alt="Apartment 1"
                />
              </div>
              <div className={cx("content", "p-5")}>
                <h3
                  className={cx(
                    "text-white",
                    "text-left",
                    "text-2xl",
                    "lg:text-lg",
                    "pb-3"
                  )}>
                  South Complex
                </h3>
                <ul className={cx("flex", "gap-4")}>
                  <li
                    className={cx(
                      "flex",
                      "items-center",
                      "gap-1",
                      "color-sub",
                      "text-xs"
                    )}>
                    <Icon
                      icon="material-symbols-light:bed-outline"
                      className={cx("icon-svg", "w-5", "h-5")}
                    />
                    x2
                  </li>
                  <li
                    className={cx(
                      "flex",
                      "items-center",
                      "gap-1",
                      "color-sub",
                      "text-xs"
                    )}>
                    <Icon
                      icon="ph:bathtub"
                      className={cx("icon-svg", "w-4", "h-4")}
                    />
                    x3
                  </li>
                  <li
                    className={cx(
                      "flex",
                      "items-center",
                      "gap-1",
                      "color-sub",
                      "text-xs"
                    )}>
                    <Icon
                      icon="lineicons:full-screen"
                      className={cx("icon-svg", "w-4", "h-4")}
                    />
                    1200 sq
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* {icon} */}
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
      {/* Follow Us Section */}
      <FollowUs />
    </>
  );
}
