"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useEffect, useState } from "react";
const SlideShow = () => {
  const [numberElement, setNumberElement] = useState(5);

  useEffect(() => {
    window.addEventListener("resize", () => {
      const width = window.innerWidth;
      if (width > 1028) {
        console.log(`Chiều rộng của browser thay đổi thành: ${width}px`);
        setNumberElement(5);
      }
      if (width < 1028) {
        console.log(`Chiều rộng của browser thay đổi thành: ${width}px`);
        setNumberElement(3);
      }
      if (width < 756) {
        console.log(`Chiều rộng của browser thay đổi thành: ${width}px`);
        setNumberElement(2);
      }
    });
  }, []);

  return (
    <>
      <Swiper
        slidesPerView={numberElement}
        spaceBetween={30}
        pagination={false}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="flex justify-center">
            <img
              src="images/sponsor/140X45.png"
              className="w-[110px] h-[40px]"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center">
            <img
              src="images/sponsor/146X40.png"
              className="w-[110px] h-[40px]"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center">
            <img
              src="images/sponsor/140X28.png"
              className="w-[110px] h-[40px]"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center">
            <img
              src="images/sponsor/131X40.png"
              className="w-[110px] h-[40px]"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center">
            <img
              src="images/sponsor/68X38.png"
              className="w-[110px] h-[40px]"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex justify-center">
            <img
              src="images/sponsor/140X45.png"
              className="w-[110px] h-[40px]"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center">
            <img
              src="images/sponsor/146X40.png"
              className="w-[110px] h-[40px]"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center">
            <img
              src="images/sponsor/140X28.png"
              className="w-[110px] h-[40px]"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center">
            <img
              src="images/sponsor/131X40.png"
              className="w-[110px] h-[40px]"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center">
            <img
              src="images/sponsor/68X38.png"
              className="w-[110px] h-[40px]"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default SlideShow;
