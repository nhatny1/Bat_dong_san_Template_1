"use client";

import classNames from "classnames/bind";
import styles from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faLinkedinIn,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import { Icon } from "@iconify/react/dist/iconify.js";

const cx = classNames.bind(styles);
const Footer = () => {
  return (
    <div className={cx("box-footer")}>
      <footer
        className={cx(
          "primary-footer",
          "w-full",
          "h-full",
          "flex",
          "flex-col",
          "justify-between"
        )}
      >
        <div
          className={cx("max-w-screen-xl", " mx-auto", "pt-10", "px-4", "mb-8")}
        >
          <div className={cx("flex", "justify-between", "w-full", "flex-wrap")}>
            <div
              className={cx(
                "col",
                "flex",
                "flex-col",
                "gap-5",
                "basis-full",
                "lg:basis-2/4",
                "xl:basis-1/4"
              )}
            >
              <div className={cx("logo")}>
                <img src={"images/logo/logo.png"} />
              </div>
              <p className={cx("text-xs", "color-sub", "leading-5")}>
                Indignation and dislike men who are so beguiled and demoralized
                by the charms of pleasure. Indignation and
              </p>
              <div className={cx("social", "flex", "gap-3")}>
                <div
                  className={cx(
                    "social-item",
                    "flex",
                    "justify-center",
                    "items-center"
                  )}
                >
                  <FontAwesomeIcon
                    icon={faFacebookF}
                    className={cx("icon", "text-white")}
                  />
                </div>

                <div
                  className={cx(
                    "social-item",
                    "flex",
                    "justify-center",
                    "items-center"
                  )}
                >
                  <FontAwesomeIcon
                    icon={faTwitter}
                    className={cx("icon", "text-white")}
                  />
                </div>
                <div
                  className={cx(
                    "social-item",
                    "flex",
                    "justify-center",
                    "items-center"
                  )}
                >
                  <FontAwesomeIcon
                    icon={faYoutube}
                    className={cx("icon", "text-white")}
                  />
                </div>
                <div
                  className={cx(
                    "social-item",
                    "flex",
                    "justify-center",
                    "items-center"
                  )}
                >
                  <FontAwesomeIcon
                    icon={faLinkedinIn}
                    className={cx("icon", "text-white")}
                  />
                </div>
              </div>
            </div>
            <div
              className={cx(
                "col",
                "basis-full",
                "lg:basis-2/4",
                "xl:basis-1/4",
                "lg:pl-8"
              )}
            >
              <div
                className={cx(
                  "title",
                  "text-xl",
                  "font-semibold",
                  "color-sub",
                  "pt-3",
                  "pb-8"
                )}
              >
                Properties
              </div>
              <ul
                className={cx(
                  "list-group",
                  "flex",
                  "flex-col",
                  "gap-4",
                  "color-sub",
                  "text-sm"
                )}
              >
                <li>Q1 District</li>
                <li>THE ONE</li>
                <li>PANORAMIC</li>
                <li>LUMIA RESIDENCES</li>
                <li>QUARTET</li>
              </ul>
            </div>
            <div
              className={cx(
                "col",
                "basis-full",
                "lg:basis-2/4",
                "xl:basis-1/4",
                "lg:pl-8"
              )}
            >
              <div
                className={cx(
                  "title",
                  "text-xl",
                  "font-semibold",
                  "color-sub",
                  "pt-3",
                  "pb-8"
                )}
              >
                Get in touch
              </div>
              <ul
                className={cx(
                  "list-group",
                  "flex",
                  "flex-col",
                  "gap-4",
                  "color-sub",
                  "text-sm",
                  "w-full"
                )}
              >
                <li className={cx("flex", "gap-3", "w-full")}>
                  <div
                    className={cx(
                      "basis-1/12",
                      "lg:basis-2/12",
                      "flex",
                      "items-start"
                    )}
                  >
                    <Icon
                      icon="weui:location-outlined"
                      className={cx("icon-svg", "w-fit", "h-8")}
                    />{" "}
                  </div>
                  <div
                    className={cx(
                      "content",
                      "flex-1",
                      "flex",
                      "flex-col",
                      "gap-2"
                    )}
                  >
                    <div className={cx("title")}>Address</div>
                    <div className={cx("description", "text-xs")}>
                      244, First Floor, 11 St Roots Terrace, Los Angeles
                    </div>
                  </div>
                </li>
                <li className={cx("flex", "gap-3", "w-full")}>
                  <div
                    className={cx(
                      "basis-1/12",
                      "lg:basis-2/12",
                      "flex",
                      "items-start"
                    )}
                  >
                    <Icon
                      icon="solar:phone-linear"
                      className={cx("icon-svg", "w-fit", "h-8")}
                    />{" "}
                  </div>
                  <div
                    className={cx(
                      "content",
                      "flex-1",
                      "flex",
                      "flex-col",
                      "gap-2"
                    )}
                  >
                    <div className={cx("title")}>Phone</div>
                    <div className={cx("description", "text-xs")}>
                      (+01) 123 456 7890
                    </div>
                  </div>
                </li>
                <li className={cx("flex", "gap-3", "w-full")}>
                  <div
                    className={cx(
                      "basis-1/12",
                      "lg:basis-2/12",
                      "flex",
                      "items-start"
                    )}
                  >
                    <Icon
                      icon="fluent:mail-32-light"
                      className={cx("icon-svg", "w-fit", "h-8")}
                    />{" "}
                  </div>
                  <div
                    className={cx(
                      "content",
                      "flex-1",
                      "flex",
                      "flex-col",
                      "gap-2"
                    )}
                  >
                    <div className={cx("title")}>Email</div>
                    <div className={cx("description", "text-xs")}>
                      info@example.com
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div
              className={cx(
                "col",
                "basis-full",
                "lg:basis-2/4",
                "xl:basis-1/4",
                "lg:pl-8"
              )}
            >
              <div
                className={cx(
                  "title",
                  "text-xl",
                  "font-semibold",
                  "color-sub",
                  "pt-3",
                  "pb-8"
                )}
              >
                Newsletter
              </div>
              <p className={cx("color-sub", "text-xs", "mb-4")}>
                Indignation and dislike men who are so beguiled and demoralized
                by
              </p>
              <input
                type="text"
                placeholder="Enter your mail address"
                className={cx("w-full", "p-3", "text-xs")}
              />

              <button
                className={cx(
                  "btn-submit",
                  "text-sm",
                  "font-semibold",
                  "px-5",
                  "mt-5",
                  "py-2",
                  "text-white"
                )}
              >
                {" "}
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className={cx("border-t", "border-x-zinc-100")}>
          <div
            className={cx(
              "bottom-footer",
              "max-w-screen-xl",
              " mx-auto",
              " p-4",
              "text-white",
              "flex",
              "justify-between"
            )}
          >
            <div className={cx("left-bottom-footer", "text-xs")}>
              © Copyright 2023 Beauly. All Rights Reserved.
            </div>
            <div className={cx("text-xs", "flex", "gap-5")}>
              <Link href="">Privacy Policy</Link>
              <a href="/terms-conditions" className={styles.link}>
                Terms & Conditions
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
