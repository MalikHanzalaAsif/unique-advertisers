import Banner from "@/components/Banner";
import { FaXTwitter, FaInstagram, FaFacebookF, FaBehance } from "react-icons/fa6";
import Contactform from "@/components/Contactform";
import { VARIABLES } from "@/utils/variables";
import { FaEnvelopesBulk } from "react-icons/fa6";
import { BsTelephoneFill } from "react-icons/bs";
import { IoLocation } from "react-icons/io5";

const PrivacyPolicyPage = () => {
    return (

        <>
            <Banner title="Privacy Policy" />
            <PrivacyText />
        </>

    );
};

export default PrivacyPolicyPage;



const PrivacyText = () => {
    return (
        <main className="container py-[30px] md:py-[40px] lg:py-[80px]">

            <div className="pra_div">

                <p className="leading-8 text-center text-xl">
                    Welcome to <b>Unique Advertisers!</b> This Privacy Policy explains how we collect, use, disclose, and protect information we gather from clients, users, and visitors through our website, services, and platforms. By using our services, you agree to the terms outlined in this policy.
                </p>
            </div>

            <div className="pra_div mt-7">

                <h3 className="text-4xl mb-7">
                    1. Information We Collect
                </h3>

                <p className="leading-8">
                    We collect information to provide better services to our clients and users. The types of information we collect include:
                </p>
            </div>

            <div className="pra_div mt-7">

                <h3 className="text-2xl mb-7">
                    - Personal Information:
                </h3>

                <p className="leading-8">
                    Names, email addresses, phone numbers, and billing information when you register, make inquiries, or make purchases.
                </p>
            </div>

            <div className="pra_div mt-7">

                <h3 className="text-2xl mb-7">
                    - Business Information:
                </h3>

                <p className="leading-8">
                    Company name, position/title, and any specific project details provided for branding, digital marketing, web/app development, and other services.
                </p>
            </div>
            <div className="pra_div mt-7">

                <h3 className="text-2xl mb-7">
                    - Usage Data:
                </h3>

                <p className="leading-8">
                    Information on how you use our website and services, such as IP addresses, browser type, referring/exit pages, and platform usage.
                </p>
            </div>
            <div className="pra_div mt-7">

                <h3 className="text-2xl mb-7">
                    - Technical Data:
                </h3>

                <p className="leading-8">
                    Information related to device, operating system, and preferences to ensure a better experience across digital platforms.
                </p>
            </div>
            <div className="pra_div mt-7">

                <h3 className="text-4xl mb-7">
                    2. How We Use the Information
                </h3>

                <p className="leading-8">
                    We use the collected information in the following ways: <br /><br />

                    - To provide and maintain our services, including web/app development, digital marketing, branding, and graphic design. <br />
                    - To communicate with you regarding project updates, billing, and inquiries. <br />
                    - To improve and personalize your experience with our website and services. <br />
                    - To analyze usage and trends, which helps us to improve our products and services. <br />
                    - To protect our legal rights and prevent misuse of our services.
                </p>
            </div>
            <div className="pra_div mt-7">

                <h3 className="text-4xl mb-7">
                    3. Information Sharing and Disclosure
                </h3>

                <p className="leading-8">
                    We respect your privacy and do not sell or rent your personal information. However, we may share your information in the following cases:
                </p>
            </div>
            <div className="pra_div mt-7">

                <h3 className="text-2xl mb-7">
                    - Service Providers:
                </h3>

                <p className="leading-8">
                    We may share information with trusted third-party providers who perform tasks such as payment processing, project management, and analytics. These providers are required to keep your information secure and confidential.
                </p>
            </div>
            <div className="pra_div mt-7">

                <h3 className="text-2xl mb-7">
                    - Legal Requirements:
                </h3>

                <p className="leading-8">
                    We may disclose your information when required by law or in response to legal processes, such as a subpoena or court order. <br />
                    - **<b>Business Transfers</b>**: In the event of a merger, acquisition, or asset sale, your information may be transferred to the successor company.

                </p>
            </div>
            <div className="pra_div mt-7">

                <h3 className="text-4xl mb-7">
                    4. Data Security
                </h3>

                <p className="leading-8">
                    We implement industry-standard security measures to protect your personal information from unauthorized access, disclosure, or destruction. However, please note that no method of transmission over the internet or electronic storage is completely secure.
                </p>

            </div>
            <div className="pra_div mt-7">

                <h3 className="text-4xl mb-7">
                    5. Your Rights and Choices
                </h3>

                <p className="leading-8">
                    Depending on your jurisdiction, you may have rights related to the access, correction, deletion, or restriction of your personal data. You can contact us to exercise these rights where applicable.
                </p>

            </div>
            <div className="pra_div mt-7">

                <h3 className="text-4xl mb-7">
                    6. Cookies and Tracking Technologies
                </h3>

                <p className="leading-8">
                    We use cookies and similar tracking technologies to collect information about your interaction with our website, which helps us enhance user experience and analyze site traffic. You can control cookie preferences through your browser settings.
                </p>

            </div>
            <div className="pra_div mt-7">

                <h3 className="text-4xl mb-7">
                    7. Third-Party Links
                </h3>

                <p className="leading-8">
                    Our website may contain links to other sites. We are not responsible for the privacy practices of these external sites, and we encourage you to review their policies before providing personal information.
                </p>

            </div>
            <div className="pra_div mt-7">

                <h3 className="text-4xl mb-7">
                    8. Children's Privacy
                </h3>

                <p className="leading-8">
                    Our services are not directed at individuals under 13. We do not knowingly collect information from children. If we become aware of any such data, we will take steps to delete it.
                </p>

            </div>
            <div className="pra_div mt-7">

                <h3 className="text-4xl mb-7">
                    9. Changes to This Privacy Policy
                </h3>

                <p className="leading-8">
                    We may update this Privacy Policy periodically to reflect changes in our practices or for other operational, legal, or regulatory reasons. We encourage you to review this policy periodically.
                </p>

            </div>
            <div className="pra_div mt-7">

                <h3 className="text-4xl mb-7">
                    10. Contact Us
                </h3>

                <p className="leading-8">
                    If you have questions or concerns about this Privacy Policy, please contact us at:
                </p>

            </div>

            <section className="container m-auto mt-16">
                <div className="info_div order-1">
                    <h4 className="lg:text-3xl md:text-2xl mb-8">Unique Advertisers</h4>

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
            </section>


            <div className="pra_div mt-12">

                <p className="text-4xl mb-7 text-center">
                    ---

                </p>

                <p className="leading-8 text-center text-sm">
                    This policy provides a foundation, but always consider tailoring it with legal guidance for comprehensive compliance with relevant laws like CCPA, COPPA, and any applicable U.S. state-specific regulations.
                </p>

            </div>
        </main>

    );
};
