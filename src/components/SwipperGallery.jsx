import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "@/assets/component-styles/partner-slider.css";
import YourStyleShot from "@/assets/images/find-your-style-component.webp";

const SwipperGalleryHome = () => {
  return (
    <>
      <main
        className="your_style md:py-12 py-4 pointer-events-none"
      >
        <section className="container">
          <Swiper
            slidesPerView={1}
            spaceBetween={5}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            speed={8000}
            loop={true}
            modules={[Autoplay]}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 5,
              },
              768: {
                slidesPerView: 1,
                spaceBetween: 5,
              },
              1024: {
                slidesPerView: 1,
                spaceBetween: 5,
              },
            }}
            className="partner_swiper smooth_slider"
          >
            {listOfPartners.map((styleItems, ind) => {
              return (
                <SwiperSlide key={ind}>
                  <img src={styleItems} alt={`Partners of UA ${ind}`} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </section>
      </main>
    </>
  );
};
export default SwipperGalleryHome;

const listOfPartners = [YourStyleShot, YourStyleShot, YourStyleShot, YourStyleShot, YourStyleShot];