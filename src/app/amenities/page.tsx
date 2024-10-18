"use client";
import FollowUs from "../components/followus/followus";
import classNames from "classnames/bind";
import styles from "../home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { Icon } from "@iconify/react/dist/iconify.js";
const cx = classNames.bind(styles);
export default function Amenities() {
  let currentIndex = 0;

  function showSlide(index: number) {
    const slides = document.querySelectorAll("#carousel > div");
    const totalSlides = slides.length;
    currentIndex = (index + totalSlides) % totalSlides; // Wrap around
    const offset = -currentIndex * 100; // Calculate offset
    const carousel = document.getElementById("carousel");
    if (carousel) {
      carousel.style.transform = `translateX(${offset}%)`;
    }
  }

  function nextSlide() {
    showSlide(currentIndex + 1);
  }

  function prevSlide() {
    showSlide(currentIndex - 1);
  }
  return (
    <div className="">
      <section className="All_You bg-buy_property py-[120px]">
        <div className="heading_textcenter max-sm:px-[12px]">
          <h2 className="text-white font-Old_Standard_TT text-[32px] sm:text-[44px] xl:text-fontSize_Looking text-center mb-5 font-extrabold">
            All You May Need is Here
          </h2>
          <p className="max-w-[620px] mx-auto text-center font-Jost text-title_follow_us max-sm:text-[16px] text-[18px] font-normal w-full">
            Trage agile frameworks to provide a robust synopsis for high level
            overviews. Iterative approaches to corporate strategy foster collabo
          </p>
          <div className="relative w-full max-w-2xl mx-auto mt-[60px]">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-300"
                id="carousel"
              >
                <div className="min-w-full">
                  <img
                    src="images/amenities/1030X620.jpg"
                    alt="Image 1"
                    className="w-full h-auto"
                  />
                </div>
                <div className="min-w-full">
                  <img
                    src="images/amenities/1030X613.jpg"
                    alt="Image 2"
                    className="w-full h-auto"
                  />
                </div>
                <div className="min-w-full">
                  <img
                    src="images/amenities/1030X620.jpg"
                    alt="Image 1"
                    className="w-full h-auto"
                  />
                </div>
                <div className="min-w-full">
                  <img
                    src="images/amenities/1030X613.jpg"
                    alt="Image 2"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
            <button
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg"
              onClick={() => prevSlide()}
            >
              ❮
            </button>
            <button
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg"
              onClick={() => nextSlide()}
            >
              ❯
            </button>
          </div>
        </div>
      </section>
      {/* <section className="flex flex-col bg-follow_us py-20 ">
        <div className="flex flex-col md:flex-row mx-auto">
          <div className="lg:max-w-md max-md:mb-[60px] max-sm:px-[12px] max-sm:max-w-full max-md:max-w-[720px] max-md:mx-[30px]">
            <h2 className="text-title_buy_property font-semibold font-Old_Standard_TT text-[24px] mb-4 max-sm:mb-[15px] max-sm:text-[22px]">
              Apartments Amenities
            </h2>
            <h4 className="text-white text-fontSize_Looking font-Old_Standard_TT max-md:w-full font-semibold mb-6 leading-tight max-md:text-[40px] max-sm:text-[28px]">
              Outstanding way of luxury life
            </h4>
            <a
              href=""
              className="text-white font-medium py-3 px-4 bg-follow_a text-base leading-6"
            >
              Schedule A visit{" "}
              <i className="fa-light fa-arrow-right-long ml-2"></i>
            </a>
          </div>

          <div className="flex max-sm:flex-col max-md:flex-row justify-between lg:gap-x-10 ">
            <div className="flex flex-col items-center w-1/2 max-sm:mx-auto max-md:mb-[40px]">
              <img
                src="images/amenities/smart_house.png"
                alt=""
                className="h-20 w-20"
              />
              <h3 className="py-4 text-center">
                <a
                  href=""
                  className="text-white text-center font-Jost text-xl max-md:text-[24px]"
                >
                  Smart Homes
                </a>
              </h3>
              <p className="text-center text-title_follow_us text-xs lg:w-[300px] font-Old_Standard_TT max-md:text-[16px] max-md:font-normal max-md:leading-[20px]">
                Immigration advisory visa a foundation was establishe with a
                ideaImmigration advisory visa a foundation
              </p>
            </div>

            <div className="flex flex-col items-center w-1/2 max-sm:mx-auto max-md:mb-[40px]">
              <img
                src="images/amenities/location.png"
                alt=""
                className="h-20 w-20"
              />
              <h3 className="py-4 text-center">
                <a
                  href=""
                  className="text-white text-center font-Jost text-xl max-md:text-[24px]"
                >
                  Atractive Location
                </a>
              </h3>
              <p className="text-center text-title_follow_us text-xs lg:w-[300px]  font-Old_Standard_TT max-md:text-[16px] max-md:font-normal max-md:leading-[20px]">
                Immigration advisory visa a foundation was establishe with a
                ideaImmigration advisory visa a foundation
              </p>
            </div>
          </div>
        </div>

        <div className="grid max-sm:grid-cols-1 max-md:grid-cols-2 lg:grid-cols-4 mt-10 gap-y-10 gap-x-6">
          <div className="swimming flex flex-col items-center">
            <img
              src="images/amenities/swimming.png"
              alt="Swimming Pool"
              className="h-20 w-20"
            />
            <h3 className="py-4 text-center">
              <a href="" className="text-white text-center font-Jost text-xl">
                Swimming Pool
              </a>
            </h3>
            <p className="text-center text-title_follow_us text-xs w-[300px] max-md:text-[16px] max-md:font-normal max-md:leading-[20px]">
              Immigration advisory visa a foundation was establishe with a
              ideaImmigration advisory visa a foundation
            </p>
          </div>

          <div className="fast_speed_wifi flex flex-col items-center">
            <img
              src="images/amenities/fast_wifi.png"
              alt="Fast Speed WI-FI"
              className="h-20 w-20"
            />
            <h3 className="py-4 text-center">
              <a href="" className="text-white text-center font-Jost text-xl">
                Fast Speed WI-FI
              </a>
            </h3>
            <p className="text-center text-title_follow_us text-xs w-[300px] max-md:text-[16px] max-md:font-normal max-md:leading-[20px]">
              Immigration advisory visa a foundation was establishe with a
              ideaImmigration advisory visa a foundation
            </p>
          </div>

          <div className="car flex flex-col items-center">
            <img
              src="images/amenities/car.png"
              alt="Parking Space"
              className="h-20 w-20"
            />
            <h3 className="py-4 text-center">
              <a href="" className="text-white text-center font-Jost text-xl">
                Parking Space
              </a>
            </h3>
            <p className="text-center text-title_follow_us text-xs w-[300px] max-md:text-[16px] max-md:font-normal max-md:leading-[20px]">
              Immigration advisory visa a foundation was establishe with a
              ideaImmigration advisory visa a foundation
            </p>
          </div>

          <div className="fitness flex flex-col items-center">
            <img
              src="images/amenities/fitness.png"
              alt="Fitness Center"
              className="h-20 w-20"
            />
            <h3 className="py-4 text-center">
              <a href="" className="text-white text-center font-Jost text-xl">
                Fitness Center
              </a>
            </h3>
            <p className="text-center text-title_follow_us text-xs w-[300px] max-md:text-[16px] max-md:font-normal max-md:leading-[20px]">
              Immigration advisory visa a foundation was establishe with a
              ideaImmigration advisory visa a foundation
            </p>
          </div>
        </div>
      </section> */}
      <div className={cx("box-color", "w-full", "py-16")}>
        <div
          className={cx(
            "max-w-screen-xl mx-auto p-4",
            "flex",
            "flex-wrap",
            "justify-between"
          )}
        >
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
            )}
          >
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
              )}
            >
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
            )}
          >
            <div
              className={cx(
                "flex",
                "flex-col",
                "items-center",
                "gap-4",
                "py-9",
                "px-4"
              )}
            >
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
                )}
              >
                Smart Homes
              </div>
              <div
                className={cx(
                  "text-slate-200",
                  "text-sub",
                  "text-lg",
                  "lg:text-xs",
                  "text-center"
                )}
              >
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
            )}
          >
            <div
              className={cx(
                "flex",
                "flex-col",
                "items-center",
                "gap-4",
                "py-9",
                "px-4"
              )}
            >
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
                )}
              >
                Atractive Location
              </div>
              <div
                className={cx(
                  "text-slate-200",
                  "text-sub",
                  "text-lg",
                  "lg:text-xs",
                  "text-center"
                )}
              >
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
            )}
          >
            <div
              className={cx(
                "flex",
                "flex-col",
                "items-center",
                "gap-4",
                "py-9",
                "px-4"
              )}
            >
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
                )}
              >
                Swimming Pool
              </div>
              <div
                className={cx(
                  "text-slate-200",
                  "text-sub",
                  "text-lg",
                  "lg:text-xs",
                  "text-center"
                )}
              >
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
            )}
          >
            <div
              className={cx(
                "flex",
                "flex-col",
                "items-center",
                "gap-4",
                "py-9",
                "px-4"
              )}
            >
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
                )}
              >
                Fast Speed WI-FI
              </div>
              <div
                className={cx(
                  "text-slate-200",
                  "text-sub",
                  "text-lg",
                  "lg:text-xs",
                  "text-center"
                )}
              >
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
            )}
          >
            <div
              className={cx(
                "flex",
                "flex-col",
                "items-center",
                "gap-4",
                "py-9",
                "px-4"
              )}
            >
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
                )}
              >
                Parking Space
              </div>
              <div
                className={cx(
                  "text-slate-200",
                  "text-sub",
                  "text-lg",
                  "lg:text-xs",
                  "text-center"
                )}
              >
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
            )}
          >
            <div
              className={cx(
                "flex",
                "flex-col",
                "items-center",
                "gap-4",
                "py-9",
                "px-4"
              )}
            >
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
                )}
              >
                Fitness Center
              </div>
              <div
                className={cx(
                  "text-slate-200",
                  "text-sub",
                  "text-lg",
                  "lg:text-xs",
                  "text-center"
                )}
              >
                Immigration advisory visa a foundation was establishe with a
                ideaImmigration advisory visa a foundation
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="request_a_viewing bg-buy_property py-[120px]">
        <div className="heading_textcenter max-sm:px-[12px]">
          {" "}
          <h2 className="text-white font-Old_Standard_TT text-[32px] sm:text-[44px] xl:text-fontSize_Looking text-center mb-5 font-extrabold">
            Request A Viewing
          </h2>
          <p className="max-w-[620px] mx-auto text-center font-Jost text-title_follow_us max-sm:text-[16px] text-[18px] font-normal w-full">
            Trage agile frameworks to provide a robust synopsis for high level
            overviews. Iterative approaches to corporate strategy foster collabo
          </p>
        </div>

        <div className="max-w-[650px] mx-auto mt-8">
          <div className="max-sm:px-[50px] shadow-md">
            <div className="mb-6">
              <input
                type="text"
                id="fullName"
                className="w-full p-2 max-sm:p-[15px] bg-bg_dark2 border-2 border-border_form tracking-placehoder text-xs max-sm:text-[1rem]"
                placeholder="Full Name*"
                required
              />
            </div>
            <div className="mb-6">
              <input
                type="email"
                id="email"
                className="w-full p-2 max-sm:p-[15px] bg-bg_dark2 border-2 border-border_form tracking-placehoder text-xs max-sm:text-[1rem]"
                placeholder="E-mail*"
                required
              />
            </div>
            <div className="mb-6 flex gap-4 justify-between">
              <input
                type="tel"
                id="phone"
                className="w-full p-2 max-sm:p-[15px] bg-bg_dark2 border-2 border-border_form tracking-placehoder text-xs max-sm:text-[1rem]"
                placeholder="Phone*"
                required
              />

              <input
                type="tel"
                id="phone"
                className="w-full p-2 max-sm:p-[15px] bg-bg_dark2 border-2 border-border_form tracking-placehoder text-xs max-sm:text-[1rem]"
                placeholder="Select Time"
                required
              />
            </div>
            <div className="mb-6">
              <textarea
                id="message"
                className="w-full p-2 max-sm:p-[15px] bg-bg_dark2 border-2 border-border_form tracking-placehoder text-xs max-sm:h-[120px]"
                placeholder="Message"
                rows={4}
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-btn_amenities text-white p-2 max-sm:text-[15px] max-sm:py-[10px]"
            >
              Submit Request
            </button>
          </div>
        </div>
      </section>
      <FollowUs />
    </div>
  );
}
