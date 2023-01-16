import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import Card from "./card.js";
import Content from "../data/products";

export default function Carousel() {
  return (
    <>
      <div className="pt-8 overflow-hidden">
        <Swiper
          navigation={true}
          style={{
            "--swiper-navigation-color": "#606060",
          }}
          modules={[Navigation]}
          loop={true}
          slidesPerView="auto"
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
            1280: {
              slidesPerView: 3,
            },
          }}
          pagination={{
            clickable: true,
          }}
          suppressHydrationWarning
        >
          {Content.map((items) => {
            return (
              <SwiperSlide key={items.id} className="px-8 md:px-20 xl:px-28">
                <Card
                  key={items.id}
                  img={items.img}
                  title={items.title}
                  region={items.region}
                  notes={items.notes}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
}
