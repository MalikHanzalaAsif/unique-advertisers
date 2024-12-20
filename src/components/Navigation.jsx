import React, { useEffect, useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import logo from "/images/services/logo.webp";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Button } from "./ui/button";
import callIcon from "/images/services/call-icon.webp";
import { IoCloseCircleOutline } from "react-icons/io5";
import { FaBarsStaggered } from "react-icons/fa6";
import Lottie from "lottie-react";
import CallIconLottie from "./lottie/call-icon.json";

const navlinks = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "About",
    link: "/about",
  },
  {
    title: "Services",
    link: "/services",
  },
  {
    title: "Packages",
    link: "/packages",
  },
  {
    title: "Testimonials",
    link: "testimonials",
  },
  {
    title: "Contact",
    link: "/contact"
  }
];

// Define the NavigationMenuDemo component
export default function NavigationMenuDemo({ auth }) {
  const logoRef = useRef();

  useEffect(() => {
    // setLogoHeight();
    window.addEventListener("scroll", () => {
      let scroll = window.scrollY;
      let header = document.getElementById("navHeader");
      if (scroll > 1) {
        header.classList.add("sticky_header");
      } else {
        header.classList?.remove("sticky_header");
      }
    });
    // window.addEventListener("resize", () => {
    //   console.log("Width", window.innerWidth);
    //   console.log("Height", window.innerHeight);
    // });
  }, []);
  return (
    <main className="main_nav" id="navHeader">
      <header id="header" className=" px-[20px]">
        {/* <NavigationMenu className="flex justify-between flex-row w-full max-w-full">
          <NavigationMenuList>
            <NavigationMenuItem>
          <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <div className="mb-2 mt-4 text-lg font-medium">
                      shadcn/ui
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Beautifully designed components that you can copy and
                      paste into your apps. Accessible. Customizable. Open
                      Source.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
            <NavigationMenuItem>
          <NavigationMenuTrigger>Components</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
            {!authUser.token ? (
              <NavigationMenuItem>
                <NavLink to="/login">
                  <Button variant="ghost">
                    Login <CiLogin />
                  </Button>
                </NavLink>
              </NavigationMenuItem>
            ) : (
              <>
                <NavigationMenuItem>
                  <NavLink to="/admin">
                    <Button variant="ghost">Dashboard</Button>
                  </NavLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavLink to="/add-post">
                    <Button variant="ghost">Post</Button>
                  </NavLink>
                </NavigationMenuItem>
              </>
            )}
          </NavigationMenuList>
          {authUser.token && (
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavLink to="/profile">
                  <Button variant="ghost">
                    <span className="pe-2">{authUser.user_display_name}</span>{" "}
                    <FaCircleUser />
                  </Button>
                </NavLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Button
                  variant="destructive"
                  onClick={() => {
                    dispatch(logout());
                    navigate("/");
                  }}
                >
                  Logout
                </Button>
              </NavigationMenuItem>
            </NavigationMenuList>
          )}
        </NavigationMenu> */}

        <NavigationMenu className="flex justify-between flex-row w-full max-w-full">
          <NavigationMenuList>
            <NavigationMenuItem className="logo">
              <NavLink to="/">
                <img
                  src={logo}
                  alt="Unique Advertisers"
                  width={100}
                  height={100}
                  ref={logoRef}
                  data-heigth="100"
                />
              </NavLink>
            </NavigationMenuItem>
            {navlinks.map((items, ind) => {
              return (
                <NavigationMenuItem key={ind} className="hidden lg:flex">
                  <NavLink to={items.link} className="text-white ">
                    <Button className="text-white">{items.title}</Button>
                  </NavLink>
                </NavigationMenuItem>
              );
            })}
          </NavigationMenuList>
          <NavigationMenuList className="call_box_list hidden lg:flex">
            <NavigationMenuItem>
              <CallBox />
            </NavigationMenuItem>
            <NavigationMenuItem className="hidden xl:block">
              <div>
                <NavLink className="cta glow" to="/contact">
                  <Button style={{ width: 170, padding: 0, height: 48 }}>
                    Contact Us
                  </Button>
                </NavLink>
              </div>
            </NavigationMenuItem>
          </NavigationMenuList>
          <div className="block lg:hidden">
            <DrawerDemo />
          </div>
        </NavigationMenu>
      </header>
    </main>
  );
}

// Define the ListItem component
const ListItem = React.forwardRef(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          </a>
        </NavigationMenuLink>
      </li>
    );
  }
);

ListItem.displayName = "ListItem";

export const CallBox = () => {
  return (
    <>
      <NavLink
        to={`tel:${VARIABLES.PHONE.replaceAll(" ", "")
          .replaceAll("+", "")
          .replaceAll("-", "")}`}
      >
        <div className="call_box flex gap-3 items-center justify-center">
          {/* <img src={callIcon} alt="Call Icon" width={35} height={35} /> */}
          <div style={{ width: 35, height: 35 }}>
            <Lottie animationData={CallIconLottie} loop={true} />
          </div>
          <h5 className="text-1xl">{VARIABLES.PHONE}</h5>
        </div>
      </NavLink>
    </>
  );
};

// DRAWER
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { VARIABLES } from "@/utils/variables";
import { LOTTIE } from "./lottie";

export function DrawerDemo() {
  return (
    <Drawer direction="right">
      <DrawerTrigger asChild>
        {/* <div id="responsiveCheck">
      <label htmlFor="check">
        <input type="checkbox" id="check" />
        <span></span>
        <span></span>
        <span></span>
      </label>
    </div> */}
        <div className="text-4xl">
          <FaBarsStaggered />
        </div>
      </DrawerTrigger>
      <DrawerContent
        id="resMobile"
        className="w-[300px] rounded-none flex flex-col h-full mt-24 fixed bottom-0 right-0 left-auto border-0 outline-none bg-white"
      >
        <div className="mt-12">
          <DrawerHeader>
            <DrawerClose asChild>
              <button id="closeIcon">
                <IoCloseCircleOutline />
              </button>
            </DrawerClose>
            <DrawerTitle className="text-center block m-auto">
              <NavLink to="/">
                <img
                  src={logo}
                  alt="Unique Advertisers"
                  width={100}
                  height={100}
                />
              </NavLink>
            </DrawerTitle>
            <div className="flex-1 h-full w-full">
              <ul className="responsive_list">
                {navlinks.map((items, ind) => {
                  return (
                    <li key={ind} className="d-block w-full mt-3">
                      <NavLink
                        to={items.link}
                        className="text-white d-block w-full"
                      >
                        <Button
                          className="text-white d-block w-full"
                          onClick={() =>
                            document.getElementById("closeIcon").click()
                          }
                        >
                          {items.title}
                        </Button>
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
            </div>
          </DrawerHeader>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
