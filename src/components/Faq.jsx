import BlushRight from "/images/services/blush-hero-bottom.webp";
import cylinderBox from "/images/services/box-vector.png";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Faq = () => {
  return (
    <main className="accord_bar bg-black lg:pt-[80px] lg:pb-[120px] md:pt-[40px] md:pb-[70px] pt-[30px] pb-[50px] px-2 overflow-hidden relative">
      <div className="absolute blush_right">
        <img src={BlushRight} alt="BlushRight" />
      </div>
      <div className="absolute traugnle_box md:block hidden ">
        <img src={cylinderBox} alt="CylinderBox" />
      </div>
      <div className="container w-[100%] lg:w-[70%] m-auto">
        <div className="heading md:mb-[80px] mb-[30px]">
          <h2 className="heading text-center">
            Frequently Asked
            <span style={{ color: "var(--color-primary)" }}> Questions </span>
          </h2>
        </div>
        <div className="acoord_ians">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                Which services are provided by Unique Advertisers?{" "}
              </AccordionTrigger>
              <AccordionContent>
                <p>
                  {" "}
                  A wide range of digital services, including as logo creation,
                  branding, website building, social media marketing, video
                  animation, SEO optimization, and customized Twitch packages,
                  are provided by Unique Advertisers.{" "}
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>
                What is the duration required to finish a project?{" "}
              </AccordionTrigger>
              <AccordionContent>
                <p>
                  Project durations differ based on the project's complexity and
                  scope. We collaborate closely with each client to set
                  reasonable deadlines and guarantee project delivery on time.
                  The timeline is usually shared in the first stages of
                  consultation.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>
                If you are wondering we are expensive or not
              </AccordionTrigger>
              <AccordionContent>
                <p>
                  {" "}
                  We offer graphic design and web design services at competitive
                  rates, making them affordable for our clients. Our pricing is
                  structured to ensure that you receive high-quality work
                  without breaking the bank. We believe in providing excellent
                  value for your investment, delivering top-notch design
                  solutions that meet your needs while staying within your
                  budget. So, rest assured, when it comes to graphic design and
                  web design, we're not expensive at all.{" "}
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>
                {" "}
                Will the design process involve my input?{" "}
              </AccordionTrigger>
              <AccordionContent>
                <p>
                  {" "}
                  Of course! Throughout the design phase, client feedback is
                  essential. We aggressively seek customer feedback at every
                  level because we respect collaboration and want to make sure
                  that their vision and expectations are reflected in the
                  finished result.{" "}
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger>
                {" "}
                Do you offer continuing assistance once a project is finished?{" "}
              </AccordionTrigger>
              <AccordionContent>
                <p>
                  {" "}
                  Yes, even after a project is finished, we continue to support
                  our clients. Our team is here to help with upgrades,
                  maintenance, and troubleshooting, and we're happy to answer
                  any questions you may have.{" "}
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger>
                {" "}
                Is it possible for you to raise our search engine rankings?{" "}
              </AccordionTrigger>
              <AccordionContent>
                <p>
                  {" "}
                  Indeed, we provide SEO optimization services to raise the
                  search engine ranks of your website. Our staff optimizes your
                  website for search engines by applying tried-and-true methods
                  and best practices, which raises its exposure and generates
                  natural traffic.{" "}
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7">
              <AccordionTrigger>
                {" "}
                How do I begin my project with unique advertisers?{" "}
              </AccordionTrigger>
              <AccordionContent>
                <p>
                  {" "}
                  With us, getting started is simple! To arrange a consultation,
                  either use the contact form on our website or get in touch
                  with us personally. We'll talk about your project's needs,
                  objectives, and budget during the consultation to decide how
                  to proceed.{" "}
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </main>
  );
};

export default Faq;
