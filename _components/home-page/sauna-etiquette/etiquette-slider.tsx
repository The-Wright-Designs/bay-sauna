"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import { ArrowUpFromDot } from "lucide-react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import EtiquetteCard from "@/_components/home-page/sauna-etiquette/etiquette-card";

interface EtiquetteItem {
  heading: string;
  paragraph: string;
}

interface Props {
  data: EtiquetteItem[];
}

export default function EtiquetteSlider({ data }: Props) {
  return (
    <div className="desktop:px-10">
      <div className="relative desktop:px-5">
        <button className="hidden desktop:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full border-2 border-white rounded-md p-2 desktop:hover:cursor-pointer desktop:hover:bg-light-blue/50 ease-in-out duration-300 swiper-etiquette-prev">
          <ArrowUpFromDot color="#ffffff" className="-rotate-90" size={20} />
        </button>

        <div className="pt-2 px-2 -ml-2 -mt-2 overflow-hidden">
          <Swiper
            spaceBetween={40}
            slidesPerView={1}
            breakpoints={{
              600: {
                slidesPerView: 2,
              },
              925: {
                slidesPerView: 3,
              },
              1280: {
                slidesPerView: 4,
              },
            }}
            modules={[Pagination, Navigation]}
            pagination={{
              dynamicBullets: true,
              clickable: true,
            }}
            navigation={{
              prevEl: ".swiper-etiquette-prev",
              nextEl: ".swiper-etiquette-next",
            }}
          >
            {data.map((item, index) => (
              <SwiperSlide key={index} className="pb-8">
                <EtiquetteCard
                  heading={item.heading}
                  paragraph={item.paragraph}
                  index={index + 1}
                  cssClasses="aspect-[16/7] min-[525px]:aspect-[16/6] min-[600px]:max-w-[320px] min-[600px]:aspect-square min-[725px]:aspect-[16/11] min-[925px]:aspect-square min-[1025px]:aspect-[16/11] min-[1280px]:aspect-square"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <button className="hidden desktop:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-full border-2 border-white rounded-md p-2 desktop:hover:cursor-pointer desktop:hover:bg-light-blue/50 ease-in-out duration-300 swiper-etiquette-next">
          <ArrowUpFromDot color="#ffffff" className="rotate-90" size={20} />
        </button>
      </div>
    </div>
  );
}
