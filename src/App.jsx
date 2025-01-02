import Navigation from "./components/Navigation";
import WebRoutes from "./routes/WebRoutes";
import "@/assets/styles.css";
import { useSelector } from "react-redux";
import Footer from "./components/Footer";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.min.css";
import ProviderParent from "./ProviderParent";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BsEnvelopeHeartFill } from "react-icons/bs";
import { FaMagic } from "react-icons/fa";
import { FaArrowsToEye } from "react-icons/fa6";
import { MdInput } from "react-icons/md";
import Loader from "./components/Loader";


export const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  // const handleLoad = () => {
  //   setIsLoading(false);
  // };


  // if (document.readyState === "complete") {
  //   handleLoad();
  // } else {
  //   window.addEventListener("load", handleLoad);
  // }

  // return () => {
  //   window.removeEventListener("load", handleLoad);
  // };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timeout);
  }, []);
  const auth = useSelector((state) => state.auth);
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <main id="app">
          <ProviderParent>
            <ScrollToTop />
            <Navigation auth={auth} />
            <WebRoutes />
            <Footer />
            <ToastContainer />
          </ProviderParent>
        </main>
      )}
    </>
  );
};

export default App;
