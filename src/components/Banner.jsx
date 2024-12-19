import { NavLink, useLocation } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const Banner = ({ title }) => {
  const location = useLocation();
  return (
    <main className="banner">
      <section className="container pt-[150px] md:pb-[100px] pb-[40px] lg:text-start text-center px-0">
        <h1 className="heading text-5xl font-normal leading-normal mt-0 mb-2 text-white-800">
          {" "}
          <span className="hov_head"> {title || "Heading"}</span>
        </h1>
        {/* TODO: Need to add nested breads */}
        <Breadcrumb className="mx-3 flex justify-center lg:justify-start mt-10">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink>
                <NavLink to={"/"}>Home</NavLink>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            {/* <BreadcrumbItem>
              <BreadcrumbLink>
                <NavLink to={"/about"}>Components</NavLink>
              </BreadcrumbLink>
            </BreadcrumbItem> 
            <BreadcrumbSeparator />
            */}
            <BreadcrumbItem>
              <BreadcrumbPage>
                <NavLink to={location.pathname}>{title}</NavLink>
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </section>
    </main>
  );
};

export default Banner;
