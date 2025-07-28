import { Badge } from "@/components/ui/badge";
import { comma } from "@/utils/functions";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductSection = ({ data, category, title }) => {
  return (
    <section className="w-full flex justify-center bg-background">
      <div className="w-full max-w-screen-xl py-10 sm:py-16 md:py-24 px-4 sm:px-8 md:px-12 flex flex-col items-center gap-8 md:gap-10">
        <div className="w-full flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold">
            {title}
          </h3>
          <Link
            href={`/shop?category=${category}`}
            className="text-xs sm:text-sm font-bold"
          >
            더보기
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 w-full gap-3 md:gap-6">
          {data
            .filter((el) => el.category === category)
            .slice(0, 4)
            .map((item) => (
              <Link
                href={`/shop/${item.product_id}`}
                className="flex flex-col gap-1 md:flex-row items-center bg-white p-4 sm:p-5 md:p-6 rounded-xl cursor-pointer shadow-sm hover:shadow-md transition-shadow duration-200"
                key={item.id}
              >
                <div className="w-full md:w-[30%] flex justify-center mb-2 md:mb-0">
                  <Image
                    src={item.image_url ?? "/image/no-image.jpg"}
                    width={100}
                    height={100}
                    alt="원두"
                  />
                </div>
                <div className="w-full md:w-[70%] py-2 md:py-3 inline-flex flex-col gap-1 items-center md:items-start text-center md:text-left">
                  <p className="text-base sm:text-lg md:text-xl text-gray-700 font-semibold">
                    {item.name_ko}
                  </p>
                  <p className="text-sm text-main font-medium">
                    자두, 적포도, 흑설탕
                  </p>
                  {item.roasting_level && (
                    <Badge className="w-fit bg-point cursor-default text-xs">
                      {item.roasting_level}
                    </Badge>
                  )}
                  <p className="text-xs sm:text-sm md:text-base">
                    {comma(item.price)}원
                  </p>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
