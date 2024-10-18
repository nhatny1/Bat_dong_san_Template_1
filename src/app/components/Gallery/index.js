"use client";
import classNames from "classnames/bind";
import styles from "./Gallery.module.css";
import { useEffect, useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";

const cx = classNames.bind(styles);
const Gallery = () => {
  const listState = ["Photos", "Video", "360 Tour"];
  const [stateBox, setStateBox] = useState("Photos");
  const [toggleVideo, setToggleVideo] = useState(false);

  const handleToggleVideo = () => {
    setToggleVideo(!toggleVideo);
  };
  useEffect(() => {
    // Thêm class 'overflow-hidden' cho body khi component render
    if (toggleVideo) document.body.classList.add("overflow-hidden");

    // Xóa class 'overflow-hidden' khi component unmount
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [toggleVideo]);
  return (
    <>
      {toggleVideo && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black bg-opacity-50"
            onClick={handleToggleVideo}
          >
            <div className="fixed inset-0 z-50 flex items-center justify-center">
              <iframe
                src="https://www.youtube.com/embed/o4GuSJYSzrY?si=htpokWHPcodW7R2r"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                onClick={(e) => e.stopPropagation()}
                className="h-full lg:w-[900px] lg:h-[507px] bg-black"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </>
      )}
      <div className={cx("gallery", "w-full")}>
        <div
          className={cx(
            "gallery-top",
            "flex",
            "flex-wrap",
            "gap-4",
            "justify-between"
          )}
        >
          <h2
            className={cx(
              "gallery-title",
              "text-white",
              "text-5xl",
              "flex",
              "flex-col",
              "w-full",
              "lg:w-5/12",
              "pb-20"
            )}
          >
            Property Gallery
            <span className={cx("text-sm", "mt-4")}>
              Trage agile frameworks to provide a robust synopsis for high level
              overviews.Iterative approaches to corporate strategy foster
              collabo
            </span>
          </h2>

          <div
            className={cx(
              "state-box",
              "flex",
              " justify-center",
              " items-center ",
              "space-x-8",
              "pb-10"
            )}
          >
            {listState.map((item, index) => (
              <span
                key={index}
                onClick={() => {
                  setStateBox(item);
                }}
                className={cx("cursor-pointer", { choose: item === stateBox })}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
        <div
          className={cx(
            "gallery-bottom",
            "flex",
            "flex-wrap",
            "lg:flex-nowrap",
            "gap-5",
            "w-full",
            "items-center"
          )}
        >
          <div
            className={cx("gallery-bottom-left", "basis-full", "lg:basis-1/2")}
          >
            {stateBox === "Photos" ? (
              <div className={cx("list-gallery", "flex", "flex-col", "w-full")}>
                <div className={cx("main-img", "w-full", "mb-2")}>
                  <img
                    src={
                      "https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Earth/Beauly%20-%20Single%20Property%20HTML%20Template/Template/assets/img/gallery/gallery-img-1.jpg"
                    }
                    alt="gallery1"
                    className={cx("w-full", "h-full")}
                  />
                </div>
                <div className={cx("flex", "gap-1")}>
                  <div className={cx("basis-3/12")}>
                    <img
                      src={
                        "https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Earth/Beauly%20-%20Single%20Property%20HTML%20Template/Template/assets/img/gallery/gallery-thumb-1.jpg"
                      }
                      alt="gallery2"
                      className={cx("w-full")}
                    />
                  </div>
                  <div className={cx("basis-3/12")}>
                    <img
                      src={
                        "https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Earth/Beauly%20-%20Single%20Property%20HTML%20Template/Template/assets/img/gallery/gallery-thumb-1.jpg"
                      }
                      alt="gallery2"
                      className={cx("w-full")}
                    />
                  </div>
                  <div className={cx("basis-3/12")}>
                    <img
                      src={
                        "https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Earth/Beauly%20-%20Single%20Property%20HTML%20Template/Template/assets/img/gallery/gallery-thumb-1.jpg"
                      }
                      alt="gallery2"
                      className={cx("w-full")}
                    />
                  </div>
                  <div className={cx("basis-3/12")}>
                    <img
                      src={
                        "https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Earth/Beauly%20-%20Single%20Property%20HTML%20Template/Template/assets/img/gallery/gallery-thumb-1.jpg"
                      }
                      alt="gallery2"
                      className={cx("w-full")}
                    />
                  </div>
                </div>
              </div>
            ) : (
              <div
                className={cx(
                  "list-video",
                  "flex",
                  "flex-col",
                  "w-full",
                  "relative"
                )}
              >
                <img src="https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Earth/Beauly%20-%20Single%20Property%20HTML%20Template/Template/assets/img/images/gallary-3.jpg" />
                <div
                  className={cx(
                    "play",
                    "absolute",
                    "top-1/2",
                    "left-1/2",
                    "transform",
                    "-translate-x-1/2",
                    "-translate-y-1/2",
                    "scale-50",
                    "rounded-full",
                    "flex",
                    "justify-center",
                    "items-center",
                    "cursor-pointer"
                  )}
                  onClick={handleToggleVideo}
                >
                  <Icon
                    icon="fluent:play-32-filled"
                    className={cx("w-20", "h-20")}
                  />
                </div>
              </div>
            )}
          </div>
          <div
            className={cx("gallery-bottom-right", "basis-full", "lg:basis-1/2")}
          >
            <img
              src={
                "https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Earth/Beauly%20-%20Single%20Property%20HTML%20Template/Template/assets/img/gallery/gallery-right-img.jpg"
              }
              className={cx("w-full")}
            />
          </div>
        </div>
      </div>
    </>
  );
};
// <div className="fixed inset-0 z-50 bg-black bg-opacity-50"></div>;
export default Gallery;
