import Banner from "@/components/Banner";
import InfoServiceImg from "/images/services/website-1.jpg";
import CardBox from "@/components/CardBox";
import DetailImage from "/images/services/review-shot-2.png";
import { FaArrowsToEye } from "react-icons/fa6";
import { FaMagic } from "react-icons/fa";
import { MdInput } from "react-icons/md";
import MyGallery from "@/components/MyGallery";

const WebDevelopment = () => {
  const ServicesCardContent = [
    {
      boxTitle: "Service 1",
      boxContent: "",
    },
    {
      boxTitle: "Service 2",
      boxContent: "",
    },
    {
      boxTitle: "Service 3",
      boxContent: "",
    },
    {
      boxTitle: "Service 4",
      boxContent: "",
    },
  ];

  return (
    <>
      <Banner title="Web & Mobile Development" />
      <InfoServices />
      <div className="service_box box_design">
        <h2 className="heading text-center">Services</h2>
        <p className="leading-8 text-center mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor <br /> incididunt ut labore et dolore magna aliqua.
        </p>
        <CardBox infoBoxCard={ServicesCardContent} />
      </div>
      <div className="container py-[80px] gallery_box">
        <MyGallery />
      </div>
      <ServiceDetail />
    </>
  );
};

export default WebDevelopment;

const InfoServices = () => {
  return (
    <main className="container py-[80px]">
      <div className="grid md:grid-cols-2 gap-2 items-center text-center md:text-left">
        <div className="heading_serv">
          <h2 className="heading">Lorem ipsum dolor sit amet</h2>
        </div>

        <div className="pre_pra">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>

      <div className="stand_img flex justify-center p-10 mt-16 ">
        <img
          className="w-[70%] text-center"
          src={InfoServiceImg}
          srcSet={InfoServiceImg}
          alt="infoServivesimage"
        />
      </div>
    </main>
  );
};

const ServiceDetail = () => {
  return (
    <main className="container pb-[80px] pt-[20px]">
      <div className="grid md:grid-cols-2 ">
        <div className="deat_img m-auto md:m-unset">
          <img
            className="lg:h-[700px] lg:w-[550px] md:h-[500px] md:w-[400px] object-cover"
            src={DetailImage}
            srcSet={DetailImage}
            alt="detailimage"
          />
        </div>

        <div className="Detail_text md:ms-[-150px] py-[40px] md:px-[50px] px-[10px] z-10 bg-black my-[50px] items-center">
          <h2 className="heading">We Have Simple Process</h2>
          <p className="leading-8 mt-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>

          <div className="icon_element">
            <div className="same_col_icon flex items-center mt-5 gap-5">
              <FaArrowsToEye />
              <p>Share Your Vision</p>
            </div>
            <div className="same_col_icon flex items-center mt-5 gap-5">
              <FaMagic />
              <p>Weave the Magic</p>
            </div>
            <div className="same_col_icon flex items-center mt-5 gap-5">
              <MdInput />
              <p>Your Input Matters</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
