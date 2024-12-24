import { NavLink } from "react-router-dom";
import logo from "/images/services/logo.webp";
import OverlayTop from "/images/services/overlay-footer-top.webp";
import OverlayBottom from "/images/services/overlay-footer-bottom.webp";
import { FaXTwitter, FaInstagram, FaFacebookF, FaBehance } from "react-icons/fa6";
import { SOCIAL_LINKS, VARIABLES } from "@/utils/variables";
import { ROUTES } from "@/routes";

const Footer = () => {
  let currentYear = new Date().getFullYear();
  return (
    <>
      <footer className="relative">
        <div className="absolute top-0 right-0 pointer-events-none">
          <img src={OverlayTop} alt="" />
        </div>
        <main className="container py-40 relative z-10">
          <section className="flex gap-5 justify-between flex-col md:flex-row">
            <div className="footer_logo">
              <NavLink to={"/"}>
                <img src={logo} alt="Unique Advertisers" width={390} />
              </NavLink>
            </div>
            <div className="gap-1 text-start grid-cols-1 md:grid-cols-2 grid lg:grid-cols-3">
              <QuickLinkComp quickTitle="Quick Link" />
              <QuickLinkComp quickTitle="Service" services={true} />
              <div className="quick_links">
                <h4 className="mb-4">Contact Us</h4>
                <ul>
                  <li className="leading-loose">{VARIABLES.ADDRESS}</li>
                  <li className="leading-loose">
                    <a
                      href={`tel:${VARIABLES.PHONE.replaceAll(" ", "")
                        .replaceAll("+", "")
                        .replaceAll("-", "")}`}
                    >
                      {VARIABLES.PHONE}
                    </a>
                  </li>
                  <li className="leading-loose">
                    <a href={`mailto:${VARIABLES.EMAIL_ADDRESS}`}>
                      {VARIABLES.EMAIL_ADDRESS}
                    </a>
                  </li>
                </ul>
                <ul
                  className="footer_social mt-3 text-white flex gap-5"
                  style={{ fontSize: 30 }}
                >
                  <li className="leading-loose">
                    <a
                      href={SOCIAL_LINKS.INSTA}
                      target="_blank"
                      rel="noopener nofollow"
                    >
                      <FaInstagram />
                    </a>
                  </li>
                  <li className="leading-loose">
                    <a href={SOCIAL_LINKS.TWEETER} target="_blank" rel="noopener nofollow">
                      <FaXTwitter />
                    </a>
                  </li>
                  <li className="leading-loose">
                    <a
                      href={SOCIAL_LINKS.FB}
                      target="_blank"
                      rel="noopener nofollow"
                    >
                      <FaFacebookF />
                    </a>
                  </li>
                  <li className="leading-loose">
                    <a
                      href={SOCIAL_LINKS.BEHANCE}
                      target="_blank"
                      rel="noopener nofollow"
                    >
                      <FaBehance />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </main>
        <section id="copyright" className="bg-black py-5">
          <h6 className="text-center">
            © 2022 - {currentYear} | All rights reserved by Unique Advertisers
          </h6>
        </section>
        <div className="absolute bottom-16 left-0 pointer-events-none">
          <img src={OverlayBottom} alt="" />
        </div>
      </footer>
    </>
  );
};

export default Footer;

const QuickLinkComp = ({ classes, quickTitle, services }) => {
  return (
    <div className="quick_links">
      <h4 className="mb-4">{quickTitle}</h4>
      <ul className={classes}>
        {services
          ? servLinks.map((items, ind) => {
              return (
                <li key={ind} className="leading-loose">
                  <NavLink to={items.link}>{items.title}</NavLink>
                </li>
              );
            })
          : quickLinks.map((items, ind) => {
              return (
                <li key={ind} className="leading-loose">
                  <NavLink to={items.link}>{items.title}</NavLink>
                </li>
              );
            })}
      </ul>
    </div>
  );
};

const quickLinks = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "About",
    link: "/about",
  },
  {
    title: "Services",
    link: "/services",
  },
  // {
  //   title: "Blogs",
  //   link: "/blogs",
  // },
  {
    title: "Portfolio",
    link: "/portfolio",
  },
  {
    title: "Pricing",
    link: "/packages",
  },
  {
    title: "Contact Us",
    link: "/contact",
  },
  {
    title: "Privacy Policy",
    link: "/privacy-policy"
  }
];

const servLinks = [
  {
    title: "Website Development",
    link: "services/website-development",
  },
  {
    title: "Animation",
    link: "services/animation",
  },
  {
    title: "Graphic Design",
    link: "services/graphic-design",
  },
  {
    title: "Branding",
    link: "services/branding-and-strategy",
  },
  {
    title: "Social Media Marketing",
    link: "services/digital-marketing",
  },
  {
    title: VARIABLES.SERVICES.STREAMERS,
    link: ROUTES.STREAMERS,
  },
];
