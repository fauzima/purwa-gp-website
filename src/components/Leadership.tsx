"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Image from "next/image";
import { IUser } from "@/types/user";

export default function Leadership() {
  const [teams, setTeams] = useState<IUser[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchTeams = async () => {
    try {
      const response = await fetch("https://randomuser.me/api/?results=6");
      const data = await response.json();
      setTeams(data.results);
      setLoading(false);
    } catch (error) {
      console.log("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    fetchTeams();
  }, []);

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="max-w-screen-2xl mx-auto w-full mb-[10vh] lg:mb-[20vh] px-4 sm:px-8 flex flex-col text-4xl sm:text-5xl">
      <div data-aos="fade-right" data-aos-once="true" className="mb-[5vh]">
        <h1 className="font-light dark:text-sky-300">LEADERSHIP</h1>
      </div>
      <div className="hidden md:flex flex-wrap content-start gap-6 mb-[5vh]">
        {loading
          ? Array.from({ length: 6 }).map((_, idx) => (
              <div
                key={idx}
                className="group relative w-full md:w-[calc(50%-12px)] lg:w-[calc(33.33%-16px)] xl:w-[calc(25%-18px)] aspect-[3_/_4] bg-teal-500/75 hover:bg-teal-500 overflow-hidden transition ease-in-out duration-300 text-slate-100"
              ></div>
            ))
          : teams.map((item, idx) => (
              <div
                key={idx}
                className="group relative w-full md:w-[calc(50%-12px)] lg:w-[calc(33.33%-16px)] xl:w-[calc(25%-18px)] aspect-[3_/_4] overflow-hidden transition ease-in-out duration-300 text-slate-100"
              >
                <Image
                  data-aos="fade-right"
                  data-aos-once="true"
                  className="h-full w-full object-cover object-center group-hover:scale-105 transition ease-in-out brightness-90 group-hover:brightness-100"
                  src={item.picture.large}
                  alt={`${item.name.first} ${item.name.last}`}
                  width={1024}
                  height={1024}
                />
                <div className="px-5 py-3 absolute bottom-0 left-0 font-semibold">
                  {`${item.name.first} ${item.name.last}`}
                </div>
              </div>
            ))}
      </div>
      <div className="block md:hidden mb-[5vh] w-full">
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
          {loading
            ? Array.from({ length: 6 }).map((_, idx) => (
                <SwiperSlide key={idx}>
                  <div className="group relative w-full aspect-[3_/_4] bg-teal-500/75 hover:bg-teal-500 overflow-hidden transition ease-in-out duration-300 text-slate-100"></div>
                </SwiperSlide>
              ))
            : teams.map((item, idx) => (
                <SwiperSlide key={idx}>
                  <div className="group relative w-full aspect-[3_/_4] overflow-hidden transition ease-in-out duration-300 text-slate-100">
                    <Image
                      className="h-full w-full object-cover object-center group-hover:scale-105 transition ease-in-out brightness-90 group-hover:brightness-100"
                      src={item.picture.large}
                      alt={`${item.name.first} ${item.name.last}`}
                      width={1024}
                      height={1024}
                    />
                    <div className="px-5 py-3 absolute bottom-0 left-0 font-semibold">
                      {`${item.name.first} ${item.name.last}`}
                    </div>
                  </div>
                </SwiperSlide>
              ))}
        </Swiper>
      </div>
    </div>
  );
}
