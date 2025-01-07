import React, { useState, useEffect } from "react";

import { motion } from "framer-motion";

// Images
import BlushHeroRight from "/images/services/blush-hero-bottom.webp";
import cylinder from "/images/services/box-vector.png";
import triangle from "/images/services/triangle.png";

// Icons
import { FaCircleCheck } from "react-icons/fa6";

// ShadUI
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";

import SubTitle from "@/components/Subtitle";

import "@/assets/component-styles/package.css";
import Contactform from "@/components/Contactform";

{
  /* IMPORTING ENDS */
}

const SinglePackage = ({ packageData, fTitle }) => {
  const { title, price, discountedPrice } = packageData;
  return (
    <Card className="package_card bg-none h-[100%]">
      <CardHeader className="package_header p-0">
        <div>
          <CardTitle className="relative z-10 text-start">
            {fTitle} <br /> {title.replace(fTitle, "")}
          </CardTitle>
          <div className="relative z-10">
            <h2 className="pricing text-4xl my-2">
              {price} <small>{discountedPrice}</small>
            </h2>
            <div className="glow">
              <PackageModal modalPackageDetails={packageData} />
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="px-0">
        <div className="package_features">
          <div>
            <h4>Packages Features:</h4>
            <ul className="package_list text-start">
              {packageData.list.map((packageList, index) => {
                return (
                  <li key={index}>
                    <FaCircleCheck />
                    <span>{packageList}</span>
                  </li>
                );
              })}
            </ul>
          </div>
          <hr style={{ background: "#f2f2f2", height: 10, border: 0 }} />
          <div>
            <h4>Add Ons:</h4>
            <ul className="package_list text-start">
              {packageData.addon.map((addonList, index) => {
                return (
                  <li key={index}>
                    <span>{addonList}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const PackageCards = ({ packageData }) => {
  return (
    <>
      <section className="packages_cards relative z-10 flex sm:flex-row flex-col items-start justify-center gap-10 flex-wrap">
        {packageData.map((items, ind) => {
          return (
            <SinglePackage
              packageData={items}
              key={ind}
              fTitle={items.title.split(" ")[0]}
            />
          );
        })}
      </section>
    </>
  );
};

export default function Packages() {
  return (
    <main className="projects_sec package_sec py-32 relative mx-auto overflow-hidden">
      <section className="container relative" style={{ zIndex: 1 }}>
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
          <SubTitle text={"Packages"} className={"mx-auto"} />
          <section className="pe-4 pt-6 relative">
            <div className="flex flex-col justify-center pb-12">
              <h2 className="heading">
                Better{" "}
                <span
                  className="bg_heading"
                  style={{ color: "var(--color-primary)" }}
                >
                  Packages
                </span>
                , Better{" "}
                <span
                  className="bg_heading"
                  style={{ color: "var(--color-primary)" }}
                >
                  Prices
                </span>
              </h2>
            </div>
          </section>
          <div className="z-10 relative">
            {/* Package content */}
            <PackageTabs />
          </div>
        </section>
        <div className="triangle">
          <img src={triangle} alt="Triangle" width={130} />
        </div>
      </section>
      {/* Container ends */}
    </main>
  );
}

export function PackageTabs({ activeService }) {
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
        <div className="tab_bar flex justify-center mb-14 flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`tabs_btn ${
                activeTab === tab.id ? "active_tab" : " hover:text-white/60"
              } relative px-8 text-white outline-sky-400 transition focus-visible:outline-2 uppercase mb-4`}
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
            Packages
          </h2>
        </section>
      )}
      <section>
        {tabs.map((tab) =>
          activeTab === tab.id ? <TabContent key={tab.id} tab={tab} /> : null
        )}
      </section>
    </>
  );
}

function PackageModal({ modalPackageDetails }) {
  const { title, price } = modalPackageDetails;
  return (
    <Dialog>
      <DialogTrigger asChild>
        {}
        <Button variant="outline" className="text-black w-full">
           Schedule a Call
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle className="text-2xl text-black">
            Package: {title}
          </DialogTitle>
          <DialogDescription>
            Please complete the form below, and our team of social media experts
            will be in touch with you soon.
          </DialogDescription>
        </DialogHeader>
        <Contactform title={title} price={price} />
      </DialogContent>
    </Dialog>
  );
}

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

const TabsData = ({ activeTab }) => {
  // console.log(activeTab);
  let packageData;
  if (activeTab === "brand") {
    packageData = [
      {
        title: "Startup Collateral Design",
        list: [
          "2 Stationery Design Set",
          "FREE Fax Template",
          "Print Ready Formats",
          "UNLIMITED Revisions",
          "100% Satisfaction Guarantee",
          "100% Money Back Guarantee *",
        ],
        addon: ["FREE Google Friendly Sitemap"],
        price: "$99",
        discountedPrice: "$330",
      },
      {
        title: "Collateral Classic Design",
        list: [
          "2 Stationery Design Set",
          "UNLIMITED Revisions",
          "Flyer Design",
          "Brochure Design (Bi-fold/Tri-fold)",
          "100% Satisfaction Guarantee",
          "100% Money Back Guarantee *",
        ],
        addon: ["FREE Google Friendly Sitemap"],
        price: "$199",
        discountedPrice: "$663",
      },
      {
        title: "Premium Collateral Design",
        list: [
          "2 Stationery Design Set",
          "Packaging Design",
          "UNLIMITED Revisions",
          "T-Shirt Design",
          "100% Satisfaction Guarantee",
          "100% Money Back Guarantee *",
        ],
        addon: ["FREE Google Friendly Sitemap"],
        price: "$399",
        discountedPrice: "$1330",
      },
      {
        title: "Unlimited Collateral Design",
        list: [
          "2 Stationery Design Set",
          "Menu Card Design",
          "T-Shirt Design",
          "1 Banner Design",
          "100% Satisfaction Guarantee",
          "100% Money Back Guarantee",
        ],
        addon: ["FREE Google Friendly Sitemap"],
        price: "$499",
        discountedPrice: "$1663",
      },
    ];
  } else if (activeTab === "logo") {
    packageData = [
      {
        title: "Business Logo Design",
        list: [
          "UNLIMITED Logo Design Concepts",
          "By 8 Award Winning Designers",
          "UNLIMITED Revisions",
          "2 Stationary Design Sets (Business Card, Letterhead, Envelope)",
          "Icon Design",
          "Double Sided Flyer Design / Bi-Fold Brochure",
          "FREE MS Word Letterhead",
          "Free Email Signature",
          "All Final Files Format (AI, PSD, EPS, PNG, GIF, JPG, PDF)",
          "100% Satisfaction Guarantee",
          "100% Unique Design Guarantee",
          "100% Money Back Guarantee *",
        ],
        addon: ["FREE Google Friendly Sitemap"],
        price: "$245",
        discountedPrice: "$816",
      },
      {
        title: "Professional Logo Design",
        list: [
          "UNLIMITED Logo Design Concepts",
          "By 4 Designers",
          "UNLIMITED Revisions",
          "Stationary Design (Business Card, Letterhead, Envelope)",
          "FREE MS Word Letterhead",
          "48 to 72 hours TAT",
          "All Final Files Format (AI, PSD, EPS, PNG, GIF, JPG, PDF)",
          "100% Satisfaction Guarantee",
          "100% Unique Design Guarantee",
          "100% Money Back Guarantee *",
        ],
        addon: ["Best Value for Money Guaranteed!"],
        price: "$125",
        discountedPrice: "$416",
      },
      {
        title: "Elite Logo Design",
        list: [
          "UNLIMITED Logo Design Concepts",
          "By 5 Award Winning Designers",
          "Stationary Design (Business Card, Letterhead, Envelope)",
          "Icon Design",
          "FREE Social Media Banners (Any 2)",
          "UNLIMITED Revisions",
          "FREE MS Word Letterhead",
          "All Final Files Format (AI, PSD, EPS, PNG, GIF, JPG, PDF)",
          "100% Satisfaction Guarantee",
          "100% Unique Design Guarantee",
          "100% Money Back Guarantee *",
          "48 to 72 hours TAT",
        ],
        addon: ["Best Value for Money Guaranteed!"],
        price: "$175",
        discountedPrice: "$583",
      },
      {
        title: "Gold Logo Design",
        list: [
          "UNLIMITED Logo Design Concepts",
          "By 8 Award Winning Designers",
          "Icon Design",
          "UNLIMITED Revisions",
          "2 Stationary Design Sets (Business Card, Letterhead, Envelope)",
          "FREE MS Word Letterhead",
          "Free Email Signature",
          "3 Page Custom Website",
          "2 Stock Photos",
          "2 Banner Designs",
          "jQuery Slider",
          "All Final Files Format (AI, PSD, EPS, PNG, GIF, JPG, PDF)",
          "100% Ownership Rights",
          "100% Satisfaction Guarantee",
          "100% Unique Design Guarantee",
          "100% Money Back Guarantee *",
        ],
        addon: ["Best Value for Money Guaranteed!"],
        price: "$425",
        discountedPrice: "$1416",
      },
      {
        title: "Basic Animated Logo Design",
        list: [
          "1 Animated Logo Design Concept",
          "1 Dedicated Logo Designer",
          "3 Revisions",
          "Turn Around 24-48 hrs",
          "100% Satisfaction Guarantee",
          "100% Unique Design Guarantee",
          "100% Money Back Guarantee *",
        ],
        addon: ["Best Value for Money Guaranteed!"],
        price: "$199",
        discountedPrice: "$499",
      },
      {
        title: "Business Animated Logo Design",
        list: [
          "3 Animated Logo Design Concepts",
          "3 Dedicated Logo Designer",
          "Unlimited Revisions",
          "Turn Around 24-48 hrs",
          "100% Ownership Rights",
          "100% Satisfaction Guarantee",
          "100% Unique Design Guarantee",
          "100% Money Back Guarantee *",
        ],
        addon: ["Best Value for Money Guaranteed!"],
        price: "$399",
        discountedPrice: "$999",
      },
      {
        title: "3D Animated Logo Design",
        list: [
          "3 Unique 3D Logo Concepts",
          "Light Effects and VFX",
          "Fully Rendered",
          "Multiple 3D Angles",
          "By 3 Award Winning Designers",
          "72 hours Turnaround Time",
          "UNLIMITED Revisions",
          "100% Ownership Rights",
          "100% Satisfaction Guarantee",
          "100% Unique Design Guarantee",
          "100% Satisfaction Guarantee",
          "100% Money Back Guarantee *",
        ],
        addon: ["Best Value for Money Guaranteed!"],
        price: "$499",
        discountedPrice: "$1813",
      },
    ];
  } else if (activeTab === "social") {
    packageData = [
      {
        title: "Gold Business",
        list: [
          "3 postings per week (per network)",
          "Social Account Setup",
          "Business Page Optimization",
          "Social Media Strategy (Overview)",
          "Content Creation",
          "Increase in followers",
          "Account Management",
          "Monthly Progress report",
          "No Setup Fee",
          "Cancel any time",
        ],
        addon: ["FREE Google Friendly Sitemap"],
        price: "$499",
        discountedPrice: "$1330",
      },
      {
        title: "Platinum Business",
        list: [
          "5 postings per week (per network)",
          "Social Account Setup",
          "Business Page Optimization",
          "Social Media Strategy",
          "Content Creation",
          "Increase in followers",
          "Account Management",
          "Reputation Management",
          "Social Media Competitor Analysis",
          "Spam / Comments monitoring",
          "Monthly Progress report",
          "No Setup Fee",
          "Cancel any time",
        ],
        addon: ["FREE Google Friendly Sitemap"],
        price: "$799",
        discountedPrice: "$1996",
      },
    ];
  } else if (activeTab === "anim") {
    packageData = [
      {
        title: "Startup Video Design",
        list: [
          "30 Second Video",
          "Professional Script",
          "Storyboard",
          "Animation",
          "Voice - Over & Sound Effects",
          "4 weeks Delivery",
          "Unlimited Revisions",
        ],
        addon: ["FREE Google Friendly Sitemap"],
        price: "$299",
        discountedPrice: "$1163",
      },
      {
        title: "Classic Video Design",
        list: [
          "60 Second Video",
          "Professional Script",
          "Sample Theme",
          "Storyboard",
          "Animation",
          "Voice - Over & Sound Effects",
          "5 weeks Delivery",
        ],
        addon: ["FREE Google Friendly Sitemap"],
        price: "$699",
        discountedPrice: "$2496",
      },
      {
        title: "Premium Video Design",
        list: [
          "90 Second Video",
          "Professional Script",
          "Sample Theme",
          "Storyboard",
          "Animation",
          "Voice - Over & Sound Effects",
          "6 Weeks Delivery",
        ],
        addon: ["FREE Google Friendly Sitemap"],
        price: "$899",
        discountedPrice: "$3163",
      },
      {
        title: "Unlimited Video Design",
        list: [
          "120 Second Video",
          "Professional Script",
          "Sample Theme",
          "Storyboard",
          "Animation",
          "Voice - Over & Sound Effects",
        ],
        addon: ["FREE Google Friendly Sitemap"],
        price: "$1299",
        discountedPrice: "$4830",
      },
    ];
  } else if (activeTab === "stream") {
    packageData = [
      {
        title: "Bronze",
        list: [
          "1x mascot logo",
          "3x banner",
          "1x starting screen",
          "1x brb screen",
          "1x ending screen",
          "1x face cam border",
          "1x header",
          "3x alerts",
          "6x panels",
          "1x chat box",
        ],
        price: "$250",
        addon: ["FREE Google Friendly Sitemap"],
      },
      {
        title: "Platinum",
        list: [
          "1x mascot logo",
          "3x banner",
          "1x animated overlay",
          "Animated chat box",
          "1x 2D/3D animated logo",
          "1x 2D/3D animated autro",
          "6x sub badges",
          "6x animated emotes",
        ],
        price: "$400",
        addon: ["FREE Google Friendly Sitemap"],
      },
      {
        title: "Gold",
        list: [
          "1x mascot logo",
          "3x banner",
          "1x starting screen",
          "1x brb screen",
          "1x ending screen",
          "1x face cam border",
          "1x header",
          "3x alerts",
          "6x panels",
          "1x chat box",
          "3x sub badges",
          "3x animated emotes",
        ],
        price: "$300",
        addon: ["FREE Google Friendly Sitemap"],
      },
      {
        title: "Jack",
        list: [
          "1x avatar",
          "3x banner",
          "1x static/animated overlay",
          "1x 2D/3D intro",
          "1x 2D/3D outro",
        ],
        price: "$500",
        addon: ["FREE Google Friendly Sitemap"],
      },
      {
        title: "King",
        list: [
          "1x avatar & banner",
          "an overlay",
          "1x 2D/3D intro/outro",
          "1-10x emotes",
          "1-10x sub badges",
          "gaming room",
          "break screen",
          "waiting screen",
          "vtuber/pngtuber",
          "screen emote",
        ],
        price: "$1200",
        addon: ["FREE Google Friendly Sitemap"],
      },
      {
        title: "Queen",
        list: [
          "2D/3D animated gaming room",
          "2D/3D animated waiting screen",
          "2D/3D animated break screen",
        ],
        price: "$800",
        addon: ["FREE Google Friendly Sitemap"],
      },
    ];
  } else if (activeTab === "smm") {
    packageData = [
      {
        title: "Start Up Plan",
        list: [
          "3 social media Channels",
          "(FB,INSTA,X) Social media Account Setup",
          "Complete Account Management",
          "3 Post per week",
          "Custom Editorial Calendar",
          "End of Term Analytic Report",
          "Dedicated Account Manger",
          "PAID ADVETIDEMENT ON (FB,INSTA,X)",
        ],
        price: "$399",
        addon: ["Best Value for Money Guaranteed!"],
      },
      {
        title: "Basic Plan",
        list: [
          "4 social media Channels",
          "(FB,INSTA,X,Tiktok) Social media Account Setup",
          "Complete Account Management",
          "5 Post per week",
          "Custom Editorial Calendar",
          "Call to Action Integration",
          "Dedicated Account Manger",
          "Monthly Analytic Report",
          "Custom Blog Submission per Week",
          "Social media Competitor Analysis",
          "PAID ADVETIDEMENT ON (FB,INSTA,X,Tiktok)",
        ],
        price: "$749",
        addon: ["Best Value for Money Guaranteed!"],
      },
      {
        title: "Platinum Plan",
        list: [
          "5 social media Channels",
          "(FB,INSTA,X,Tiktok,Linkdin) Social media Account Setup",
          "Complete Account Management",
          "7 Post per week",
          "Custom Editorial Calendar",
          "Call to Action Integration",
          "Dedicated Account Manger",
          "Monthly Analytic Report",
          "3 Custom Blog Submission per Week",
          "Social media Competitor Analysis",
          "PAID ADVETIDEMENT ON (FB,INSTA,X,Tiktok)",
        ],
        price: "$999",
        addon: ["Best Value for Money Guaranteed!"],
      },
    ];
  } else if (activeTab === "emailMarketing") {
    packageData = [
      {
        title: "Start Up Plan",
        list: [
          "A/B Testing",
          "Forms and Landing pages",
          "Behavioral Targeting",
          "Advanced Segmentation",
          "Monthly Email Sends :15000",
          "Lead Generation Included",
          "Dynamic Content",
        ],
        price: "$599",
        addon: ["Best Value for Money Guaranteed!"],
      },
      {
        title: "Gold Plan",
        list: [
          "A/B Testing",
          "Forms and Landing pages",
          "Behavioral Targeting",
          "Advanced Segmentation",
          "Monthly Email Sends :30000",
          "Lead Generation Included",
          "Dynamic Content",
        ],
        price: "$999",
        addon: ["Best Value for Money Guaranteed!"],
      },
      {
        title: "Platinum Plan",
        list: [
          "A/B Testing",
          "Forms and Landing pages",
          "Behavioral Targeting",
          "Advanced Segmentation",
          "Monthly Email Sends Unlimited",
          "Lead Generation Included",
          "Dynamic Content",
        ],
        price: "$999",
        addon: ["Best Value for Money Guaranteed!"],
      },
    ];
  } else if (activeTab === "seo") {
    packageData = [
      {
        title: "Silver Plan",
        list: [
          "In depth Site Analysis",
          "Content duplicacy check",
          "Initial Backlinks Analysis",
          "Keyword Research",
          "Keyword Plan 20",
          "Title and Meta Tags Optimization",
          "Content Optimization",
          "HTML Code Cleanup and optimization",
          "Internal Link Structuring and optimization",
          "Google and Bing Webmaster Tools Setup",
          "Google Analytics Setup and Integration",
          "Content and Link Acquisition",
          "Blog Writing -1",
          "Classified submissions",
          "Search Engine Rank Report",
        ],
        price: "$399",
        addon: ["Best Value for Money Guaranteed!"],
      },
      {
        title: "Gold Plan",
        list: [
          "In depth Site Analysis",
          "Content duplicacy check",
          "Initial Backlinks Analysis",
          "Keyword Research",
          "Keyword Plan 30",
          "Title and Meta Tags Optimization",
          "Content Optimization",
          "HTML Code Cleanup and optimization",
          "Internal Link Structuring and optimization",
          "Google and Bing Webmaster Tools Setup",
          "Google Analytics Setup and Integration",
          "Content and Link Acquisition",
          "Blog Writing -2",
          "Classified submissions",
          "Search Engine Rank Report",
        ],
        price: "$499",
        addon: ["Best Value for Money Guaranteed!"],
      },
      {
        title: "Platinum Package",
        list: [
          "In depth Site Analysis",
          "Content duplicacy check",
          "Initial Backlinks Analysis",
          "Keyword Research",
          "Keyword Plan 45",
          "Title and Meta Tags Optimization",
          "Content Optimization",
          "HTML Code Cleanup and optimization",
          "Internal Link Structuring and optimization",
          "Google and Bing Webmaster Tools Setup",
          "Google Analytics Setup and Integration",
          "Content and Link Acquisition",
          "Blog Writing",
          "Classified submissions",
          "Search Engine Rank Report",
        ],
        price: "$599",
        addon: ["Best Value for Money Guaranteed!"],
      },
    ];
  } else if (activeTab === "googleAds") {
    packageData = [
      {
        title: "Silver Plan",
        list: [
          "1:1 sessions with a PPC strategist",
          "PPC account creation (i.e: Google Ads, FBM)",
          "Dedicated slack channel",
          "Access to academy PPC content",
          "Access to exclusive PPC tools",
        ],
        price: "Starting from $699",
        addon: ["Best Value for Money Guaranteed!"],
      },
      {
        title: "Gold Plan",
        list: [
          "1:1 sessions with a PPC strategist",
          "PPC account creation (i.e: Google Ads, FBM)",
          "Dedicated slack channel",
          "Access to academy PPC content",
          "Access to exclusive PPC tools",
          "PPC performance support and management",
          "Customized PPC KPI dashboard",
          "Coordination and management of your internal team",
          "Paid media budget management",
        ],
        price: "Starting from $1999",
        addon: ["Best Value for Money Guaranteed!"],
      },
      {
        title: "Platinum Package",
        list: [
          "1:1 sessions with a PPC strategist",
          "PPC account creation (i.e: Google Ads, FBM)",
          "Dedicated slack channel",
          "Access to academy PPC content",
          "Access to exclusive PPC tools",
          "PPC performance support and management",
          "Customized PPC KPI dashboard",
          "Coordination and management of your internal team",
          "Paid media budget management",
          "Turnkey managed PPC service",
          "Dedicated production team",
          "Development of digital assets (content creation, landing pages, a/b tests, custom PPC scripts, AI, studio, etc.)",
        ],
        price: "Starting from $4999",
        addon: ["Best Value for Money Guaranteed!"],
      },
    ];
  } else if (activeTab === "appDev") {
    packageData = [
      {
        title: "App Development",
        list: [
          "Transform your app idea into reality with our tailored app development solutions. Whether you’re starting from scratch or upgrading an existing app, we work closely with you to create innovative, user-friendly applications that meet your unique business needs. Schedule a meeting with us to discuss your project, and we’ll provide a personalized quote designed specifically for your vision"
        ],
        price: "",
        addon: ["📱 Let’s turn your app idea into success! Schedule a call now to discuss your project and get a custom quote."],
      },
    ];
  } else {
    // OPTIMIZE: This else part belongs to WEBSITE Tab
    packageData = [
      {
        title: "Basic Website Design",
        list: [
          "3 Page Website",
          "4 Stock IMG",
          "3 Banner / Slider",
          "Complete W3C Certified HTML",
          "Contact or Query Form ",
          "Mobile Responsive",
          "3 Revision",
          "Complete Designing",
          "48 to 72 hours",
        ],
        addon: [
          "Dedicated Project Manager",
          "100% Ownership Rights",
          "100% Satisfaction Guarantee",
          "100% Money Back Guarantee",
          "*NO MONTHLY OR ANY HIDDEN FEE*",
        ],
        price: "$199-$249",
        discountedPrice: "$399",
      },
      {
        title: "Startup Website Design",
        list: [
          "5 Page Website",
          "8 Stock IMG",
          "5 Banner Design",
          "2 JQ slider banner",
          "Complete W3C Certified HTML",
          "Mobile Responsive",
          "5 Revision",
          "Business Emails (3)",
          "Complete Designing",
          "Complete Deployment",
        ],
        addon: [
          "Dedicated Project Manager",
          "100% Ownership Rights",
          "100% Satisfaction Guarantee",
          "100% Money Back Guarantee",
          "*NO MONTHLY OR ANY HIDDEN FEE*",
        ],
        price: "$499-$549 ",
        discountedPrice: "$699",
      },
      {
        title: "Professional Website Design",
        list: [
          "10 Page",
          "12 Stock IMG",
          "6 Banner",
          "3 JQ Slider",
          "Mobile Responsive",
          "Business Email (5)",
          "Unlimited Revisions",
          "Complete W3C Certified HTML",
          "Complete Deployment",
          "Complete Designing",
        ],
        addon: [
          "Dedicated Project Manager",
          "100% Ownership Rights",
          "100% Satisfaction Guarantee",
          "100% Money Back Guarantee",
          "*NO MONTHLY OR ANY HIDDEN FEE*",
        ],
        price: "$650-$700",
        discountedPrice: "$899",
      },
      {
        title: "Elite Website Design",
        list: [
          "15 Page",
          "16 Stock IMG",
          "8 Banner",
          "4 JQ Slider",
          "Lead Capture Form",
          "CMS / Admin Panel",
          "Cross Browser Optimized",
          "Striking Hover Effect",
          "Mobile Responsive",
          "Complete Deployment",
          "15 Revisions",
          "Custom WordPress",
          "Google Friendly Sitemap",
        ],
        addon: [
          "Dedicated Project Manager",
          "100% Ownership Rights",
          "100% Satisfaction Guarantee",
          "100% Money Back Guarantee",
          "*NO MONTHLY OR ANY HIDDEN FEE*",
        ],
        price: "$999",
        discountedPrice: "$1199",
      },
      {
        title: "Identity Website Design",
        list: [
          "20 Page Website",
          "20 Stock images",
          "12 Banner",
          "6 Slider Banner",
          "Lead Capture Form",
          "Complete W3C Certified HTML",
          "Mobile Responsive",
          "Unlimited Revision",
          "Business Email (5)",
          "Complete Designing",
          "Complete Deployment",
          "Google Friendly Sitemap",
          "Search Engine Submission",
          "Complete W3C Certified HTML",
          "Industry specified Team of Award Winning Designers and Developers",
          "Complete Deployment",
        ],
        addon: [
          "Dedicated Project Manager",
          "100% Ownership Rights",
          "100% Satisfaction Guarantee",
          "100% Money Back Guarantee",
          "*NO MONTHLY OR ANY HIDDEN FEE*",
        ],
        price: "$1499",
        discountedPrice: "$1999",
      },
      {
        title: "Corporate Website Design",
        list: [
          "Unlimited Pages",
          "Unlimited Stock IMG",
          "Unlimited Banner Design",
          "Contact or Query Form",
          "Mobile Responsive",
          "Lead Capturing Form",
          "Complete W3C Certified HTML",
          "Business Email (10)",
          "Striking Hovering Effect",
          "Content Management System (CMS)",
          "Cross Browsing",
          "Complete Deployment",
        ],
        addon: [
          "Dedicated Project Manager",
          "100% Ownership Rights",
          "100% Satisfaction Guarantee",
          "100% Money Back Guarantee",
          "*NO MONTHLY OR ANY HIDDEN FEE*",
        ],
        price: "$1999",
        discountedPrice: "$2499",
      },
      {
        title: "Startup E-Commerce Website Design",
        list: [
          "Customized Design",
          "Up-to 100 Products",
          "Content Management System (CMS)",
          "Mini shopping Integration",
          "Payment Module Integration",
          "Easy Product Search",
          "Dedicated designer & developer",
          "Unlimited Revisions",
        ],
        addon: [
          "100% Ownership Rights",
          "100% Satisfaction Guarantee",
          "100% Money Back Guarantee",
        ],
        price: "$599",
        discountedPrice: "$799",
      },
      {
        title: "Professional E-Commerce Website Design",
        list: [
          "Customized Design",
          "Up-to 500 Products",
          "Content Management System (CMS)",
          "Full Shopping Cart Integration",
          "Payment Module Integration",
          "Easy Product Search",
          "Unlimited Revisions",
          "Product Reviews",
          "5 Professional Banner",
          "Dedicated Designers",
          "Dedicated Developers ",
        ],
        addon: [
          "100% Satisfaction Guarantee",
          "100% Unique Design Guarantee",
          "100% Money Back Guarantee *",
        ],
        price: "$749-$799",
        discountedPrice: "$999",
      },
      {
        title: "Elite E-Commerce Website Design",
        list: [
          "UNLIMITED Logo Design Concepts",
          "By 6 Award Winning Designers",
          "Icon Design",
          "UNLIMITED Revisions",
          "Print Media",
          "Stationary Design (BusinessCard,Letterhead & Envelope)",
          "Invoice Design, Email Signature",
          "Bi-Fold Brochure (OR) 2 Sided Flyer Design",
          "Product Catalog Design",
          "Sign age Design (OR) Label Design",
          "T-Shirt Design (OR) Car Wrap Design",
          "Website",
          "E-Commerce Store Design",
          "Product Detail Page Design",
          "Unique Banner Slider",
          "Featured Products Showcase",
          "Full Shopping Cart Integration",
          "Unlimited Products",
          "Unlimited Categories",
          "Product Rating & Reviews",
          "Easy Product Search",
          "Payment Gateway Integration",
          "Multi-currency Support",
          "Content Management System",
          "Cutomer Log-in Area",
          "Mobile Responsive",
          "Social Media Plugins Integration",
          "Tell a Friend Feature",
          "Social Media Pages",
          "Facebook , Twitter, YouTube, Google+ & Pinterest Page Designs",
        ],
        addon: [
          "Dedicated Account Manager",
          "Unlimited Revisions",
          "All Final File Formats",
          "100% Ownership Rights",
          "100% Satisfaction Guarantee",
          "100% Unique Design Guarantee",
          "100% Money Back Guarantee *",
        ],
        price: "$2499-$2999",
        discountedPrice: "$3599",
      },
    ];
  }

  return <PackageCards packageData={packageData} />;
};

let tabs = [
  {
    id: "website",
    label: "Website",
    description: <TabsData activeTab={"website"} />,
  },
  { id: "logo", label: "Logo", description: <TabsData activeTab={"logo"} /> },
  {
    id: "brand",
    label: "Branding",
    description: <TabsData activeTab={"brand"} />,
  },

  {
    id: "smm",
    label: "Social Media",
    description: <TabsData activeTab={"smm"} />,
  },
  {
    id: "anim",
    label: "Animation",
    description: <TabsData activeTab={"anim"} />,
  },
  {
    id: "stream",
    label: "Streamers Templates",
    description: <TabsData activeTab={"stream"} />,
  },
  {
    id: "appDev",
    label: "App Development",
    description: <TabsData activeTab={"appDev"} />,
  },
  {
    id: "emailMarketing",
    label: "Email Marketing",
    description: <TabsData activeTab={"emailMarketing"} />,
  },
  {
    id: "seo",
    label: "Search Engine Optimization",
    description: <TabsData activeTab={"seo"} />,
  },
  {
    id: "googleAds",
    label: "Google Ads",
    description: <TabsData activeTab={"googleAds"} />,
  },
];
