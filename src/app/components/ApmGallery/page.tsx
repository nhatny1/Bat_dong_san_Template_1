"use client";

import { useState } from "react";

const ApmGallery = () => {
  const [activeTab, setActiveTab] = useState("Photos");
  const [currentImage, setCurrentImage] = useState(0);
  const photos = [
    "/images/image/416x414/1030x613.jpg",
    "./images/",
    "/images/image/416x414/1030x613.jpg",
  ];
  const videoSrc = "/videos/sample-video.mp4";

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % photos.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev === 0 ? photos.length - 1 : prev - 1));
  };

  return (
    <div className="bg-bg-custom text-white min-h-screen flex flex-col items-center justify-center mb-20">
      <div className="flex space-x-6 text-lg mb-6 my-20">
        <button
          className={`${activeTab === "Photos" ? "text-orange-400" : ""}`}
          onClick={() => setActiveTab("Photos")}>
          <p className="line-through">Photos</p>
        </button>
        <button
          className={`${activeTab === "Video" ? "text-orange-400" : ""}`}
          onClick={() => setActiveTab("Video")}>
          Video
        </button>
        <button
          className={`${activeTab === "360 Tour" ? "text-orange-400" : ""}`}
          onClick={() => setActiveTab("360 Tour")}>
          360 Tour
        </button>
      </div>

      <div className="relative w-[1030px] h-[613px] bg-gray-400 flex items-center justify-center">
        {activeTab === "Photos" && (
          <>
            <img
              src={photos[currentImage]}
              alt="Slideshow"
              className="w-full h-auto"
            />

            <button
              className="absolute left-[-100px] top-1/2 transform -translate-y-1/2 text-white text-7xl rounded-full"
              onClick={prevImage}>
              &lt;
            </button>
            <button
              className="absolute right-[-100px] top-1/2 transform -translate-y-1/2 text-white text-7xl rounded-full"
              onClick={nextImage}>
              &gt;
            </button>
          </>
        )}
        {activeTab === "Video" && (
          <video controls className="w-full h-auto" src={videoSrc}></video>
        )}
        {activeTab === "360 Tour" && (
          <div className="w-full h-auto flex items-center justify-center text-black">
            <video controls className="w-full h-auto" src={videoSrc}></video>
          </div>
        )}
      </div>
    </div>
  );
};

export default ApmGallery;
