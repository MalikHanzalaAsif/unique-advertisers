import React, { useState } from "react";
import "@/assets/component-styles/home.css";
import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import OverlayTopVect from "/images/services/overlay-top.webp";
import OverlayBottomVect from "/images/services/hero-bottom-vector.webp";
import BlushHeroRight from "/images/services/blush-hero-bottom.webp";
import HeroShot from "/images/services/hero-shot.webp";
import ArrowHeroDown from "/images/services/arrow-down-big.webp";
import PartnerLogoSlider from "@/components/PartnerLogoSlider";
import CheckIcon from "/images/services/check-icon.svg";
import ArrowSwing from "/images/services/arrow-swing.webp";
import GraphShot from "/images/services/graph-rectangle.webp";
import CasualDress from "/images/services/casual-dress.webp";
import TableShot from "/images/services/table-component.webp";
import cylinder from "/images/services/box-vector.png";
import abtSM from "/images/services/abt-dress-sm.png";
import { IoMdArrowRoundUp } from "react-icons/io";
import SolTriangle from "/images/services/sol-triangle.png";
import Projects from "@/components/Projects";
import SubTitle from "@/components/Subtitle";
import Testimonials from "@/components/Testimonials";
import ContactBar from "@/components/ContactBar";
import Packages from "@/components/Packages";
import Faq from "@/components/Faq";
import DeigitalMarketingService from "/images/services/digital-marketing.jpg";
import GraphicService from "/images/services/graphic-design.jpg";
import WebDevService from "/images/services/Web-dev.jpg";
import BrandingService from "/images/services/branding-service.jpg";
import VideoAnimationService from "/images/services/animation/people-office.webp";
import StreamersService from "/images/services/streamers-service.png";
import YourStyleShot from "/images/services/find-your-style-component.webp";
import Wrapper from "@/components/Wrapper";

const Homepage = () => {
  // const auth = JSON.parse(localStorage.getItem("user"));
  // const auth = useSelector((state) => state.auth.user);
  return (
    <>
      <Hero />
      <PartnerLogoSlider />
      <About />
      <SolutionsComp />
      <SolutionsTabs />
      <Projects />
      <Testimonials />
      <ContactBar />
      <Packages />
      <Faq />
    </>
  );
};

export default Homepage;

const Hero = () => {
  return (
    <main className="hero relative mx-auto">
      <Wrapper>
        <div className="blur_left_edge blur_right_edge absolute right-0 top-0 -z-10">
          <img src={OverlayTopVect} alt="Overlay Top" />
        </div>
        <div className="absolute hero_bg_blush hero_blush_left">
          <img src={BlushHeroRight} alt="Hero image bg shadow" />
        </div>

        <main className="container pt-[10rem] lg:pb-40 pb-16 relative">
          <section className="grid lg:grid-cols-2 gap-0 lg:gap-6 text-center lg:text-start">
            <div className="flex flex-col justify-center mb-28 order-2 lg:order-1">
              <h1 className="heading">
                We Are a{" "}
                <span
                  className="bg_heading"
                  style={{ color: "var(--color-primary)" }}
                >
                  Digital
                </span>{" "}
                <br className="break" />
                <span
                  className="bg_heading"
                  style={{ color: "var(--color-primary)" }}
                >
                  Marketing
                </span>{" "}
                & Creative Agency
              </h1>
              <p className="py-8 leading-8">
              Unique Advertisers: Amazing you with all of your digital requirements indulging Twitch Designs, SEO’s, UI/UX Design, Website Development and Social Media Marketing. Feel free to sweep through and get all your requirements done under one roof.
              </p>
              <div>
                <NavLink className="cta glow" to="/contact">
                  <Button>Schedule Your Call</Button>
                </NavLink>
              </div>
            </div>
            <div className="relative order-1 lg:order-2">
              <div>
                <img src={HeroShot} alt="Hero Image" />
              </div>
              <div className="absolute hero_bg_blush">
                <img src={BlushHeroRight} alt="Hero image bg shadow" />
              </div>
            </div>
          </section>

          <div className="arrow_hero absolute">
            <a href="#aboutSec">
              <img
                src={ArrowHeroDown}
                alt="ArrowHeroDown"
                width={165}
                height={154}
              />
            </a>
          </div>
        </main>

        <div className="blur_left_edge absolute left-0 bottom-0 -z-10">
          <img src={OverlayBottomVect} alt="Overlay Bottom" />
        </div>
      </Wrapper>
    </main>
  );
};

const About = () => {
  const aboutList = [
    "Unique Designs",
    "Money Back Guarantee",
    "Customer Satisfaction",
    "24/7 Support",
    "Top Tier Digital Marketing",
    "Supportive team"
  ];
  return (
    <main className="about_sec relative mx-auto" id="aboutSec">
      <section className="container lg:py-32 pt-20 text-center lg:text-start">
        <div className="absolute hero_bg_blush hero_blush_left">
          <img src={BlushHeroRight} alt="About Blush left" />
        </div>
        <SubTitle className={"lg:text-center m-auto lg:mx-0"} />
        <section className="mt-10 grid lg:grid-cols-2">
          <section className="lg:pe-4 relative">
            <div className="flex flex-col justify-center">
              <h2 className="heading">
                We Are More Than A{" "}
                <span
                  className="bg_heading"
                  style={{ color: "var(--color-primary)" }}
                >
                  Digital Agency
                </span>
              </h2>
              <p className="py-8 leading-8">
              Be our partner in digital creations here at Unique Advertisers, Where with your imagination and our execution, we can create the perfect fallout.
              </p>
              <div className="icon_list pb-8">
                <ul className="grid sm:grid-cols-2">
                  {aboutList.map((items, ind) => {
                    return (
                      <li
                        key={ind}
                        className="flex items-center lg:justify-start justify-center gap-5 my-2"
                      >
                        <span>
                          <img
                            src={CheckIcon}
                            alt="CheckIcon"
                            srcSet={CheckIcon}
                          />
                        </span>
                        <span>{items}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div>
                <NavLink className="cta glow" to="/about">
                  <Button>Get In Touch</Button>
                </NavLink>
              </div>
              <div className="arrow_swing hidden md:block">
                <img src={ArrowSwing} alt="rounded arrow" srcSet={ArrowSwing} />
              </div>
            </div>
          </section>
          <section className="about_sec_last relative hidden lg:block">
            <div className="graph_shot">
              <img
                src={GraphShot}
                alt="Graph"
                srcSet={GraphShot}
                width={294}
                height={137}
              />
            </div>
            <div className="your_style">
              <img
                src={YourStyleShot}
                alt="Find Your Style"
                srcSet={YourStyleShot}
                width={641}
                height={445}
              />
              {/* <SwipperGalleryHome /> */}
            </div>
            <div className="casual_dress">
              <img
                src={CasualDress}
                alt="Casual Dress"
                srcSet={CasualDress}
                width={450}
                height={450}
              />
            </div>
            <div className="about_table">
              <img
                src={TableShot}
                alt="Table Shot"
                srcSet={TableShot}
                width={909}
                height={118}
              />
            </div>
            <div className="cylinder">
              <img
                src={cylinder}
                alt="cylinder Box"
                srcSet={cylinder}
                width={80}
              />
            </div>
          </section>
          <section className="lg:hidden mt-12 max-w-[600px] text-center block mx-auto">
            <img src={abtSM} alt="SM" srcSet={abtSM} />
          </section>
        </section>
      </section>
    </main>
  );
};

const SolutionsComp = () => {
  return (
    <main className="sol_sec relative max-w-[1400px] m-auto">
      <section className="container-fluid lg:py-32 py-20 lg:px-[10px]">
        <div className="absolute hero_bg_blush hero_blush_left">
          <img src={BlushHeroRight} alt="About Blush left" />
        </div>
        <SubTitle
          text={"Services"}
          className={"lg:text-center m-auto lg:mx-0"}
        />
        <section className="mt-10">
          <section className="pe-4 relative">
            <div className="flex lg:flex-nowrap flex-wrap lg:justify-between justify-center lg:text-left text-center">
              <h2 className="heading lg:w-[31%] w-[100%]">
                Solutions We <br />
                <span
                  className="bg_heading"
                  style={{ color: "var(--color-primary)" }}
                >
                  Provide
                </span>
              </h2>
              <p
                className="leading-8 lg:px-12 lg:w-[41%] w-[100%]"
                style={{ maxWidth: 700 }}
              >
                Welcome to Unique Advertisers, where first-rate service is
                provided with accuracy and consideration to satisfy your needs.
                Our passionate staff is focused to providing exceptional
                results, whether you're looking for web and app development,
                branding, graphic design, or streaming skills and more. Find out
                how our specialized services, created to go above and beyond,
                can improve your experience. Here at Unique Advertisers, your
                satisfaction is our top concern.
              </p>
              <div className="lg:w-[28%] w-[250px] mt-2">
                <NavLink className="cta glow solu_but" to="/services">
                  <Button>View All Services</Button>
                </NavLink>
              </div>
            </div>
          </section>
        </section>
      </section>
    </main>
  );
};

export const SolutionsTabs = () => {
  const [hoverIndex, setHoverIndex] = useState(0);

  const solTab = [
    {
      title: "Web & Mobile Development",
      desc: "created aesthetically pleasing, user-friendly websites. websites that are search engine optimized and increase visitors.",
      link: "/services/website-development",
    },
    {
      title: "Graphic Design",
      desc: "created iconic logos that encapsulate the spirit of the brand. gotten praise for their original designs.",
      link: "/services/graphic-design",
    },
    {
      title: "Digital Marketing",
      desc: "strategically implemented efforts to raise brand awareness. produced leads by using focused advertising.",
      link: "/services/digital-marketing",
    },
    {
      title: "Branding and Strategy",
      desc: "formulated thorough branding standards. worked in close partnership with clients to realize their goal.",
      link: "/services/branding-and-strategy",
    },
    {
      title: "Video Animation",
      desc: "Bring ideas to life with stunning animations—explained videos, promos, and presentations crafted to leave a lasting impression.",
      link: "/services/animation",
    },
    {
      title: "Streamers Templates",
      desc: "Boost your online presence with our tailored digital marketing services, including email campaigns, social media, PPC, and SEO. We create strategies to reach your audience and achieve your business goals.",
      link: "/services/streamers-templates",
    },
  ];

  const solMedia = [
    {
      type: "image",
      src: WebDevService,
    },
    {
      type: "image",
      src: GraphicService,
    },
    {
      type: "image",
      src: DeigitalMarketingService,
    },
    {
      type: "image",
      src: BrandingService,
    },
    {
      type: "image",
      src: VideoAnimationService,
    },
    {
      type: "image",
      src: StreamersService,
    },
    // Add other images here
  ];

  return (
    <>
      <main className="sol_tab_sec relative max-w-[1600px] m-auto px-1">
        <section className="pb-16 sm:py-16 sm:pt-0 py-12 container-fluid lg:px-[50px]">
          <section className="mt-10 flex xl:flex-row flex-col justify-between items-center">
            <div className="sol_shot">
              <div className="triangle">
                <img
                  src={SolTriangle}
                  srcSet={SolTriangle}
                  alt="Triangle"
                  width={130}
                />
              </div>
              {solMedia.map((item, ind) => (
                <div
                  className="laptopShot"
                  id={`title${ind}`}
                  style={{ display: ind === hoverIndex ? "block" : "none" }}
                  key={ind}
                >
                  {item.type === "image" ? (
                    <img src={item.src} srcSet={item.src} alt="Laptop" />
                  ) : (
                    <video width="300" height="600" autoPlay muted loop>
                      <source src={item.src} type="video/mp4" />
                      Your browser does not support HTML video.
                    </video>
                  )}
                </div>
              ))}
              <div className="rect_shap"></div>
            </div>
            <div className="sol_full flex flex-col gap-y-3 w-full">
              {solTab.map((items, ind) => (
                <NavLink to={items.link} key={ind}>
                  <div
                    className="flex xl:flex-row flex-col items-start justify-between 2xl:gap-18 xl:gap-12 md:gap-5 gap-y-2 text-center xl:text-start"
                    id={`title${ind}`}
                    data-image={`${solMedia[0].src}`}
                    onMouseEnter={() => setHoverIndex(ind)}
                    onMouseLeave={() => setHoverIndex(0)} // Reset to the first image or any desired default behavior
                  >
                    <h4>{"0" + (ind + 1)}</h4>
                    <h3 className="xl:w-[300px]">{items.title}</h3>
                    <p className="leading-8 lg:w-[350px] w-full">
                      {items.desc}
                    </p>
                    <IoMdArrowRoundUp className="xl:block hidden" />
                  </div>
                </NavLink>
              ))}
            </div>
          </section>
        </section>
      </main>
    </>
  );
};
