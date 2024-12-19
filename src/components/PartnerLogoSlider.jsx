import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "@/assets/component-styles/partner-slider.css";
import Logo1 from "/images/services/partner-logos-1.webp";
import Logo2 from "/images/services/partner-logos-2.webp";
import Logo3 from "/images/services/partner-logos-3.webp";
import Logo4 from "/images/services/partner-logos-4.webp";
import Logo5 from "/images/services/partner-logos-5.webp";

const PartnerLogoSlider = () => {
  return (
    <>
      <main
        className="partners_logo md:py-12 py-4 pointer-events-none"
        style={{ background: "var(--color-primary)" }}
      >
        <section className="">
          <Swiper
            slidesPerView={4}
            spaceBetween={20}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            speed={8000}
            loop={true}
            modules={[Autoplay]}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 60,
              },
            }}
            className="partner_swiper smooth_slider"
          >
            {listOfPartners.map((logoItems, ind) => {
              return (
                <SwiperSlide key={ind}>
                  <img src={logoItems} alt={`Partners of UA ${ind}`} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </section>
      </main>
    </>
  );
};
export default PartnerLogoSlider;

const listOfPartners = [Logo1, Logo2, Logo3, Logo4, Logo5];
