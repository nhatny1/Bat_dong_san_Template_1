"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { default as Link } from "next/link";
import classNames from "classnames/bind";
import styles from "./Header.module.css";
import MenuMobile from "./components/MenuMobile";
import {
  faArrowRight,
  faChevronDown,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
const cx = classNames.bind(styles);
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  const [showHeaderScroll, setShowHeaderScroll] = useState<boolean>(false);
  const [pages, setPages] = useState<string>("");
  useEffect(() => {
    if (pathname) {
      console.log(pathname);
      const pathSegment = pathname.split("/")[1] || "";
      setPages(pathSegment);
    }
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setShowHeaderScroll(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {pages === "" ? (
        <div className={cx("scrollDefault", { scroll: showHeaderScroll })}>
          <header
            className={cx(
              {
                "primary-header": pages === "",
                "pages-header": pages !== "",
              },
              "px-4",
              "h-20"
            )}
          >
            <div
              className={cx(
                "p-4",
                "flex",
                "justify-between",
                "items-center",
                "flex-wrap",
                "w-full",
                "h-full"
              )}
            >
              <img
                src="images/logo/logo.png"
                className={cx("logo", "xl:w-full", "lg:w-40", "md:w-36")}
              />{" "}
              {/* Điều chỉnh kích thước logo */}
              <ul
                className={cx(
                  "menu-header",
                  "hidden",
                  "gap-1",
                  "lg	:gap-5",
                  "xl:gap-7",
                  "h-full",
                  "lg:flex"
                )}
              >
                {" "}
                {/* flex-wrap để các item xuống dòng khi cần */}
                <li
                  className={cx(
                    "item-menu",
                    "mx-1",
                    "lg:mx-2",
                    "text-white",
                    "flex",
                    "items-center",
                    "gap-1"
                  )}
                >
                  <Link className={cx()} href={""}>
                    Home
                  </Link>
                </li>
                <li
                  className={cx(
                    "item-menu",
                    "mx-1",
                    "lg:mx-2",
                    "text-white",
                    "flex",
                    "items-center",
                    "gap-1"
                  )}
                >
                  <Link className={cx()} href={""}>
                    About
                  </Link>
                  <span className={cx("w-3")}>
                    <FontAwesomeIcon icon={faChevronDown} />
                  </span>
                  <ul
                    className={cx(
                      "menu-child",
                      "absolute",
                      "border-collapse",
                      "lg:w-44",
                      "top-16",
                      "sm:w-32"
                    )}
                  >
                    <li>
                      <Link
                        href={"/developer"}
                        className={cx("block", "w-full")}
                      >
                        About Developer
                      </Link>
                    </li>
                    <li>
                      <Link href={"/argent"} className={cx("block", "w-full")}>
                        About Agent
                      </Link>
                    </li>
                  </ul>
                </li>
                <li
                  className={cx(
                    "item-menu",
                    "mx-1",
                    "lg:mx-2",
                    "text-white",
                    "flex",
                    "items-center",
                    "gap-1"
                  )}
                >
                  <Link className={cx()} href={""}>
                    Pages
                  </Link>
                  <span className={cx("w-3")}>
                    <FontAwesomeIcon icon={faChevronDown} />
                  </span>
                  <ul
                    className={cx(
                      "menu-child",
                      "absolute",
                      "border-collapse",
                      "lg:w-44",
                      "top-16",
                      "sm:w-32"
                    )}
                  >
                    <li>
                      <Link href={"/service"} className={cx("block", "w-full")}>
                        Services
                      </Link>
                    </li>
                    <li>
                      <Link href={"/neighbourhood"} className={cx("block", "w-full")}>
                        Neighbourhood
                      </Link>
                    </li>
                    <li>
                      <Link href={"/amenities"} className={cx("block", "w-full")}>
                        Amenities
                      </Link>
                    </li>
                    <li>
                      <Link href={"/Team"} className={cx("block", "w-full")}>
                        Team
                      </Link>
                    </li>
                    <li>
                      <Link href={"/TeamDetails"} className={cx("block", "w-full")}>
                        Team Details
                      </Link>
                    </li>
                    <li>
                      <Link href={"/faq"} className={cx("block", "w-full")}>
                        Faq
                      </Link>
                    </li>
                  </ul>
                </li>
                <li
                  className={cx(
                    "item-menu",
                    "mx-1",
                    "lg:mx-2",
                    "text-white",
                    "flex",
                    "items-center",
                    "gap-1"
                  )}
                >
                  <Link className={cx()} href={""}>
                    Apartments
                  </Link>
                  <span className={cx("w-3")}>
                    <FontAwesomeIcon icon={faChevronDown} />
                  </span>
                  <ul
                    className={cx(
                      "menu-child",
                      "absolute",
                      "border-collapse",
                      "lg:w-44",
                      "top-16",
                      "sm:w-32"
                    )}
                  >
                    <li>
                      <Link href={"/apartmentpage"} className={cx("block", "w-full")}>
                        Apartments Page
                      </Link>
                    </li>
                    <li>
                      <Link href={"/apartmentinfo"} className={cx("block", "w-full")}>
                        Apartments Info
                      </Link>
                    </li>
                    <li>
                      <Link href={"/multipleapartment"} className={cx("block", "w-full")}>
                        Mutiple Apartments
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={"/apartmentgallery"}
                        className={cx("block", "w-full")}
                      >
                        Apartments Gallery
                      </Link>
                    </li>
                    <li>
                      <Link
                        href={"/apartmentsingle"}
                        className={cx("block", "w-full")}
                      >
                        Apartments Single
                      </Link>
                    </li>
                  </ul>
                </li>
                <li
                  className={cx(
                    "item-menu",
                    "mx-1",
                    "lg:mx-2",
                    "text-white",
                    "flex",
                    "items-center",
                    "gap-1"
                  )}
                >
                  <Link className={cx()} href={""}>
                    News
                  </Link>
                  <span className={cx("w-3")}>
                    <FontAwesomeIcon icon={faChevronDown} />
                  </span>
                  <ul
                    className={cx(
                      "menu-child",
                      "absolute",
                      "border-collapse",
                      "lg:w-44",
                      "top-16",
                      "sm:w-32"
                    )}
                  >
                    <li>
                      <Link href={"/news"} className={cx("block", "w-full")}>
                        News
                      </Link>
                    </li>
                    <li>
                      <Link href={"/newdetail"} className={cx("block", "w-full")}>
                        News Details
                      </Link>
                    </li>
                  </ul>
                </li>
                <li
                  className={cx(
                    "item-menu",
                    "mx-1",
                    "lg:mx-2",
                    "text-white",
                    "flex",
                    "items-center",
                    "gap-1"
                  )}
                >
                  <Link className={cx()} href={"/Contact"}>
                    Contact
                  </Link>
                </li>
              </ul>
              <div
                className={cx(
                  "header-contact",
                  "hidden",
                  "w-1/4",
                  "sm:w-fit",
                  "h-full",
                  "lg:block"
                )}
              >
                <div
                  className={cx(
                    "header-contact-info",
                    "h-full",
                    "flex",
                    "justify-center",
                    "items-center",
                    "gap-7"
                  )}
                >
                  {" "}
                  {/* Giảm gap */}
                  <div
                    className={cx(
                      "header-contact",
                      "text-white",
                      "flex",
                      "items-center",
                      "text-base",
                      "sm:hidden",
                      "xl:flex"
                    )}
                  >
                    <FontAwesomeIcon icon={faPhone} className={cx("w-3")} />
                    <span className={cx("ml-2", "sm:text-xs", "lg:text-sm")}>
                      +098 7654 321
                    </span>
                  </div>
                  <Link
                    href={""}
                    className={cx(
                      "btn-header",
                      "flex",
                      "items-center",
                      "gap-1",
                      "border",
                      "h-fit",
                      "py-2", // Giảm padding
                      "px-5", // Giảm padding
                      "text-white"
                    )}
                  >
                    Schedule a Visit
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className={cx("w-3")}
                    />
                  </Link>
                </div>
              </div>
              <MenuMobile></MenuMobile>
            </div>
          </header>
        </div>
      ) : (
        <div
          className={cx(
            "title-pages",
            "h-[520px]",
            "flex",
            "flex-col",
            "justify-center",
            "items-center"
          )}
        >
          <div
            className={cx(
              "title-banner",
              "text-6xl",
              "text-white",
              "font-bold"
            )}
          >
            {pages
              .split("-")
              .map((item) => item.charAt(0).toUpperCase() + item.slice(1))
              .join(" ")}
          </div>
          <p className={cx("des", "text-xs", "w-96", "color-sub")}>
            Trage agile frameworks to provide a robust synopsis for high level
            overviews. Iterative approaches to corporate strategy foster collabo
          </p>

          <div
            className={cx(
              "scrollDefault",
              { "scroll-page": showHeaderScroll },
              "pb-2"
            )}
          >
            <header
              className={cx(
                {
                  "primary-header": pages === "",
                  "pages-header": pages !== "",
                },
                "h-20"
              )}
            >
              <div className={cx()}>
                <div
                  className={cx(
                    "fixed",
                    "h-fit",
                    "h-[91px]",
                    "w-full",
                    "top-0",
                    "left-0",
                    "px-8",
                    "mt-3",
                    "flex",
                    "justify-between",
                    "gap-6",
                    "items-center",
                    "flex-wrap",
                    "w-full"
                  )}
                >
                  <div
                    className={cx(
                      "header-contact",
                      "flex",
                      "items-center",
                      "text-base",
                      "hidden",
                      "xl:flex",
                      "text-white"
                    )}
                  >
                    <FontAwesomeIcon icon={faPhone} className={cx("w-3")} />
                    <span className={cx("ml-2", "sm:text-xs", "lg:text-sm")}>
                      +098 7654 321
                    </span>
                  </div>
                  <div
                    className={cx(
                      "header-menu-wrap",
                      "h-full",
                      "flex",
                      "lg:justify-center",
                      "justify-between",
                      "items-center",
                      "gap-4",
                      "flex-1"
                    )}
                  >
                    <ul
                      className={cx(
                        "menu-header",
                        "hidden",
                        "gap-1",
                        "lg	:gap-5",
                        "xl:gap-7",
                        "h-full",
                        "lg:flex",
                        "w-fit"
                      )}
                    >
                      {" "}
                      {/* flex-wrap để các item xuống dòng khi cần */}
                      <li
                        className={cx(
                          "item-menu",
                          "mx-1",
                          "lg:mx-2",
                          "text-white",
                          "flex",
                          "items-center",
                          "gap-1",
                          "py-4"
                        )}
                      >
                        <Link className={cx()} href={""}>
                          Home
                        </Link>
                      </li>
                      <li
                        className={cx(
                          "item-menu",
                          "mx-1",
                          "lg:mx-2",
                          "text-white",
                          "flex",
                          "items-center",
                          "gap-1",
                          "py-4"
                        )}
                      >
                        <Link className={cx()} href={""}>
                          About
                        </Link>
                        <span className={cx("w-3")}>
                          <FontAwesomeIcon icon={faChevronDown} />
                        </span>
                        <ul
                          className={cx(
                            "menu-child",
                            "absolute",
                            "border-collapse",
                            "lg:w-44",
                            "top-14",
                            "sm:w-32"
                          )}
                        >
                          <li>
                            <Link href={"/developer"} className={cx("block", "w-full")}>
                              About Developer
                            </Link>
                          </li>
                          <li>
                            <Link href={"/argent"} className={cx("block", "w-full")}>
                              About Agent
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li
                        className={cx(
                          "item-menu",
                          "mx-1",
                          "lg:mx-2",
                          "text-white",
                          "flex",
                          "items-center",
                          "gap-1",
                          "py-4"
                        )}
                      >
                        <Link className={cx()} href={""}>
                          Pages
                        </Link>
                        <span className={cx("w-3")}>
                          <FontAwesomeIcon icon={faChevronDown} />
                        </span>
                        <ul
                          className={cx(
                            "menu-child",
                            "absolute",
                            "border-collapse",
                            "lg:w-44",
                            "top-14",
                            "sm:w-32"
                          )}
                        >
                          <li>
                            <Link href={"/service"} className={cx("block", "w-full")}>
                              Services
                            </Link>
                          </li>
                          <li>
                            <Link href={"/neighbourhood"} className={cx("block", "w-full")}>
                              Neighbourhood
                            </Link>
                          </li>
                          <li>
                            <Link href={"/amenities"} className={cx("block", "w-full")}>
                              Amenities
                            </Link>
                          </li>
                          <li>
                            <Link href={"/Team"} className={cx("block", "w-full")}>
                              Team
                            </Link>
                          </li>
                          <li>
                            <Link href={"/TeamDetails"} className={cx("block", "w-full")}>
                              Team Details
                            </Link>
                          </li>
                          <li>
                            <Link href={"/faq"} className={cx("block", "w-full")}>
                              Faq
                            </Link>
                          </li>
                        </ul>
                      </li>
                    </ul>

                    <div className={cx("h-full")}>
                      <img
                        src="https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Earth/Beauly%20-%20Single%20Property%20HTML%20Template/Template/assets/img/logo/logo.png"
                        className={cx("h-full")}
                      />
                    </div>
                    <ul
                      className={cx(
                        "menu-header",
                        "hidden",
                        "gap-1",
                        "lg	:gap-5",
                        "xl:gap-7",
                        "h-full",
                        "lg:flex",
                        "w-fit"
                      )}
                    >
                      {" "}
                      {/* flex-wrap để các item xuống dòng khi cần */}
                      <li
                        className={cx(
                          "item-menu",
                          "mx-1",
                          "lg:mx-2",
                          "text-white",
                          "flex",
                          "items-center",
                          "gap-1",
                          "py-4"
                        )}
                      >
                        <Link className={cx()} href={""}>
                          Apartments
                        </Link>
                        <span className={cx("w-3")}>
                          <FontAwesomeIcon icon={faChevronDown} />
                        </span>
                        <ul
                          className={cx(
                            "menu-child",
                            "absolute",
                            "border-collapse",
                            "lg:w-44",
                            "top-14",
                            "sm:w-32"
                          )}
                        >
                          <li>
                            <Link href={"/apartmentpage"} className={cx("block", "w-full")}>
                              Apartments Page
                            </Link>
                          </li>
                          <li>
                            <Link href={"/apartmentinfo"} className={cx("block", "w-full")}>
                              Apartments Info
                            </Link>
                          </li>
                          <li>
                            <Link href={"/multipleapartment"} className={cx("block", "w-full")}>
                              Mutiple Apartments
                            </Link>
                          </li>
                          <li>
                            <Link href={"/apartmentgallery"} className={cx("block", "w-full")}>
                              Apartments Gallery
                            </Link>
                          </li>
                          <li>
                            <Link href={"/apartmentsingle"} className={cx("block", "w-full")}>
                              Apartments Single
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li
                        className={cx(
                          "item-menu",
                          "mx-1",
                          "lg:mx-2",
                          "text-white",
                          "flex",
                          "items-center",
                          "gap-1",
                          "py-4"
                        )}
                      >
                        <Link className={cx()} href={""}>
                          News
                        </Link>
                        <span className={cx("w-3")}>
                          <FontAwesomeIcon icon={faChevronDown} />
                        </span>
                        <ul
                          className={cx(
                            "menu-child",
                            "absolute",
                            "border-collapse",
                            "lg:w-44",
                            "top-14",
                            "sm:w-32"
                          )}
                        >
                          <li>
                            <Link href={"/news"} className={cx("block", "w-full")}>
                              News
                            </Link>
                          </li>
                          <li>
                            <Link href={"/newdetail"} className={cx("block", "w-full")}>
                              News Details
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li
                        className={cx(
                          "item-menu",
                          "mx-1",
                          "lg:mx-2",
                          "text-white",
                          "flex",
                          "items-center",
                          "gap-1",
                          "py-4"
                        )}
                      >
                        <Link className={cx()} href={"/Contact"}>
                          Contact
                        </Link>
                      </li>
                      {/*  */}
                    </ul>
                    <MenuMobile></MenuMobile>
                  </div>
                  <Link
                    href={""}
                    className={cx(
                      "btn-header",
                      "hidden",
                      "xl:flex",
                      "items-center",
                      "gap-1",
                      "border",
                      "h-fit",
                      "py-2", // Giảm padding
                      "px-5", // Giảm padding
                      "text-white"
                    )}
                  >
                    Schedule a Visit
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className={cx("w-3")}
                    />
                  </Link>
                </div>
              </div>
            </header>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
