"use client";

import { createContext, useContext, useState } from "react";

const ProductsContext = createContext();

export const ProductsProvider = ({ initialData, children }) => {
  const [products] = useState(initialData);

  return (
    <ProductsContext.Provider value={products}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = () => {
  return useContext(ProductsContext);
};
