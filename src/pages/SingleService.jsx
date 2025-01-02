import Banner from "@/components/Banner";
import CardBox from "@/components/CardBox";
import {
  graphicServiceData,
  animationServiceData,
  brandingServiceData,
  marketingServiceData,
  StreamersServiceData,
  webServiceData,
  AppServiceData,
  seoServiceData,
  emailServiceData,
  googleServiceData
} from "@/api/services-api";
import { useLocation } from "react-router-dom";
import { PackageTabs } from "@/components/Packages";
import { PortfolioTabs } from "@/components/Projects";
import { Images } from "@/components/ListImages";
import { Videos } from "@/components/ListImages";
import "@/assets/component-styles/single-services.css";

export default function SingleService() {
  let location = useLocation();
  location = location.pathname.split("/")[2];

  const graphicUri = "graphic-design";
  const webDevUri = "website-development";
  const animationUri = "animation";
  const brandingUri = "branding-and-strategy";
  const marketingUri = "social-media-marketing";
  const streamersUri = "streamers-templates";
  const appUri = "app-development";
  const seoUri = "seo"
  const emailUri = "email-marketing"
  const googleUri = "google-ads"

  let data;

  if (location === webDevUri) {
    data = webServiceData;
  } else if (location === graphicUri) {
    data = graphicServiceData;
  } else if (location === animationUri) {
    data = animationServiceData;
  } else if (location === brandingUri) {
    data = brandingServiceData;
  } else if (location === marketingUri) {
    data = marketingServiceData;
  } else if (location === streamersUri) {
    data = StreamersServiceData;
  } else if (location === appUri) {
    data = AppServiceData;
  } else if (location === seoUri) {
    data = seoServiceData;
  } else if (location === emailUri) { 
    data = emailServiceData;
  } else if (location === googleUri) { 
    data = googleServiceData;
   }

  if (!data) {
    return <div>NO DATA FOUND!</div>;
  }

  const {
    currentTab,
    serivceBannerHeading,
    serviceSubheading,
    cardContent,
    infoServiceTitle,
    infoServiceDesc,
    infoServiceImage,
    serviceDetailsTitle,
    serviceDetailsDesc,
    serviceDetailsImage,
    serviceIconList,
    galleryPhotos,
  } = data;

  return (
    <>
      <Banner title={serivceBannerHeading} />
      <InfoServices
        title={infoServiceTitle}
        desc={infoServiceDesc}
        shot={infoServiceImage}
      />
      {cardContent && cardContent.boxTitle && (
        <div className="service_box box_design">
          <h2 className="heading text-center">Services</h2>
          <p
            className="leading-8 text-center mt-4"
            dangerouslySetInnerHTML={{
              __html: serviceSubheading,
            }}
          ></p>
          <CardBox infoBoxCard={cardContent} />
        </div>
      )}
      {currentTab !== "appDev" && currentTab !== "emailMarketing" && currentTab !== "googleAds" && currentTab !== "seo" && (
        <div className="container md:py-[80px] py-[40px] gallery_box">
          <PortfolioTabs activeService={currentTab} />
        </div>
      )}
      <ServiceDetail
        title={serviceDetailsTitle}
        desc={serviceDetailsDesc}
        shot={serviceDetailsImage}
        iconList={serviceIconList}
      />
      <div className="Service_package pb-10">
        <PackageTabs activeService={currentTab} />
      </div>
    </>
  );
}

// eslint-disable-next-line react/prop-types
const InfoServices = ({ title, desc, shot, portfolioImage }) => {
  return (
    <main className={"container md:py-[80px] py-[20px]"}>
      <div className="grid md:grid-cols-2 gap-2 items-center text-center md:text-left">
        <div className="heading_serv">
          <h2 className="heading">{title}</h2>
        </div>
        <div className="pre_pra">
          <p
            className="leading-8 md:text-left text-center mt-4"
            dangerouslySetInnerHTML={{
              __html: desc,
            }}
          ></p>
        </div>
      </div>
      <div className="stand_img flex justify-center md:mt-16 mt-4">
        {Videos[shot] ? (
          <video
            className="md:w-[60%] text-center"
            src={Videos[shot]}
            alt={title}
            controls={false}
            muted
            autoPlay
            loop
          />
        ) : (
          <img
            className="md:w-[60%] text-center"
            src={Images[shot] ? Images[shot] : portfolioImage}
            alt={title}
          />
        )}
      </div>
    </main>
  );
};

// eslint-disable-next-line react/prop-types
const ServiceDetail = ({ title, desc, shot, iconList }) => {
  return (
    <main className="container md:pb-[80px] pt-[20px] pb:[30px]">
      <div className="grid md:grid-cols-2 ">
        <div className="deat_img m-auto md:m-unset">
          <img
            className="lg:h-[700px] lg:w-[550px] md:h-[500px] md:w-[400px] object-cover object-left"
            src={Images[shot] ? Images[shot] : shot}
            srcSet={Images[shot] ? Images[shot] : shot}
            alt="detailimage"
          />
        </div>
        <div className="Detail_text md:ms-[-150px] py-[40px] md:px-[50px] px-[10px] z-10 bg-black my-[50px] items-center">
          <h2 className="heading">{title}</h2>
          <p className="leading-8 mt-5">{desc}</p>
          {iconList[0].title.length > 0 && (
            <ul className="icon_element">
              {iconList.map((iconItems, iconInd) => {
                return (
                  <li
                    className="same_col_icon flex items-center mt-5 gap-5"
                    key={iconInd}
                  >
                    <span>{iconItems.icon}</span>
                    <span>{iconItems.title}</span>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>
    </main>
  );
};
