import React, { useRef, useEffect } from "react";
import { TfiControlPlay } from "react-icons/tfi";
import { FaSearchPlus } from "react-icons/fa";
import "react-modal-video/css/modal-video.min.css";
import ModalVideo from "react-modal-video";
import ImageZoom from "@/components/ImageZoom";
import BlushHeroRight from "/images/services/blush-hero-bottom.webp";
import SubTitle from "@/components/Subtitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import aboutOverlay from "/images/services/about-overlay.webp";
import cylinder from "/images/services/box-vector.png";
import triangle from "/images/services/triangle.png";
import { Images } from "./ListImages";

import videos from "./Videos";

const Projects = () => {
  return (
    <main
      className="projects_sec relative mx-auto overflow-hidden bg-black px-1"
      id="servicesec"
    >
      <div className="blur_left_edge blur_right_edge absolute right-0 top-0 z-0">
        <img src={aboutOverlay} alt="Overlay Top" />
      </div>
      <section
        className="container-fluid lg:px-[50px] lg:py-32 pt-12 pb-20 relative"
        style={{ zIndex: 1 }}
      >
        <div className="cylinder">
          <img
            src={cylinder}
            alt="cylinder Box"
            srcSet={cylinder}
            width={100}
          />
        </div>
        <div className="absolute hero_bg_blush hero_blush_left">
          <img src={BlushHeroRight} alt="About Blush left" />
        </div>

        <section className="mt-10 text-center">
          <SubTitle text={"Portfolio"} className={"mx-auto"} />
          <section className="pt-6 relative">
            <div className="flex flex-col justify-center">
              <h2 className="heading">
                What We Have{" "}
                <span
                  className="bg_heading"
                  style={{ color: "var(--color-primary)" }}
                >
                  Done
                </span>{" "}
                So Far
              </h2>
              <p className="py-8 leading-8 mx-auto" style={{ maxWidth: 1100 }}>
                A wide range of services, such as website design, digital
                marketing campaigns, and branding strategies, are shown in our
                portfolio. Our expertise lies in creating visually striking
                content and intuitive user interfaces that enhance your online
                visibility. Find out how our experience may improve the online
                presence of your brand.
              </p>
            </div>
            <AnimatedTabs />
          </section>
          <div className="text-center mt-12">
            <NavLink className="cta glow" to="/portfolio">
              <Button>View More Projects</Button>
            </NavLink>
          </div>
        </section>
        <div className="triangle">
          <img src={triangle} alt="Triangle" width={130} />
        </div>
      </section>
      {/* Container ends */}
    </main>
  );
};

export default Projects;

export function PortfolioTabs({ activeService }) {
  let [activeTab, setActiveTab] = useState(tabs[0].id);
  // console.log("Current Service", activeService);
  // console.log("Tab ID: ", tabs[0].id);

  useEffect(() => {
    tabs.forEach((tab) => {
      if (activeService === tab.id) {
        setActiveTab(activeService);
      }
    });
  }, [activeService, tabs]);

  return (
    <>
      {!activeService ? (
        <div className="tab_bar flex justify-center mb-14">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`tabs_btn ${
                activeTab === tab.id ? "active_tab" : " hover:text-white/60"
              } relative px-8 text-white outline-sky-400 transition focus-visible:outline-2 uppercase`}
              style={{
                WebkitTapHighlightColor: "transparent",
              }}
            >
              {activeTab === tab.id && (
                <motion.span
                  layoutId="bubble"
                  className=" absolute inset-0 z-10 mix-blend-difference"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              {tab.label}
            </button>
          ))}
        </div>
      ) : (
        <section className="container text-center pb-5">
          <h2 className="heading capitalize pb-5">
            Our {activeService === "anim" ? "Video Animation" : activeService}{" "}
            Portfolio
          </h2>
        </section>
      )}
      <section className="Potfolio_tabs">
        {tabs.map((tab) =>
          activeTab === tab.id ? <TabContent key={tab.id} tab={tab} /> : null
        )}
      </section>
    </>
  );
}

const TabsData = ({ activeTab }) => {
  // console.log(activeTab);
  const projectRefs = useRef([]);
  const [isOpen, setOpen] = useState(false);
  const [videoSrc, setVideoSrc] = useState("");
  let projectShots;
  if (activeTab === "brand") {
    projectShots = [
      {
        type: "image",
        imgSrc: "BrandingShotSeven",
        projectTitle: "Branding",
        projectDesc:
          "The branding templates on your website that offer services are carefully crafted to create a unified and polished brand throughout all correspondence. Our templates, which include editable components like font, color schemes, and logos, guarantee consistent branding in both print and digital media. They enable your company to uphold brand integrity and leave a lasting impact on both customers and clients.",
      },
      {
        type: "image",
        imgSrc: "BrandingShotNine",
        projectTitle: "Branding",
        projectDesc:
          "The branding templates on your website that offer services are carefully crafted to create a unified and polished brand throughout all correspondence. Our templates, which include editable components like font, color schemes, and logos, guarantee consistent branding in both print and digital media. They enable your company to uphold brand integrity and leave a lasting impact on both customers and clients.",
      },
      {
        type: "image",
        imgSrc: "BrandingShotTen",
        projectTitle: "Branding",
        projectDesc:
          "The branding templates on your website that offer services are carefully crafted to create a unified and polished brand throughout all correspondence. Our templates, which include editable components like font, color schemes, and logos, guarantee consistent branding in both print and digital media. They enable your company to uphold brand integrity and leave a lasting impact on both customers and clients.",
      },
      {
        type: "image",
        imgSrc: "BrandingShotEleven",
        projectTitle: "Branding",
        projectDesc:
          "The branding templates on your website that offer services are carefully crafted to create a unified and polished brand throughout all correspondence. Our templates, which include editable components like font, color schemes, and logos, guarantee consistent branding in both print and digital media. They enable your company to uphold brand integrity and leave a lasting impact on both customers and clients.",
      },
      {
        type: "image",
        imgSrc: "BrandingShotForteen",
        projectTitle: "Branding",
        projectDesc:
          "The branding templates on your website that offer services are carefully crafted to create a unified and polished brand throughout all correspondence. Our templates, which include editable components like font, color schemes, and logos, guarantee consistent branding in both print and digital media. They enable your company to uphold brand integrity and leave a lasting impact on both customers and clients.",
      },
    ];
  } else if (activeTab === "website") {
    projectShots = [
      {
        type: "image",
        imgSrc: "WebsiteShotThree",
        projectTitle: "UI/UX Website Design",
        projectDesc:
          "For your service-oriented website, a UI/UX website design blends visually appealing aspects with easy-to-use navigation. It emphasizes functionality that is centered around the user, guaranteeing smooth interactions and an improved user experience. The design places a strong emphasis on mobile layouts and contemporary aesthetics, offering a professional platform that encourages interaction and faith in your offerings.",
      },
      {
        type: "image",
        imgSrc: "WebsiteShotFour",
        projectTitle: "UI/UX Website Design",
        projectDesc:
          "For your service-oriented website, a UI/UX website design blends visually appealing aspects with easy-to-use navigation. It emphasizes functionality that is centered around the user, guaranteeing smooth interactions and an improved user experience. The design places a strong emphasis on mobile layouts and contemporary aesthetics, offering a professional platform that encourages interaction and faith in your offerings.",
      },
      {
        type: "image",
        imgSrc: "WebsiteShotSix",
        projectTitle: "UI/UX Website Design",
        projectDesc:
          "creation of a website for your business Building a strong online presence according to your company's requirements is part of website provision. Our area of expertise is building user-friendly, scalable websites with improved performance and responsive design. Our knowledge guarantees that your website is ready to draw in, hold on to, and convert users—thereby improving your online presence and commercial success.",
      },
      {
        type: "image",
        imgSrc: "WebsiteShotEleven",
        projectTitle: "UI/UX Website Design",
        projectDesc:
          "creation of a website for your business Building a strong online presence according to your company's requirements is part of website provision. Our area of expertise is building user-friendly, scalable websites with improved performance and responsive design. Our knowledge guarantees that your website is ready to draw in, hold on to, and convert users—thereby improving your online presence and commercial success.",
      },
      {
        type: "image",
        imgSrc: "WebsiteShotTwelve",
        projectTitle: "Website's App Design",
        projectDesc:
          "Your service-oriented website's app design is painstakingly created for the best possible functionality and user experience. To make sure your software stands out in terms of usefulness and visual appeal, we concentrate on user-friendly interfaces, smooth navigation, and contemporary aesthetics. Utilizing user research and state-of-the-art design concepts, our methodology creates an app that increases user pleasure and engagement.",
      },
    ];
  } else if (activeTab === "social") {
    projectShots = [
      {
        type: "image",
        imgSrc: "SocialShotOne",
        projectTitle: "Social Media",
        projectDesc:
          "Your website that offers services has social media designs that are optimized to increase visibility and engagement. Our designs combine clever hashtag placement, attention-grabbing language, and eye-catching imagery to increase brand awareness and generate traffic. They are customized to meet the specific needs of every platform, guaranteeing unified messaging and efficient dissemination of your services to a wide audience.",
      },
      {
        type: "image",
        imgSrc: "SocialShotTwo",
        projectTitle: "Social Media",
        projectDesc:
          "Your website that offers services has social media designs that are optimized to increase visibility and engagement. Our designs combine clever hashtag placement, attention-grabbing language, and eye-catching imagery to increase brand awareness and generate traffic. They are customized to meet the specific needs of every platform, guaranteeing unified messaging and efficient dissemination of your services to a wide audience.",
      },
      {
        type: "image",
        imgSrc: "SocialShotThree",
        projectTitle: "Social Media",
        projectDesc:
          "Your website that offers services has social media designs that are optimized to increase visibility and engagement. Our designs combine clever hashtag placement, attention-grabbing language, and eye-catching imagery to increase brand awareness and generate traffic. They are customized to meet the specific needs of every platform, guaranteeing unified messaging and efficient dissemination of your services to a wide audience.",
      },
      {
        type: "image",
        imgSrc: "SocialShotFour",
        projectTitle: "Social Media",
        projectDesc:
          "Your website that offers services has social media designs that are optimized to increase visibility and engagement. Our designs combine clever hashtag placement, attention-grabbing language, and eye-catching imagery to increase brand awareness and generate traffic. They are customized to meet the specific needs of every platform, guaranteeing unified messaging and efficient dissemination of your services to a wide audience.",
      },
      {
        type: "image",
        imgSrc: "SocialShotFive",
        projectTitle: "Social Media",
        projectDesc:
          "Your website that offers services has social media designs that are optimized to increase visibility and engagement. Our designs combine clever hashtag placement, attention-grabbing language, and eye-catching imagery to increase brand awareness and generate traffic. They are customized to meet the specific needs of every platform, guaranteeing unified messaging and efficient dissemination of your services to a wide audience.",
      },
      {
        type: "image",
        imgSrc: "SocialShotSix",
        projectTitle: "Social Media",
        projectDesc:
          "Your website that offers services has social media designs that are optimized to increase visibility and engagement. Our designs combine clever hashtag placement, attention-grabbing language, and eye-catching imagery to increase brand awareness and generate traffic. They are customized to meet the specific needs of every platform, guaranteeing unified messaging and efficient dissemination of your services to a wide audience.",
      },
    ];
  } else if (activeTab === "anim") {
    projectShots = videos.map((video, index) => ({
      type: "video",
      src: video.name,
      // poster: `/images/services/animation/anime-poster-${index + 1}.webp`,
      poster: `ANIM_POSTER_${index + 1}`,
      projectTitle: `Vide Animation ${index + 1}`,
      projectDesc: `animation for your use Having a website with engaging and dynamic content increases user engagement. Our expertise lies in crafting animations that efficiently communicate your message, be it via interactive features, motion graphics, or explainer movies, guaranteeing a captivating and unforgettable user experience.
`,
    }));
  } else if (activeTab === "stream") {
    projectShots = [
      {
        type: "image",
        imgSrc: "StreamShotOne",
        projectTitle: "Streamers Templates",
        projectDesc:
          "The dynamic world of live streaming is catered to by the streamers designs for your service-oriented website. Our specialty is producing dynamic alerts, eye-catching overlays, and unique visuals that improve viewer engagement and help people recognize your business. Our designs are made to capture each streamer's distinct personality and flair, guaranteeing a polished and engrossing viewing experience.",
      },
      {
        type: "image",
        imgSrc: "StreamShotTwo",
        projectTitle: "Streamers Templates",
        projectDesc:
          "The dynamic world of live streaming is catered to by the streamers designs for your service-oriented website. Our specialty is producing dynamic alerts, eye-catching overlays, and unique visuals that improve viewer engagement and help people recognize your business. Our designs are made to capture each streamer's distinct personality and flair, guaranteeing a polished and engrossing viewing experience.",
      },
      {
        type: "image",
        imgSrc: "StreamShotThree",
        projectTitle: "Streamers Templates",
        projectDesc:
          "The dynamic world of live streaming is catered to by the streamers designs for your service-oriented website. Our specialty is producing dynamic alerts, eye-catching overlays, and unique visuals that improve viewer engagement and help people recognize your business. Our designs are made to capture each streamer's distinct personality and flair, guaranteeing a polished and engrossing viewing experience.",
      },
      {
        type: "image",
        imgSrc: "StreamShotFour",
        projectTitle: "Streamers Templates",
        projectDesc:
          "The dynamic world of live streaming is catered to by the streamers designs for your service-oriented website. Our specialty is producing dynamic alerts, eye-catching overlays, and unique visuals that improve viewer engagement and help people recognize your business. Our designs are made to capture each streamer's distinct personality and flair, guaranteeing a polished and engrossing viewing experience.",
      },
    ];
  } else {
    // Default is Tab Logos
    projectShots = [
      {
        type: "image",
        imgSrc: "LogoShotThirteen",
        projectTitle: "Mariana",
        projectDesc:
          "A personalized 'Mariana' logo for your website offering services exudes style and expertise. Its elegant color scheme and clean typography provide a sense of dependability and credibility, making it the ideal visual identity to draw in and hold the attention of your target audience.",
      },
      {
        type: "image",
        imgSrc: "LogoShotTwo",
        projectTitle: "Global Solar",
        projectDesc:
          "For your website offering services, a personalized logo called 'Global Solar' combines elements of sustainability and innovation. With its sun-inspired design and vivid green colors, it represents the company's dedication to modern technology and renewable energy, making it a perfect logo to highlight experience in the manufacturing of solar panels.",
      },
      {
        type: "image",
        imgSrc: "LogoShotThree",
        projectTitle: "Graffiti-inspired Design",
        projectDesc:
          "A logo for your service-oriented website with a graffiti-inspired design radiates originality and urban style. It appeals to a young, dynamic audience and stands out as a sign of unusual service excellence with its strong, dynamic lines and brilliant colors that embody the spirit of innovation and modernity.",
      },
      {
        type: "image",
        imgSrc: "LogoShotEight",
        projectTitle: "Gyan Sutra",
        projectDesc:
          "A logo for 'Gyan Sutra' for your website that offers services combines knowledge and technology. It emphasizes knowledge and innovation with its subtle tech features and elegant, modern font. The design is indicative of an advanced method of providing services, making it appealing to tech-savvy consumers looking for knowledge and dependability in digital solutions.",
      },
      {
        type: "image",
        imgSrc: "LogoShotNine",
        projectTitle: "",
        projectDesc: "",
      },
    ];
  }
  const handleClick = (ind) => {
    const item = projectShots[ind];
    if (item.type === "video") {
      const video = videos.find((video) => video.name === item.src);
      if (video) {
        setVideoSrc(video.sources[0].src);
        setOpen(true);
      }
    } else {
      projectRefs.current[ind].current.children[0].children[0].click();
    }
  };

  return (
    <>
      <div className="tab_shots">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          speed={8000}
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: true,
          }}
          navigation={false}
          modules={[Autoplay, Navigation]}
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
              slidesPerView: 4,
              spaceBetween: 10,
              navigation: true,
            },
          }}
          className="projects_swiper smooth_slider"
        >
          {projectShots.map((items, ind) => {
            projectRefs.current[ind] =
              projectRefs.current[ind] || React.createRef();
            return (
              <SwiperSlide key={ind}>
                <div
                  className="tab_inner cursor-pointer"
                  key={ind}
                  onClick={() => handleClick(ind)}
                  ref={projectRefs.current[ind]}
                  data-proj={ind}
                >
                  <div className="tab_inner_shot">
                    {items.type === "image" ? (
                      <ImageZoom
                        src={Images[items.imgSrc]}
                        alt="Tab shots"
                        srcSet={Images[items.imgSrc]}
                      />
                    ) : (
                      <div className="video-thumbnail">
                        <img
                          src={Images[items.poster]}
                          alt="Video poster"
                          className="video-thumbnail"
                        />
                        <TfiControlPlay
                          className="play_icon"
                          style={{
                            background: "var(--color-primary)",
                            width: "100px",
                            height: "100px",
                            position: "absolute",
                            top: "40%",
                            left: "40%",
                            borderRadius: "100px",
                            padding: "30px 10px",
                          }}
                        />
                      </div>
                    )}
                  </div>
                  <div className="tab_inner_content">
                    <div className="shot_content">
                      <h4>
                        {items.projectTitle
                          ? items.projectTitle
                          : "E-Commerce Website"}
                      </h4>
                      <p>
                        {!items.projectDesc
                          ? "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                          : items.projectDesc}
                      </p>
                    </div>
                    <FaSearchPlus fontSize={40} />
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <ModalVideo
        channel="custom"
        Autoplay
        isOpen={isOpen}
        url={videoSrc}
        onClose={() => setOpen(false)}
      />
    </>
  );
};

let tabs = [
  { id: "logo", label: "Logo", description: <TabsData activeTab={"logo"} /> },
  {
    id: "brand",
    label: "Branding",
    description: <TabsData activeTab={"brand"} />,
  },
  {
    id: "website",
    label: "Website",
    description: <TabsData activeTab={"website"} />,
  },
  {
    id: "social",
    label: "Social Media",
    description: <TabsData activeTab={"social"} />,
  },
  {
    id: "anim",
    label: "Animation",
    description: <TabsData activeTab={"anim"} />,
  },
  {
    id: "stream",
    label: "streamers templates",
    description: <TabsData activeTab={"stream"} />,
  },
];

function TabContent({ tab }) {
  return (
    <>
      {/* <div className="mt-2">
        <h2 className="text-xl font-bold">{tab.label}</h2>
      </div> */}
      {tab.description}
    </>
  );
}

function AnimatedTabs() {
  let [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <>
      <div className="tab_bar flex mb-12 justify-center md:mb-14 flex-wrap gap-y-3">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`tabs_btn ${
              activeTab === tab.id ? "active_tab" : " hover:text-white/60"
            } relative px-12 text-white outline-sky-400 transition focus-visible:outline-2 uppercase`}
            style={{
              WebkitTapHighlightColor: "transparent",
            }}
          >
            {activeTab === tab.id && (
              <motion.span
                layoutId="bubble"
                className=" absolute inset-0 z-10 mix-blend-difference"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            {tab.label}
          </button>
        ))}
      </div>
      <section>
        {tabs.map((tab) =>
          activeTab === tab.id ? <TabContent key={tab.id} tab={tab} /> : null
        )}
      </section>
    </>
  );
}
