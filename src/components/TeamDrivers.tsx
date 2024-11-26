"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Image from "next/image";
import Driver from "../public/Driver.png";
import DriverFlipped from "../public/DriverFlipped.png";

export default function TeamDrivers() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="mx-auto mb-[10vh] flex w-full max-w-screen-2xl flex-col px-4 text-4xl sm:px-8 md:text-6xl lg:mb-[20vh]">
      <div data-aos="fade-right" data-aos-once="true" className="mb-[5vh]">
        <h1 className="font-light dark:text-sky-300">DRIVERS</h1>
      </div>
      <div className="mb-[5vh] hidden flex-row gap-5 md:flex">
        <div
          data-aos="fade-right"
          data-aos-once="true"
          className="group relative aspect-[3_/_4] w-full overflow-hidden bg-teal-500/75 text-slate-100 transition duration-300 ease-in-out hover:bg-teal-500"
        >
          <Image
            className="h-full w-full object-cover object-center brightness-90 transition ease-in-out group-hover:scale-105 group-hover:brightness-100"
            src={Driver}
            alt="Driver"
          />
          <div className="absolute bottom-0 left-0 px-5 py-3 font-semibold">
            DRIVER 1
          </div>
        </div>
        <div
          data-aos="fade-right"
          data-aos-once="true"
          className="group relative aspect-[3_/_4] w-full overflow-hidden bg-sky-500/75 text-slate-100 transition duration-300 ease-in-out hover:bg-sky-500"
        >
          <Image
            className="h-full w-full object-cover object-center brightness-90 transition ease-in-out group-hover:scale-105 group-hover:brightness-100"
            src={DriverFlipped}
            alt="Driver"
          />
          <div className="absolute bottom-0 left-0 px-5 py-3 font-semibold">
            DRIVER 2
          </div>
        </div>
      </div>
      <div className="mb-[5vh] block w-full md:hidden">
        <Swiper
          data-aos="fade-right"
          data-aos-once="true"
          slidesPerView={1.5}
          spaceBetween={20}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="group relative aspect-[3_/_4] w-full overflow-hidden bg-teal-500/75 text-slate-100 transition duration-300 ease-in-out hover:bg-teal-500">
              <Image
                className="h-full w-full object-cover object-center brightness-90 transition ease-in-out group-hover:scale-105 group-hover:brightness-100"
                src={Driver}
                alt="Driver"
              />
              <div className="absolute bottom-0 left-0 px-5 py-3 font-semibold">
                DRIVER 1
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="group relative aspect-[3_/_4] w-full scale-x-[-1] overflow-hidden bg-sky-500/75 text-slate-100 transition duration-300 ease-in-out hover:bg-sky-500">
              <Image
                className="h-full w-full object-cover object-center brightness-90 transition ease-in-out group-hover:scale-105 group-hover:brightness-100"
                src={Driver}
                alt="Driver"
              />
              <div className="absolute bottom-0 right-0 scale-x-[-1] px-5 py-3 font-semibold">
                DRIVER 2
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
