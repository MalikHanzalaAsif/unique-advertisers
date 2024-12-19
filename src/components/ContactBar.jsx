import { NavLink } from "react-router-dom";
import { Button } from "./ui/button";
import "@/assets/component-styles/contactbar.css";
import lineBar from "/images/services/project-left-items-2.webp";
import leftLaptop from "/images/services/project-left-items-4.webp";
import leftItem from "/images/services/project-left-items-3.webp";
import leftMouse from "/images/services/project-left-items.webp";
import RightItem1 from "/images/services/project-right-items-1.webp";
import RightItem2 from "/images/services/project-right-items-2.webp";
import RightItem3 from "/images/services/project-right-items-3.webp";
import LeftMobProject from "/images/services/project-left-items-mob.webp";
import RightMobProject from "/images/services/project-right-items-mob.webp";

const ContactBar = () => {
  return (
    <>
      <main className="contact_bar z-10 relative">
        <section className="contact_bar_bg">
          <section className="container text-center relative  grid justify-center">
            <img
              src={LeftMobProject}
              alt="left-mob"
              srcSet={LeftMobProject}
              width={300}
              className="mb-3 lg:hidden block"
            />
            <div>
              <h2 className="title heading text-black pb-8">
                A NEW WAY TO CREATE <br className="break" /> PROJECT FOR YOUR
                COMPANY
              </h2>
            </div>
            <div>
              <NavLink className="cta glow black_btn" to="/contact">
                <Button>Contact Us Now</Button>
              </NavLink>
            </div>
            <img
              src={RightMobProject}
              alt="right-mob"
              srcSet={RightMobProject}
              width={300}
              className="mt-3 lg:hidden block mx-auto"
            />
          </section>
          <section className="project_items_desktop hidden lg:block">
            <div className="left_c_bar">
              <div>
                <img src={lineBar} alt="bar" srcSet={lineBar} />
              </div>
              <div>
                <img src={leftLaptop} alt="laptop left" srcSet={leftLaptop} />
              </div>
              <div>
                <img src={leftItem} alt="left item" srcSet={leftItem} />
              </div>
              <div>
                <img src={leftMouse} alt="left mouse" srcSet={leftMouse} />
              </div>
            </div>

            <div className="right_c_bar">
              <div>
                <img src={RightItem1} alt="Right item 1" srcSet={RightItem1} />
              </div>
              <div>
                <img src={RightItem3} alt="Right item 3" srcSet={RightItem3} />
              </div>
              <div>
                <img src={RightItem2} alt="Right item 2" srcSet={RightItem2} />
              </div>
            </div>
          </section>
        </section>
      </main>
    </>
  );
};

export default ContactBar;
