"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";

export default function CollectionBanner() {
  return (
    <div className="py-5 mx-10">
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        spaceBetween={5}
        slidesPerView={3}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="flex justify-center items-center">
            <Image
              src="/Images/CollectionBanner/slider1.webp"
              alt="Fashion 1"
              width={400}
              height={500}
              className="object-cover rounded-lg"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex justify-center items-center">
            <Image
              src="/Images/CollectionBanner/slider2.webp"
              alt="Fashion 2"
              width={400}
              height={500}
              className="object-cover rounded-lg"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex justify-center items-center">
            <Image
              src="/Images/CollectionBanner/slider3.webp"
              alt="Fashion 3"
              width={400}
              height={500}
              className="object-cover rounded-lg"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex justify-center items-center">
            <Image
              src="/Images/CollectionBanner/slider4.webp"
              alt="Fashion 1"
              width={400}
              height={500}
              className="object-cover rounded-lg"
            />
          </div>
        </SwiperSlide>

<SwiperSlide>
          <div className="flex justify-center items-center">
            <Image
              src="/Images/CollectionBanner/slider5.webp"
              alt="Fashion 1"
              width={400}
              height={500}
              className="object-cover rounded-lg"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex justify-center items-center">
            <Image
              src="/Images/CollectionBanner/slider6.webp"
              alt="Fashion 1"
              width={400}
              height={500}
              className="object-cover rounded-lg"
            />
          </div>
        </SwiperSlide>

      </Swiper>
    </div>
  );
}