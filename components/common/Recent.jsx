import Image from "next/image";
import appList from "./appList.json";

import { Pagination, Mousewheel, FreeMode } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/bundle";

export default function Recent({}) {
  const recentActivity = ["Nomis"];
  return (
    <div className="container recent">
      <h2>Recently Activity</h2>
      <div className="recentSwiper">
        <Swiper
          modules={[Pagination, Mousewheel]}
          spaceBetween={-16}
          slidesPerView={"auto"}
          mousewheel={true}
        >
          {recentActivity.map((item, idx) => (
            <SwiperSlide key={`recent item ${idx}`}>
              <div className="swiperPadding">
                <a
                  className="recentItem"
                  href={`${appList[item].link}?utm_source=nomis.cc`}
                >
                  <Image
                    src={appList[item].image}
                    width={128}
                    height={128}
                    alt={item}
                  />
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
