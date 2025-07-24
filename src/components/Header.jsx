"use client";

import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useParams, usePathname, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const Header = () => {
  const pathname = usePathname();

  // ------------ 상태 ------------
  const [scrollded, setScrolled] = useState(false);

  // ------------ 이펙트 ------------
  // 스크롤 이벤트
  useEffect(() => {
    const handleScroll = () => {
      if (pathname === "/") {
        if (window.scrollY > 100) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      } else {
        if (window.scrollY > 1) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={clsx(
        "flex justify-center items-center fixed top-0 left-0 right-0 z-[9999] transition-colors duration-300",
        pathname === "/" && scrollded && "bg-white text-black shadow-sm",
        pathname === "/" && !scrollded && "bg-transparent text-white",
        pathname !== "/" && scrollded && "bg-white text-black shadow-sm",
        pathname !== "/" && !scrollded && "bg-transparent text-black"
      )}
    >
      <div className="w-full h-full max-w-screen-xl flex flex-col justify-center px-[50px] py-[25px]">
        <div className="w-full text-[12px] flex justify-end gap-[20px] mb-[10px] text-gray-400 ">
          <Link href="/login">로그인 / 회원가입</Link>
          <Link href="/login">고객센터</Link>
        </div>
        <div className="w-full flex justify-between items-center">
          <Link href="/" className="relative">
            <Image
              src={
                pathname === "/" && !scrollded
                  ? "/logo/mycafe-logo-white.png"
                  : "/logo/mycafe-logo.png"
              }
              alt="logo"
              width={100}
              height={100}
            />
          </Link>
          <div className="flex gap-[50px] text-[18px]">
            <Link href="/about">About</Link>
            <Link href="/shop?category=coffee">shop</Link>
            <Link href="/contact">contact</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
