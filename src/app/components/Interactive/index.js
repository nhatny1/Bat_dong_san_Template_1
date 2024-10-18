"use client";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from "./Interactive.module.css";
import { useRef, useState } from "react";

const cx = classNames.bind(styles);
const Interactive = () => {
  const [des, setDes] = useState(1);
  const listLocations = useRef([1, 2, 3, 4]);
  const handleDes = (number) => {
    setDes(number);
  };
  return (
    <div className={cx("interactive")}>
      <div
        className={cx(
          "max-w-screen-xl mx-auto p-4",
          "flex",
          "flex-wrap",
          "justify-between",
          "py-20"
        )}
      >
        <div className={cx("left-interactive", "w-full", "lg:w-4/12", "mb-4")}>
          <ul className={cx("list-interactive-left", "p-6")}>
            {listLocations.current.map((item, index) => {
              return (
                <li
                  key={index}
                  className={cx(
                    "flex",
                    "flex-col",
                    "text-white",
                    "justify-between",
                    "py-3"
                  )}
                >
                  <div
                    className={cx(
                      "count",
                      "title",
                      "flex",
                      "gap-3",
                      "justify-between"
                    )}
                  >
                    <div className={cx("count", "title", "flex", "gap-3")}>
                      <div className={cx("text-sm", "count")}>0{item}</div>
                      <h2 className={cx("text-sm")}>Interactive Features</h2>
                    </div>
                    <div>
                      {" "}
                      <FontAwesomeIcon
                        icon={faPlus}
                        className={cx("w-3")}
                        onClick={() => handleDes(item)}
                      />
                    </div>
                  </div>
                  {des === item && (
                    <p className={cx("location-des", "text-xs", "color-sub")}>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Inventore, tenetur! Totam, maxime magni? Cupiditate,
                      doloremque.
                    </p>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
        <div
          className={cx(
            "right-interactive",
            "relative",
            "w-full",
            "h-96",
            "lg:h-full",
            "lg:w-7/12"
          )}
        >
          <div
            className={cx(
              "point",
              "location-one",
              "absolute",
              "flex",
              "justify-center",
              "items-center",
              { choose: des === 1 }
            )}
            onClick={() => handleDes(1)}
          >
            01
          </div>
          <div
            className={cx(
              "point",
              "location-two",
              "absolute",
              "flex",
              "justify-center",
              "items-center",
              { choose: des === 2 }
            )}
            onClick={() => handleDes(2)}
          >
            02
          </div>
          <div
            className={cx(
              "point",
              "location-three",
              "absolute",
              "flex",
              "justify-center",
              "items-center",
              { choose: des === 3 }
            )}
            onClick={() => handleDes(3)}
          >
            03
          </div>
          <div
            className={cx(
              "point",
              "location-four",
              "absolute",
              "flex",
              "justify-center",
              "items-center",
              { choose: des === 4 }
            )}
            onClick={() => handleDes(4)}
          >
            04
          </div>
        </div>
      </div>
    </div>
  );
};

export default Interactive;
