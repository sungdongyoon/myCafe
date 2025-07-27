import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="py-[50px] px-[20px] bg-main px-4 sm:px-8 md:px-12 text-background flex flex-col items-center">
      <div className="w-full max-w-screen-xl">
        <div className="flex">
          <Image
            src="/logo/mycafe-logo.png"
            width={100}
            height={100}
            alt="logo"
          />
        </div>
        <div className="flex flex-col gap-[10px] mt-[10px] mb-[30px]">
          <div className="flex">
            <p>
              <span className="text-sub mr-[5px]">대표자</span> 윤동성
            </p>
            <p className="mx-2">|</p>
            <p>
              <span className="text-sub mr-[5px]">주소</span> 서울특별시 광진구
              아차산로 65길 91
            </p>
          </div>
          <div className="flex">
            <p>
              <span className="text-sub mr-[5px]">사업자등록번호</span>{" "}
              123-45-67890
            </p>
            <p className="mx-2">|</p>
            <p>
              <span className="text-sub mr-[5px]">통신판매업 신고번호</span>{" "}
              제2025-서울광진-1234호
            </p>
          </div>
          <div className="flex">
            <p>
              <span className="text-sub mr-[5px]">Tel</span> 010-6312-5903
            </p>
            <p className="mx-2">|</p>
            <p>
              <span className="text-sub mr-[5px]">E-mail</span>{" "}
              ehdtjd0906@naver.com
            </p>
          </div>
          <p>
            <span className="text-sub mr-[5px]">개인정보보호책임자</span> 윤동성
          </p>
        </div>
      </div>
      <p>ⓒ 2025 MyCafe Co., Ltd. All rights reserved.</p>
    </div>
  );
};

export default Footer;
