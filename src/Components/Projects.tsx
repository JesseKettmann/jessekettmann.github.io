import { SwiperSlide } from "swiper/react";
import Carousel from "./Carousel";

function Projects() {
  return (
    <div className="w-full h-[700px] overflow-hidden bg-background-mint">
      <div className="relative mx-auto max-w-400 h-full items-center p-8">
        <h2 className="absolute left-1/2 -translate-x-1/2 text-4xl font-light mt-6 text-dark z-10">
          Projects
        </h2>
        <div className="h-full w-full rounded shadow overflow-hidden">
          <Carousel>
            <SwiperSlide>
              <div className="bg-gray-100 w-full h-full" />
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-gray-200 w-full h-full" />
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-gray-300 w-full h-full" />
            </SwiperSlide>
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default Projects;
