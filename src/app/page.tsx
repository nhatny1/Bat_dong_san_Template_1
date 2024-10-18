import classNames from "classnames/bind";
import styles from "./home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons/faLocationDot";
import Link from "next/link";
import { Icon } from "@iconify/react/dist/iconify.js";
import Gallery from "./components/Gallery";

import Interactive from "./components/Interactive";
import FollowUs from "./components/followus/followus";
const cx = classNames.bind(styles);
export default function Home() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("h-screen", "w-full", "mb-14")}>
        <div className={cx("banner", "h-full", "w-full")}>
          <div className={cx("banner-left", "w-full", "lg:w-1/2", "p-7")}>
            <div className={cx("top-content")}>
              <div className={cx("item")}>
                <div className={cx("icon")}>
                  <Icon
                    icon="solar:home-outline"
                    className={cx("w-5", "h-5")}
                  />
                </div>
                <h4 className={cx("icon")}>40 Apartments</h4>
              </div>
              <div className={cx("item")}>
                <div className={cx("icon")}>
                  <Icon
                    icon="lineicons:full-screen"
                    className={cx("w-5", "h-5")}
                  />
                </div>
                <h4 className={cx("icon")}>40 Apartments</h4>
              </div>
            </div>
            <div className={cx("mid-content")}>
              <h2>Beautiful Spaces In The Best Places</h2>
              <p className={cx("text-xl", "lg:text-xs")}>
                Quisque dignissim enim diam, eget pulvinar ex viverra id. Nulla
                a lobortis lectus, id volutpat magna. Morbi consequat porttitor
                fermentum.
              </p>
            </div>
            <div
              className={cx(
                "bottom-content",
                "w-full",
                "lg:w-fit",
                "text-sm",
                "lg:w-lg",
                "flex",
                "gap-2"
              )}
            >
              <Icon icon="mdi:location" className={cx("w-5", "h-5")} />
              San Francisco, CA 33 8th at Trinity Place
            </div>
          </div>
          <div className={cx("banner-right", "hidden", "lg:block", "h-full")}>
            <div className={cx("box-size")}>
              <div className={cx("size")}>93x93</div>
              <div className={cx("flex", "flex-col")}>
                South Complex{" "}
                <span className={cx("font-bold")}>$ 1,700,000</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto p-4">
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
            )}
          >
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
                  )}
                >
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
                    )}
                  >
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
                    )}
                  >
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
                    )}
                  >
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
                )}
              >
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
                  )}
                >
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
                    )}
                  >
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
                    )}
                  >
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
                    )}
                  >
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
                  )}
                >
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
                    )}
                  >
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
                    )}
                  >
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
                    )}
                  >
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
                  )}
                >
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
                    )}
                  >
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
                    )}
                  >
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
                    )}
                  >
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
                  )}
                >
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
                    )}
                  >
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
                    )}
                  >
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
                    )}
                  >
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
                  )}
                >
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
                    )}
                  >
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
                    )}
                  >
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
                    )}
                  >
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
                "sub-content",
                "flex",
                "flex-col",
                "items-center",
                "border",
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
                "sub-content",
                "flex",
                "flex-col",
                "items-center",
                "border",
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
                "sub-content",
                "flex",
                "flex-col",
                "items-center",
                "border",
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
                "sub-content",
                "flex",
                "flex-col",
                "items-center",
                "border",
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
                "sub-content",
                "flex",
                "flex-col",
                "items-center",
                "border",
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
                "sub-content",
                "flex",
                "flex-col",
                "items-center",
                "border",
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
      <div>
        <div
          className={cx(
            "max-w-screen-xl mx-auto p-4",
            "flex",
            "flex-wrap",
            "justify-between",
            "py-28"
          )}
        >
          <Gallery></Gallery>
        </div>
      </div>

      <Interactive></Interactive>

      <div className={cx("max-w-screen-xl mx-auto p-4", "py-16", "box-log")}>
        <h2
          className={cx(
            "pt-8",
            "contact-title",
            "text-white",
            "text-4xl",
            "flex",
            "items-center",
            "flex-col",
            "w-full",
            "pb-10"
          )}
        >
          Latest News Updates
          <span
            className={cx(
              "descript",
              "color-sub",
              "text-sm",
              "w-6/12",
              "mt-5",
              "text-center"
            )}
          >
            Trage agile frameworks to provide a robust synopsis for high level
            overviews. Iterative approaches to corporate strategy foster collabo
          </span>
        </h2>
        <div className={cx("content-blog", "flex", "flex-wrap")}>
          <div
            className={cx(
              "blog-left",
              "flex",
              "px-3",
              "pb-3",
              "basis-full",
              "lg:basis-1/2"
            )}
          >
            <div className={cx("box-post-thumb")}>
              <div className={cx("post-thumb")}>
                <img
                  src={
                    "https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Earth/Beauly%20-%20Single%20Property%20HTML%20Template/Template/assets/img/blog/post-1.jpg"
                  }
                  alt="blog"
                  className={cx("w-full")}
                />
              </div>
              <div className={cx("post-content", "p-7")}>
                <div className={cx("post-meta", "pb-3")}>
                  <ul className={cx("flex", "gap-6")}>
                    <li
                      className={cx(
                        "flex",
                        "items-center",
                        "gap-1",
                        "color-sub",
                        "text-xs"
                      )}
                    >
                      <Icon
                        icon="guidance:user-1"
                        className={cx("icon-svg", "w-4", "h-4")}
                      />
                      by
                      <Link href={""}> Admin</Link>
                    </li>
                    <li
                      className={cx(
                        "flex",
                        "items-center",
                        "gap-1",
                        "color-sub",
                        "text-xs"
                      )}
                    >
                      <Icon
                        icon="mynaui:message"
                        className={cx("icon-svg", "w-4", "h-4")}
                      />
                      Comment (5)
                    </li>
                  </ul>
                </div>
                <Link
                  href={""}
                  className={cx(
                    "text-lg",
                    "block",
                    "text-white",
                    "underline",
                    "w-9/12",
                    "pb-4"
                  )}
                >
                  Vital Tips For Block chain Products with Warranty.
                </Link>
                <p
                  className={cx(
                    "block",
                    "text-white",
                    "text-xs",
                    "color-sub",
                    "w-9/12"
                  )}
                >
                  Lorem ipsum dolor sit amet, atomorum posidon ium est ad. Id
                  vim errem princi pes, no suas molesti interpretarisLorm ipsum
                  dolor sit amet, atomorum posidon
                </p>
              </div>
            </div>
          </div>
          <div
            className={cx(
              "blog-right",
              "flex",
              "flex-col",
              "gap-1",
              "lg:justify-between",
              "basis-full",
              "lg:basis-1/2",
              "px-3",
              "pb-3"
            )}
          >
            <div className={cx("post-content", "p-6")}>
              <div className={cx("post-meta", "pb-3")}>
                <ul className={cx("flex", "gap-6")}>
                  <li
                    className={cx(
                      "flex",
                      "items-center",
                      "gap-1",
                      "color-sub",
                      "text-xs"
                    )}
                  >
                    <Icon
                      icon="guidance:user-1"
                      className={cx("icon-svg", "w-4", "h-4")}
                    />
                    by
                    <Link href={""}> Admin</Link>
                  </li>
                  <li
                    className={cx(
                      "flex",
                      "items-center",
                      "gap-1",
                      "color-sub",
                      "text-xs"
                    )}
                  >
                    <Icon
                      icon="mynaui:message"
                      className={cx("icon-svg", "w-4", "h-4")}
                    />
                    Comment (5)
                  </li>
                </ul>
              </div>
              <Link
                href={""}
                className={cx(
                  "text-lg",
                  "block",
                  "text-white",
                  "underline",
                  "w-9/12",
                  "pb-4"
                )}
              >
                Vital Tips For Block chain Products with Warranty.
              </Link>
            </div>
            <div className={cx("post-content", "p-6")}>
              <div className={cx("post-meta", "pb-3")}>
                <ul className={cx("flex", "gap-6")}>
                  <li
                    className={cx(
                      "flex",
                      "items-center",
                      "gap-1",
                      "color-sub",
                      "text-xs"
                    )}
                  >
                    <Icon
                      icon="guidance:user-1"
                      className={cx("icon-svg", "w-4", "h-4")}
                    />
                    by
                    <Link href={""}> Admin</Link>
                  </li>
                  <li
                    className={cx(
                      "flex",
                      "items-center",
                      "gap-1",
                      "color-sub",
                      "text-xs"
                    )}
                  >
                    <Icon
                      icon="mynaui:message"
                      className={cx("icon-svg", "w-4", "h-4")}
                    />
                    Comment (5)
                  </li>
                </ul>
              </div>
              <Link
                href={""}
                className={cx(
                  "text-lg",
                  "block",
                  "text-white",
                  "underline",
                  "w-9/12",
                  "pb-4"
                )}
              >
                Vital Tips For Block chain Products with Warranty.
              </Link>
            </div>
            <div className={cx("post-content", "p-6")}>
              <div className={cx("post-meta", "pb-3")}>
                <ul className={cx("flex", "gap-6")}>
                  <li
                    className={cx(
                      "flex",
                      "items-center",
                      "gap-1",
                      "color-sub",
                      "text-xs"
                    )}
                  >
                    <Icon
                      icon="guidance:user-1"
                      className={cx("icon-svg", "w-4", "h-4")}
                    />
                    by
                    <Link href={""}> Admin</Link>
                  </li>
                  <li
                    className={cx(
                      "flex",
                      "items-center",
                      "gap-1",
                      "color-sub",
                      "text-xs"
                    )}
                  >
                    <Icon
                      icon="mynaui:message"
                      className={cx("icon-svg", "w-4", "h-4")}
                    />
                    Comment (5)
                  </li>
                </ul>
              </div>
              <Link
                href={""}
                className={cx(
                  "text-lg",
                  "block",
                  "text-white",
                  "underline",
                  "w-9/12",
                  "pb-4"
                )}
              >
                Vital Tips For Block chain Products with Warranty.
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className={cx("box-color", "pt-8")}>
        <div className="max-w-screen-xl mx-auto p-4 pt-16">
          <div className="flex items-center flex-col">
            <h2 className={cx("text-4xl", "text-white", "mb-4")}>
              Available Apartments
            </h2>
            <span
              className={cx(
                "text-white",
                "w-6/12",
                "text-xs",
                "text-center",
                "mb-10",
                "leading-6",
                "color-sub"
              )}
            >
              Trage agile frameworks to provide a robust synopsis for high level
              overviews Iterative approaches to corporate strategy foster
              collabo
            </span>
          </div>
          <div className="flex justify-center ">
            <table
              className={cx(
                "table-list",
                "min-w-full",
                " text-left",
                " text-white"
              )}
            >
              <thead>
                <tr className={cx("header-table")}>
                  <th className="px-6 py-3">Residence</th>
                  <th className="px-6 py-3">Bed/Bath</th>
                  <th className="px-6 py-3">SQ.FT</th>
                  <th className="px-6 py-3">Sale Price</th>
                  <th className="px-6 py-3">Rent Price</th>
                  <th className="px-6 py-3">Floor Plan</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-gray-800 border-b border-gray-700">
                  <td className="px-6 py-4">LUX Apartment</td>
                  <td className="px-6 py-4">3/2</td>
                  <td className="px-6 py-4">720</td>
                  <td className="px-6 py-4">$3500</td>
                  <td className="px-6 py-4">$2500</td>
                  <td className="px-6 py-4">
                    <a href="#" className="text-amber-400 hover:underline">
                      View Now
                    </a>
                  </td>
                </tr>
                <tr className="bg-gray-900 border-b border-gray-700">
                  <td className="px-6 py-4">The Green Villa</td>
                  <td className="px-6 py-4">3/3</td>
                  <td className="px-6 py-4">450</td>
                  <td className="px-6 py-4">$2800</td>
                  <td className="px-6 py-4">$1800</td>
                  <td className="px-6 py-4">
                    <a href="#" className="text-amber-400 hover:underline">
                      View Now
                    </a>
                  </td>
                </tr>
                <tr className="bg-gray-800 border-b border-gray-700">
                  <td className="px-6 py-4">Penthouse</td>
                  <td className="px-6 py-4">2/3</td>
                  <td className="px-6 py-4">450</td>
                  <td className="px-6 py-4">$2800</td>
                  <td className="px-6 py-4">$1800</td>
                  <td className="px-6 py-4">
                    <a href="#" className="text-amber-400 hover:underline">
                      View Now
                    </a>
                  </td>
                </tr>
                <tr className="bg-gray-900 border-b border-gray-700">
                  <td className="px-6 py-4">Spa Luxury</td>
                  <td className="px-6 py-4">3/2</td>
                  <td className="px-6 py-4">720</td>
                  <td className="px-6 py-4">$3500</td>
                  <td className="px-6 py-4">$2500</td>
                  <td className="px-6 py-4">
                    <a href="#" className="text-amber-400 hover:underline">
                      View Now
                    </a>
                  </td>
                </tr>
                <tr className="bg-gray-800 border-b border-gray-700">
                  <td className="px-6 py-4">SImplex2A8</td>
                  <td className="px-6 py-4">1/2</td>
                  <td className="px-6 py-4">450</td>
                  <td className="px-6 py-4">$2800</td>
                  <td className="px-6 py-4">$1800</td>
                  <td className="px-6 py-4">
                    <a href="#" className="text-amber-400 hover:underline">
                      View Now
                    </a>
                  </td>
                </tr>
                <tr className="bg-gray-900 border-b border-gray-700">
                  <td className="px-6 py-4">Alani Mention</td>
                  <td className="px-6 py-4">3/4</td>
                  <td className="px-6 py-4">450</td>
                  <td className="px-6 py-4">$2800</td>
                  <td className="px-6 py-4">$1800</td>
                  <td className="px-6 py-4">
                    <a href="#" className="text-amber-400 hover:underline">
                      View Now
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className={cx("contact")}>
        <div
          className={cx(
            "max-w-screen-xl mx-auto p-4",
            "flex",
            "flex-col",
            "gap-14",
            "flex-wrap",
            "py-20"
          )}
        >
          <h2
            className={cx(
              "contact-title",
              "text-white",
              "text-4xl",
              "flex",
              "items-center",
              "flex-col",
              "w-full"
            )}
          >
            Request A Viewing
            <span
              className={cx(
                "descript",

                "text-sm",
                "w-6/12",
                "mt-5",
                "text-center"
              )}
            >
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
                  )}
                >
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
                  )}
                ></textarea>
                <button className={cx("text-white", "mt-3", "py-3", "text-sm")}>
                  {" "}
                  Submit Request
                </button>
              </form>
            </div>
          </div>
        </div>
        <FollowUs></FollowUs>
      </div>
    </div>
  );
}
