import React from "react";

// import tw, { styled } from "twin.macro";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import tw from "twin.macro";
function Slick() {
  return (
    <div tw="max-w-[800px] py-1 m-[0px auto] ">
      <br />
			<Swiper
				lazyPreloadPrevNext={}
        spaceBetween={"10px"}
        slidesPerView={1}
        pagination={{
          clickable: true,
        }}
        modules={[]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Card />
        </SwiperSlide>
        <SwiperSlide>
          <Card />
        </SwiperSlide>
        <SwiperSlide>
          <Card />
        </SwiperSlide>
        <SwiperSlide>
          <Card />
        </SwiperSlide>
        <SwiperSlide>
          <Card />
        </SwiperSlide>
        <SwiperSlide>
          <Card />
        </SwiperSlide>
        <SwiperSlide>
          <Card />
        </SwiperSlide>
        <SwiperSlide>
          <Card />
        </SwiperSlide>
        <SwiperSlide>
          <Card />
        </SwiperSlide>
      </Swiper>
      <button tw="block w-1/2 hover:w-full ease-in duration-300 font-extrabold bg-slate-500 m-[3rem auto ] rounded-lg cursor-pointer text-center select-none">
        Is Swiper
      </button>
    </div>
  );
}

export default Slick;

const Card = () => {
  return (
    <div tw="select-none w-full h-[500px]">
      <a
        href="#"
        tw="block  h-full p-6 bg-white border border-gray-200  shadow  dark:bg-gray-800 dark:border-gray-700 "
      >
        <h5 tw="mb-2 text-lg sm:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Noteworthy technology acquisitions 2021
        </h5>
        <p tw="font-normal text-gray-700 dark:text-gray-400 hover:bg-gray-100  dark:hover:bg-gray-700">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
        <p tw="font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
      </a>
    </div>
  );
};
