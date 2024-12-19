import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Banner from "@/components/Banner";
import CardBox from "@/components/CardBox";
import { RiCustomerService2Line } from "react-icons/ri";
import { RiTeamFill } from "react-icons/ri";
import { SiAdobecreativecloud } from "react-icons/si";
import AboutBanner from "/images/services/about-mockup.png";
import SubTitle from "@/components/Subtitle";
import AboutLeftImage from "/images/services/man-using-laptop.webp";

const AboutPage = () => {
  const aboutCardContent = [
    {
      boxLogo: <RiTeamFill />,
      boxContent:
        "With our bold approach to design, we provide our clients with creative, non-traditional solutions. Our teams have a creative attitude and are always pushing the envelope with audacious and fearless ideas.",
    },
    {
      boxLogo: <RiCustomerService2Line />,
      boxContent:
        "We are committed to our customers, placing a high value on outstanding support in order to create long-lasting alliances. We are steadfast in our dedication to supporting business success by providing innovative, scalable digital solutions that are unrivaled in the sector.",
    },
    {
      boxLogo: <SiAdobecreativecloud />,
      boxContent:
        "We encourage innovation in our project teams, where gifted people create eye-catching designs that complement your corporate image and brand identity. Every choice is carefully considered to provide the ideal appearance and atmosphere.",
    },
  ];
  return (
    <>
      <Banner title="About Us" />
      <AboutBannerImage />
      <AboutCompany />
      <CardBox infoBoxCard={aboutCardContent} />
      <AboutService />
      <LastBanner />
    </>
  );
};

export default AboutPage;

const AboutBannerImage = () => {
  return (
    <div className="flex lg:justify-end justify-center">
      <img
        className="w-[70%]"
        src={AboutBanner}
        srcSet={AboutBanner}
        alt="Aboutimage"
      />
    </div>
  );
};

const AboutCompany = () => {
  return (
    <main className="container">
      <section className="lg:py-[80px] py-[40px] grid lg:grid-cols-2 gap-4 lg:text-start text-center">
        <div className="lg:pe-4 relative about_col App">
          <div className="scroll">
            <SubTitle
              text={"Digital Agency "}
              className={"lg:text-center m-auto lg:mx-0 mb-[20px]"}
            />
            <h2 className="heading">
              ABOUT{" "}
              <span
                className="bg_heading"
                style={{ color: "var(--color-primary)" }}
              >
                {" "}
                COMPANY{" "}
              </span>
            </h2>
          </div>
        </div>

        <div className="relative lg:block">
          <div className="about_text">
            <p className="leading-8 pt-[1rem] pb-[1rem]">
              Your top digital partner, Unique Advertisers, is committed to
              transforming the internet market. With a dedicated team of
              professionals and years of experience in the field, we are masters
              at creating eye-catching logos, dynamic websites, successful
              digital marketing plans, interesting apps, interesting video
              content, SEO optimization, and tailored Twitch packages. We stand
              out for our dedication to excellence and customer-centric
              attitude, which enable companies to prosper in the digital era.
              Come along and help your brand reach its greatest online
              potential.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

const AboutService = () => {
  return (
    <main className="container">
      <section className="lg:py-[80px] py-[40px] grid lg:grid-cols-2 gap-4 lg:text-start text-center">
        <div className="lg:pe-4 relative about_col lg:order-1 order-2">
          <div className="">
            <SubTitle
              text={"Digital Agency "}
              className={"lg:text-center m-auto lg:mx-0 mb-[20px]"}
            />
            <h2 className="heading">
              ABOUT{" "}
              <span
                className="bg_heading"
                style={{ color: "var(--color-primary)" }}
              >
                {" "}
                COMPANY{" "}
              </span>
            </h2>
            <p className="leading-8 pt-[1rem] pb-[1rem]">
              At Unique Advertisers, our expertise lies in providing customized
              advertising solutions that elevate companies to unprecedented
              levels. We use strategic thinking and state-of-the-art technology
              in conjunction with our dedication to creativity and innovation to
              create campaigns that attract audiences and produce results.
            </p>
            <p className="leading-8 pt-[1rem] pb-[1rem]">
              Experienced individuals with a strong grasp of industry trends and
              a love for marketing make up our team. We take great satisfaction
              in our ability to customize plans to each client's specific
              requirements, guaranteeing optimal effect and return on
              investment. For marketing expertise, Unique Advertisers is your
              go-to partner, whether you're a startup trying to build your brand
              or an established business trying to reach a wider audience.
            </p>
            <p className="leading-8 pt-[1rem] pb-[1rem]">
              Come help us shape the future of advertising, where strategy and
              creativity coexist and innovation is unrestricted.
            </p>
          </div>
        </div>

        <div className="relative lg:block order-1">
          <div className="about_img flex justify-center">
            <img
              src={AboutLeftImage}
              srcSet={AboutLeftImage}
              alt="AboutLeftimage"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

const LastBanner = () => {
  return (
    <main className="last_banner py-[20px]">
      <div className="container">
        <div className="last_text ">
          <h2 className="heading title text-black text-center pb-5">
            A NEW WAY TO CREATE <br /> PROJECT FOR YOUR COMPANY
          </h2>
          <NavLink className="cta glow black_btn text-center flex justify-center">
            <Button>Get Started Now</Button>
          </NavLink>
        </div>
      </div>
    </main>
  );
};
