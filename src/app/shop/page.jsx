"use client";

import React, { Suspense } from "react";

import ShopContent from "./ShopContent";

const Shop = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ShopContent />
    </Suspense>
  );
};

export default Shop;
