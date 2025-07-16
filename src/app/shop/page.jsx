"use client";

import React, { useEffect, useState } from "react";
import { useProducts } from "@/provider/ProductsProvider";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const Shop = () => {
  const params = useSearchParams();
  const categoryParams = params.get("category");

  // ------------ 데이터 ------------
  const productData = useProducts(); // 모든 상품
  const coffeeData = productData.filter((el) => el.category === "coffee"); // 커피
  const goodsData = productData.filter((el) => el.category === "goods"); // 굿즈

  console.log("product", productData);
  console.log("coffee", coffeeData);
  console.log("goods", goodsData);

  // ------------ 상태 ------------
  const [viewItem, setViewItem] = useState(coffeeData); // 실제로 보여지는 아이템

  // ------------ 이펙트 ------------
  // viewItem 상태 변경
  useEffect(() => {
    if (categoryParams === "coffee") {
      setViewItem(coffeeData);
    } else if (categoryParams === "goods") {
      setViewItem(goodsData);
    } else {
      setViewItem(coffeeData);
    }
  }, [categoryParams]);

  return (
    <div className="min-h-[100vh] py-[100px] px-[200px]">
      <div className="flex flex-col items-center gap-[20px]">
        <h3 className="text-[30px] font-semibold">Shop</h3>
        <div className="mb-[30px]">
          <Link
            href="/shop?category=coffee"
            className="text-[18px] border border-blue-500 border-solid w-[100px] h-[30px]"
          >
            Coffee
          </Link>
          <Link
            href="/shop?category=goods"
            className="text-[18px] border border-blue-500 border-solid w-[100px] h-[30px]"
          >
            Goods
          </Link>
        </div>
        <div className="w-[100%] grid grid-cols-4 gap-[30px]">
          {viewItem.map((item) => (
            <div key={item.id}>
              <div className="border-2 border-solid border-gray-200 rounded-[10px] flex justify-center items-center p-[20px]">
                <Image
                  src={item.image_url ?? "/image/no-image.jpg"}
                  width={100}
                  height={100}
                  alt={item.name_ko}
                />
              </div>
              <div className="flex flex-col gap-[10px] justify-center items-center py-[20px]">
                <p className="text-[15px]">{item.name_ko}</p>
                <p>
                  <span className="text-[18px] font-medium">{item.price}</span>
                  <span className="text-[12px]">원</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
