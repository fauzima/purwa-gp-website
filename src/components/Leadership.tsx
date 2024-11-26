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
      const response = await fetch(
        "https://randomuser.me/api/?results=6&gender=male&nat=au,ca,ch,de,dk,fi,fr,gb,ie,nl,no,nz,us",
      );
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
    <div className="mx-auto mb-[10vh] flex w-full max-w-screen-2xl flex-col px-4 text-4xl sm:px-8 sm:text-5xl lg:mb-[20vh]">
      <div data-aos="fade-right" data-aos-once="true" className="mb-[5vh]">
        <h1 className="font-light dark:text-sky-300">LEADERSHIP</h1>
      </div>
      <div className="mb-[5vh] hidden flex-wrap content-start gap-6 md:flex">
        {loading
          ? Array.from({ length: 6 }).map((_, idx) => (
              <div
                key={idx}
                className="group relative aspect-[3_/_4] w-full bg-teal-500/75 text-slate-100 hover:bg-teal-500 md:w-[calc(50%-12px)] lg:w-[calc(33.33%-16px)] xl:w-[calc(25%-18px)]"
              ></div>
            ))
          : teams.map((item, idx) => (
              <div
                key={idx}
                className="group relative aspect-[3_/_4] w-full overflow-hidden text-slate-100 transition duration-300 ease-in-out md:w-[calc(50%-12px)] lg:w-[calc(33.33%-16px)] xl:w-[calc(25%-18px)]"
              >
                <Image
                  data-aos="fade-right"
                  data-aos-once="true"
                  className="h-full w-full object-cover object-center brightness-90 transition duration-300 ease-in-out group-hover:brightness-100"
                  src={`https://i.pravatar.cc/1000?img=${65 + idx}`}
                  alt={`${item.name.first} ${item.name.last}`}
                  width={512}
                  height={512}
                />
                <div className="absolute bottom-0 left-0 px-5 py-3 font-semibold">
                  {`${item.name.first} ${item.name.last}`}
                </div>
              </div>
            ))}
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
          {loading
            ? Array.from({ length: 6 }).map((_, idx) => (
                <SwiperSlide key={idx}>
                  <div className="group relative aspect-[3_/_4] w-full overflow-hidden bg-teal-500/75 text-slate-100 hover:bg-teal-500"></div>
                </SwiperSlide>
              ))
            : teams.map((item, idx) => (
                <SwiperSlide key={idx}>
                  <div className="group relative aspect-[3_/_4] w-full overflow-hidden text-slate-100 transition duration-300 ease-in-out">
                    <Image
                      className="h-full w-full object-cover object-center brightness-90 transition duration-300 ease-in-out group-hover:scale-105 group-hover:brightness-100"
                      src={`https://i.pravatar.cc/1000?img=${65 + idx}`}
                      alt={`${item.name.first} ${item.name.last}`}
                      width={1024}
                      height={1024}
                    />
                    <div className="absolute bottom-0 left-0 px-5 py-3 font-semibold">
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
