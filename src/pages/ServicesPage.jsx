import Banner from "@/components/Banner";
import { SolutionsTabs } from "./Homepage";
import CardBox from "@/components/CardBox";

const ServicesPage = () => {
  const ServicesCardContent = [
    {
      boxTitle: "STRATEGIC GOALS",
      boxContent: "We have in-depth conversations with our clients throughout the strategy phase to learn about their goals and expectations for the project. To ensure a thorough knowledge, this entails determining preferred design styles, color palettes, and certain features",
    },
    {
      boxTitle: "FINDING THE RIGHT ASSETS ",
      boxContent: "Our committed project team uses analysts throughout the research phase to examine the project scope and create an extensive report. This include gathering market research, examining rivals, and determining target markets using information from clients. Next, we create a detailed implementation strategy with a well-defined project schedule.",
    },
    {
      boxTitle: "CRAFTING",
      boxContent: "Our design teams take the lead and start working on making preliminary samples that they will show the client. We then create many concepts to mold the project based on their input and preferences.",
    },
    {
      boxTitle: "DEVELOPING THE DESIGNS FOR THE FINAL STATGES",
      boxContent: "We have in-depth conversations with the customer during the development phase in order to choose the best design concept for the project. Our technical team follows the predetermined strategy and follows this selected design to ensure that all necessary features and functionalities are included in the final product.",
    },
    {
      boxTitle: "REVIEWS UPON THE PROJECT",
      boxContent: "We send the client preliminary drafts of the whole project for their approval. To guarantee the effective delivery of the finished project, we rely on their input and vision. Our team is promptly notified of any alterations or adjustments that are needed throughout the design or development phases, and they promptly put the necessary changes into practice.",
    },
    {
      boxTitle: "DELIVERING THE PROJECT",
      boxContent: "After thorough internal testing, we complete the project scope and deliver the finished product. Prior to release or customer delivery, the completed product is carefully examined by our Quality Assurance team. We don't stop working until our clients are completely happy with the result.",
    },
  ];

  return (
    <>
      <Banner title="Services" />
      <main className="py-[30px] md:py-[40px] lg:py-[80px]">
        <SolutionsTabs />
      </main>
      <div className="container box_design">
        <div className="grid md:grid-cols-2 text-center md:text-left">
          <div className="head_serv">
            <h2 className="heading mb-5">Why Choose Us</h2>
          </div>
          <div className="leading-8">
            <p>
            Unique Advertisers stands out with its blend of creativity and data-driven strategies. Our expert team delivers tailored campaigns that capture attention and drive results, ensuring your brand grows and excels in a competitive market.
            </p>
          </div>
        </div>
        <CardBox infoBoxCard={ServicesCardContent} />
      </div>
    </>
  );
};

export default ServicesPage;
