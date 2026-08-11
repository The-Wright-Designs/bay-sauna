"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import classNames from "classnames";

import "swiper/css";
import "swiper/css/pagination";

interface SupporterItem {
  image: string;
  alt: string;
}

interface Props {
  data: SupporterItem[];
  cssClasses?: string;
}

export default function ProudSupporterSlider({ data, cssClasses }: Props) {
  return (
    <div className={classNames("swiper-supporter", cssClasses)}>
      <Swiper
        spaceBetween={20}
        slidesPerView={2}
        breakpoints={{
          600: {
            slidesPerView: 3,
          },
          800: {
            slidesPerView: 4,
          },
          1000: {
            slidesPerView: 5,
          },
          1280: {
            slidesPerView: 4,
          },
        }}
        loop={data.length > 4}
        autoplay={{ delay: 4000, disableOnInteraction: true }}
        modules={[Pagination, Autoplay]}
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
      >
        {data.map((item, index) => (
          <SwiperSlide key={index} className="pb-8">
            <div className="relative h-[95px] w-full desktop:h-[74px]">
              <Image
                src={item.image}
                alt={item.alt}
                fill
                sizes="(max-width: 799px) 50vw, (max-width: 1279px) 25vw, 320px"
                className="rounded-none object-contain"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
