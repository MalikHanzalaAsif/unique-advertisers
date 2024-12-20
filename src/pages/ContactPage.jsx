import Banner from "@/components/Banner";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FaEnvelopesBulk } from "react-icons/fa6";
import { BsTelephoneFill } from "react-icons/bs";
import { IoLocation } from "react-icons/io5";
import { Button } from "@/components/ui/button";
import { FaXTwitter, FaInstagram, FaFacebookF, FaBehance } from "react-icons/fa6";
import Contactform from "@/components/Contactform";
import { VARIABLES } from "@/utils/variables";

const ContactPage = () => {
  return (
    <>
      <Banner title="Contact Us" />
      <ContactForm />
      <Map />
    </>
  );
};

export default ContactPage;

const ContactForm = () => {
  return (
    <section className="container m-auto lg:py-[80px] md:py-[40px] py-[30px]">
      <div className="grid lg:grid-cols-2 items-center">
        <div className="Form_col  lg:order-1 order-2">
          <Contactform />
        </div>

        <div className="info_div md:px-[80px] px-[20px] py-[40px] order-1">
          <h4 className="lg:text-3xl md:text-2xl mb-8">Contact Information:</h4>

          <div className="md:flex md:text-left gap-3 my-7 same_info">
            <IoLocation />
            <p>1321 Upland Dr.PMB 12164, Houston, Texas, 77043, US</p>
          </div>
          <div className="md:flex md:text-left gap-3 my-7 same_info">
            <BsTelephoneFill />
            <a href="tel:18314618151">+183 146 - 181 - 51</a>
          </div>
          <div className="md:flex md:text-left  gap-3 my-7 same_info">
            <FaEnvelopesBulk />
            <a href={`mailto:${VARIABLES.EMAIL_ADDRESS}`}>{VARIABLES.EMAIL_ADDRESS}</a>
          </div>

          <ul
            className="footer_social mt-[40px] flex md:justify-start justify-center text-white gap-5"
            style={{ fontSize: 30 }}
          >
            <li className="leading-loose">
              <a href="https://x.com/houseua0154333" target="_blank" rel="noopener noreferrer">
                {" "}
                <FaXTwitter />{" "}
              </a>
            </li>
            <li className="leading-loose">
              <a href="https://www.instagram.com/invites/contact/?igsh=1cx50ywrc6ms9&utm_content=uupd8bs" target="_blank" rel="noopener noreferrer">
                {" "}
                <FaInstagram />{" "}
              </a>
            </li>
            <li className="leading-loose">
              <a href="https://www.facebook.com/UniqueAdvertisers0?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
                {" "}
                <FaFacebookF />{" "}
              </a>
            </li>
            <li className="leading-loose">
              <a href="https://www.behance.net/productionhouseua" target="_blank" rel="noopener noreferrer">
                {" "}
                <FaBehance />{" "}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

const Map = () => {
  return (
    <main className="container lg:pb-[80px] md:pb-[40px] pb-[30px]">
      <div className="map_div">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55386.27994457805!2d-95.61567719615607!3d29.816871059682132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640db287d0be2fb%3A0x5eaf299671a5db43!2sHouston%2C%20TX%2077043%2C%20USA!5e0!3m2!1sen!2s!4v1720942157873!5m2!1sen!2s"
          width="100%"
          height={500}
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </main>
  );
};
