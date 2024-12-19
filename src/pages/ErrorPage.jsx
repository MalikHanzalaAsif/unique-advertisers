import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";

const ErrorPage = () => {
  return (
    <>
      <ErrorText />
    </>
  );
};

export default ErrorPage;

const ErrorText = () => {
  return (
    <main className="error_page container pt-[180px] pb-[80px]">
      <div className="text-center bg-black md:p-10 p-3 m-auto lg:w-[70%] w-[100%] thanks_box">
      <iframe src="https://lottie.host/embed/cbea1ba2-d162-4e25-b52d-2943bcd4c2ca/r2ZTeWnMBK.json"></iframe>
      <h1 className="heading my-10">This Page Could Not Be Found!</h1>
        <NavLink className="cta glow" to="/">
          <Button>Back To Home Page</Button>
        </NavLink>
      </div>
    </main>
  );
};
