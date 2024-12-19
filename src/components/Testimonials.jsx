import React from "react";
import SubTitle from "./Subtitle";
import "@/assets/component-styles/testimonials.css";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import reviewHeadShot1 from "/images/services/review-headshot-1.png";
import reviewHeadShot2 from "/images/services/review-headshot-2.png";
import reviewHeadShot3 from "/images/services/review-headshot-3.png";
import quoteIcon from "/images/services/quote-icon.webp";
import triangle from "/images/services/triangle.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Images } from "./ListImages";
import { IMAGE_FORMAT, IMAGES } from "./images";
import { FileX } from "lucide-react";

const ReviewData = [
  {
    name: "John Doe",
    remarks:
      "With their logo design services, Unique Advertisers went above and beyond what we expected. They made the effort to comprehend our business concept and created a logo that flawlessly captures it. Our new logo has garnered a lot of positive feedback and has greatly improved our brand's visibility.",
    category: "branding",
    banner: "revBanner1",
    headshot: reviewHeadShot1,
  },
  {
    name: "Jane Smith",
    remarks:
      "Our website construction experience with Unique Advertisers was outstanding. They created a website that works effectively in addition to looking fantastic. They were also professional and responsive. We couldn't be happier with the outcome because the team went above and above to make sure our website satiated our unique requirements.",
    category: "logo",
    banner: "revBanner2",
    headshot: reviewHeadShot2,
  },
  {
    name: "Emily Johnson",
    remarks:
      "For our company, collaborating with Unique Advertisers on our social media marketing campaigns has changed everything. We have been able to effectively communicate with our target audience and grow our online presence because to their strategic approach and meticulous attention to detail. Since working with them, our brand's recognition and customer engagement have increased significantly",
    category: "branding",
    banner: "revBanner3",
    headshot: reviewHeadShot3,
  },
  {
    name: "Michael Brown",
    remarks:
      "The video animation services provided by Unique Advertisers have really made our brand come to life. Their skilled team produced engrossing animations that successfully convey our message and connect with our target audience. We have been able to stand out in a congested digital arena and increase meaningful brand engagement thanks to the animations.s",
    category: "branding",
    banner: "revBanner4",
    headshot: reviewHeadShot1,
  },
];

const Testimonials = () => {
  console.log(IMAGES.SERVICE.ANIMATION + "1." + IMAGE_FORMAT.WEBP);
  return (
    <main className="testimonials_sec relative mx-auto bg-black overflow-hidden pb-36 px-5">
      {Array.from({ length: 5 }).map((_, index) => {
        return (
          <img
            src={IMAGES.SERVICE.ANIMATION + (index + 1) + IMAGE_FORMAT.WEBP}
            alt=""
          />
        );
      })}

      <h2 className="big_title">Testimonials</h2>
      <section className="container-fluid lg:px-[50px] lg:pb-32 pb-16 max-w-[1600px] m-auto">
        <SubTitle
          text={"Testimonials"}
          className={"lg:text-center m-auto lg:mx-0"}
        />
        <section className="mt-10">
          <section className="pe-4 relative">
            <div className="flex flex-row lg:justify-between justify-center">
              <h2 className="heading lg:text-start text-center">
                See What Our <br className="hidden lg:block" />
                <span
                  className="bg_heading"
                  style={{ color: "var(--color-primary)" }}
                >
                  Clients
                </span>{" "}
                Say
              </h2>
            </div>
          </section>
        </section>
        <section>
          <div className="review_cards flex gap-x-24">
            <Swiper
              slidesPerView={1}
              spaceBetween={20}
              speed={8000}
              loop={true}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 10,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 60,
                  navigation: true,
                },
              }}
              className="testimonial_swiper smooth_slider pb-16"
            >
              {ReviewData.map((items, ind) => {
                const { name, category, banner, headshot, remarks } = items;
                const initials = name.split(" ").map((item) => item.charAt(0));
                return (
                  <SwiperSlide key={ind}>
                    <Card
                      className="rev_card text-white"
                      style={{ maxWidth: 400 }}
                      key={ind}
                    >
                      <h2 className="rev_cat">{category}</h2>
                      <div className="reivew_banner">
                        <img
                          src={Images[banner]}
                          alt="Rev banner"
                          srcSet={Images[banner]}
                          className=""
                        />
                      </div>
                      <div className="rev_content relative py-12">
                        <div className="review_head_shots">
                          {/* <img
                            src={headshot}
                            alt="Review Headshot"
                            srcSet={headshot}
                          /> */}
                          <p
                            style={{
                              color: "var(--color-primary)",
                              fontSize: 25,
                              marginTop: 15,
                              borderBlockWidth: 2,
                              borderBlockStyle: "solid",
                              borderColor: "var(--color-primary)",
                              borderRadius: 100,
                              width: 65,
                              height: 65,
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                          >
                            {initials}
                          </p>
                        </div>
                        <CardHeader>
                          <CardTitle>{name || "Robin Brown"}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p>
                            “
                            {remarks ||
                              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
                            ”
                          </p>
                        </CardContent>
                      </div>
                      <div className="quote_icon">
                        <img
                          src={quoteIcon}
                          alt="quote"
                          srcSet={quoteIcon}
                          className=""
                        />
                      </div>
                    </Card>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </section>
        <div className="rev_tri_vec">
          <img src={triangle} alt="Triangle" width={130} />
        </div>
      </section>
    </main>
  );
};

export default Testimonials;
