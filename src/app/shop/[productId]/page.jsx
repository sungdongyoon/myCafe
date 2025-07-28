"use client";

import { useProducts } from "@/provider/ProductsProvider";
import { useParams } from "next/navigation";
import React, { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { comma } from "@/utils/functions";
import Payment from "@/components/Payment";
import Container from "@/components/Container";

const ProductDetail = () => {
  const { productId } = useParams();

  // ------------ 데이터 ------------
  const productData = useProducts();
  const product = productData.find((el) => el.product_id === productId);

  // ------------ 상태 ------------
  const [itemCount, setItemCount] = useState(1);

  const postTossPaymentData = useMemo(() => {
    if (!product) return { itemName: "", price: 0, count: 1 };
    return {
      itemName: product.name_ko,
      price: product.price * itemCount,
      count: itemCount,
      orderId: product.product_id,
    };
  }, [product, itemCount]);

  console.log("data", postTossPaymentData);

  return (
    <Container>
      <div className="w-full max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-6 sm:gap-8">
          <div className="w-full md:w-1/2">
            <div className="w-full aspect-square relative">
              <Image
                src={product.image_url ?? "/image/no-image.jpg"}
                alt={product.name_ko}
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 flex flex-col gap-6">
            <div className="flex flex-col gap-3 sm:gap-4">
              <h3 className="text-2xl sm:text-3xl font-medium">
                {product.name_ko}
              </h3>
              <span className="text-xl sm:text-2xl font-semibold">
                {comma(product.price)}원
              </span>
              <span>{product.roasting_level}</span>
              <span>{product.country}</span>
              <span>{product.desc_ko}</span>
            </div>
            <div className="border border-gray-500 border-solid rounded-lg p-4 flex flex-col gap-4">
              <h5 className="text-lg sm:text-xl font-medium">
                {product.name_ko}
              </h5>
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <button
                    className="border border-solid border-gray-500 w-[30px] h-[30px] rounded-[5px] text-lg"
                    onClick={() =>
                      setItemCount((prev) => (prev > 1 ? prev - 1 : 1))
                    }
                  >
                    -
                  </button>
                  <div className="w-[50px] text-center">
                    <span className="text-[18px] ">{itemCount}</span>
                  </div>
                  <button
                    className="border border-solid border-gray-500 w-[30px] h-[30px] rounded-[5px] text-[18px]"
                    onClick={() => setItemCount((prev) => prev + 1)}
                  >
                    +
                  </button>
                </div>
                <div>
                  <span className="text-xl font-semibold">
                    {comma(itemCount * product.price)}원
                  </span>
                </div>
              </div>
            </div>
            <Payment
              price={postTossPaymentData.price}
              itemName={postTossPaymentData.itemName}
              count={postTossPaymentData.count}
              orderId={postTossPaymentData.orderId}
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ProductDetail;
