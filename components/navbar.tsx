"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Fade as Hamburger } from "hamburger-react";
import { WalletConnect } from "./walletconnect";
import { routes } from "@/configs";

const Navbar = () => {
  const [isMobile, setMobile] = useState(false);
  const [scrollHeader, setScrollHeader] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 5) {
        setScrollHeader(true);
      } else {
        setScrollHeader(false);
      }
    });
  }, []);
  return (
    <div
      className={`w-full top-0 fixed left-1/2 -translate-x-1/2 px-3 z-50 duration-200 ${
        scrollHeader ? "bg-secondary py-3" : "py-4"
      }`}
    >
      <div className="container mx-auto relative">
        <div className="flex justify-between">
          <div className="logo relative items-center flex">
            <Link href="/" className="hidden sm:inline-block">
              <Image src="/logo.png" width={70} height={70} alt="" />
            </Link>
            <div
              className="text-white ml-2 block sm:hidden my-auto"
              onClick={() => setMobile(!isMobile)}
            >
              <Hamburger toggled={isMobile} />
            </div>{" "}
          </div>
          <div className="hidden xl:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <ul className="nav_list gap-3">
              {routes.map((route, i) => (
                <li
                  className={`list_item py-2 px-3 text-white text-[16px!important]  ${
                    pathname === route.url ? "active" : ""
                  }`}
                  key={i}
                >
                  <Link href={route.url}>{route.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="nav_action">
            <WalletConnect />
            <div
              className="text-white ml-2 hidden sm:block xl:hidden"
              onClick={() => setMobile(!isMobile)}
            >
              <Hamburger />
            </div>
          </div>
        </div>
      </div>
      {isMobile === true ? (
        <div className="w-full bg-white/5 backdrop-blur-2xl mt-2 rounded-md shadow shadow-black mr-auto ml-auto">
          <div className="nav_bar mobile_navbar">
            <ul className="nav_list">
              {routes.map((link, key) => (
                <li
                  className={`list_item cursor-pointer ${
                    pathname === link.url ? "active" : ""
                  }`}
                  key={key}
                >
                  <Link href={link.url} onClick={() => setMobile(false)}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Navbar;
