import { Swiper } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { useRef, useState } from "react";
import type { ReactNode, HTMLAttributes } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

import "swiper/swiper-bundle.css";

interface Props extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

const Carousel = ({ children }: Props) => {
  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);

  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  return (
    <div className="relative w-full h-full">
      {/* Custom navigation buttons */}
      <div
        ref={prevRef}
        className={`
          w-11 h-11 sm:w-13 sm:h-13 sm:mx-2 rounded-full flex items-center justify-center text-white absolute left-3 xl:top-1/2
          translate-y-[calc((100vw)*0.1735-50%)] sm:translate-y-[calc((100vw-6rem)*0.1735-50%)]
          xl:-translate-y-1/2 z-10 shadow transition-colors duration-200
          ${
            isBeginning
              ? "bg-accent/60"
              : "bg-accent hover:bg-accent-highlight cursor-pointer"
          }
        `}
      >
        <ChevronLeftIcon className="h-6 w-6" />
      </div>

      <div
        ref={nextRef}
        className={`
          w-11 h-11 sm:w-13 sm:h-13 sm:mx-2 rounded-full flex items-center justify-center text-white absolute right-3 xl:top-1/2
          translate-y-[calc((100vw)*0.1735-50%)] sm:translate-y-[calc((100vw-6rem)*0.1735-50%)]
          xl:-translate-y-1/2 z-10 shadow transition-colors duration-200
          ${
            isEnd
              ? "bg-accent/60"
              : "bg-accent hover:bg-accent-highlight cursor-pointer"
          }
        `}
      >
        <ChevronRightIcon className="h-6 w-6" />
      </div>

      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={1}
        speed={400}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          if (
            swiper.params.navigation &&
            typeof swiper.params.navigation !== "boolean"
          ) {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }
        }}
        pagination={{ clickable: true }}
        onSlideChange={(swiper) => {
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
        onInit={(swiper) => {
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
        resistance={true}
        resistanceRatio={0}
        className="w-full h-full bg-bright-500 sm:bg-bright-400"
      >
        {children}
      </Swiper>
    </div>
  );
};

export default Carousel;
