import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/core";
import "swiper/css/autoplay";
import "swiper/css";
import "swiper/css/navigation";
import Card from "./card.js";
import Content from "../data/products";

export default function CoffeeSlider() {
  return (
    <>
      <div className="pt-8 overflow-hidden max-w-max">
        <Swiper
          navigation={true}
          autoplay={{
            disableOnInteraction: false,
          }}
          centeredSlides={true}
          loop={true}
          style={{
            "--swiper-navigation-color": "#606060",
          }}
          modules={[Navigation, Autoplay]}
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
              <SwiperSlide key={items.id}>
                <Card
                  key={items.id}
                  img={items.img}
                  title={items.title}
                  region={items.region}
                  process={items.process}
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
