import { Dashboard } from "@/pages/Dashboard";
import { Login } from "@/pages/Login";
import Profile from "@/pages/Profile";
import AddPost from "@/pages/AddPost";
import Archive from "@/pages/posts/Archive";
import { Routes, Route } from "react-router-dom";
import Homepage from "@/pages/Homepage";
import { useSelector } from "react-redux";
import SinglePost from "@/pages/posts/SinglePost";
import AboutPage from "@/pages/AboutPage";
import ContactPage from "@/pages/ContactPage";
import PortfolioPage from "@/pages/PortfolioPage";
import { Package } from "lucide-react";
import TestimonialsPage from "@/pages/Testimonials";
import WebDevelopment from "@/pages/WebDevelopment";
import PackagePage from "@/pages/PackagePage";
import PrivacyPolicyPage from "@/pages/PrivacyPolicyPage";
import TermsandConditionPage from "@/pages/TermsandConditionPage";
import ServicesPage from "@/pages/ServicesPage";
import ThankYouPage from "@/pages/ThankyouPage";
import SingleService from "@/pages/SingleService";
import ErrorPage from "@/pages/ErrorPage";
import { ROUTES } from ".";

const WebRoutes = () => {
  // const auth = JSON.parse(localStorage.getItem("user"));
  const {
    LOGIN,
    ABOUT,
    SERVICE,
    BLOGS,
    CONTACT,
    PORTFOLIO,
    PACKAGES,
    TESTIMONIALS,
    PRIVACY_POLICY,
    TERMS_CONDITION,
    THANK_YOU,
    SERVICE_ANIMATION,
    SERVICE_BRANDING,
    SERVICE_SOCIAL,
    SERVICE_GRAPHICS,
    SERVICE_WEBSITE,
    SERVICE_STREAMERS,
    SERVICE_APP,
    SERVICE_SEO,
    POST_ADD,
    ADMIN,
    PROFILE,
  } = ROUTES;
  const auth = useSelector((state) => state.auth.user);
  return (
    <Routes>
      <Route path="/" element={<Homepage />}></Route>
      {auth.token && (
        <>
          <Route path={POST_ADD} element={<AddPost />}></Route>
          <Route path={ADMIN} element={<Dashboard />}></Route>
          <Route path={PROFILE} element={<Profile />}></Route>
        </>
      )}
      <Route path={LOGIN} element={<Login />}></Route>
      <Route path={ABOUT} element={<AboutPage />}></Route>
      <Route path={SERVICE} element={<ServicesPage />}></Route>
      <Route path={BLOGS} element={<Archive />}></Route>
      <Route path={CONTACT} element={<ContactPage />}></Route>
      <Route path={PORTFOLIO} element={<PortfolioPage />}></Route>
      <Route path={PACKAGES} element={<PackagePage />}></Route>
      <Route path={TESTIMONIALS} element={<TestimonialsPage />}></Route>
      <Route path={PRIVACY_POLICY} element={<PrivacyPolicyPage />}></Route>
      <Route path={TERMS_CONDITION} element={<TermsandConditionPage />}></Route>
      <Route path={THANK_YOU} element={<ThankYouPage />}></Route>
      <Route path={SERVICE_WEBSITE} element={<SingleService />}></Route>
      <Route path={SERVICE_GRAPHICS} element={<SingleService />}></Route>
      <Route path={SERVICE_ANIMATION} element={<SingleService />}></Route>
      <Route path={SERVICE_SOCIAL} element={<SingleService />}></Route>
      <Route path={SERVICE_BRANDING} element={<SingleService />}></Route>
      <Route path={SERVICE_STREAMERS} element={<SingleService />}></Route>
      <Route path={SERVICE_APP} element={<SingleService />}></Route>
      <Route path={SERVICE_SEO} element={<SingleService />}></Route>

      <Route path={BLOGS + "/:id"} element={<SinglePost />}></Route>
      <Route path="/tag/:id" element={<Archive />}></Route>
      <Route path="/category/:id" element={<Archive />}></Route>
      <Route path="*" element={<ErrorPage />}></Route>
    </Routes>
  );
};

export default WebRoutes;
