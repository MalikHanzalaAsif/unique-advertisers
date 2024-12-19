import { Button } from "@/components/ui/button";
import { ROUTES } from "@/routes";
import { MdLibraryAddCheck } from "react-icons/md";
import { NavLink } from "react-router-dom";

const ThankYouPage = () => {
  return (
    <>
      <ThanksBox />
    </>
  );
};

export default ThankYouPage;

const ThanksBox = () => {
  return (
    <main className="container pt-[180px] pb-[80px]">
      <div className="text-center bg-black md:p-10 p-3 m-auto lg:w-[70%] w-[100%] thanks_box">
        <MdLibraryAddCheck />
        <h1 className="heading my-5">Thank You</h1>
        <p className="leading-8">
          Thank you for reaching us out! <br /> One of our representative will
          contact you soon!
        </p>
        <NavLink to={ROUTES.HOME}>
          <Button className="text-black mt-3 capitalize">
            Back to Homepage
          </Button>
        </NavLink>
      </div>
    </main>
  );
};
