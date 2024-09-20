"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import ProductCard from "@/components/home/productCard";
import FilterComponent from "@/components/shop/filterButton";

interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  originalPrice: number;
  rating: number;
  reviews: number;
  discount: number;
  tag: string;
}

export default function ShopComponent() {
  const [sortBy, setSortBy] = useState("Featured");

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="heading mb-8">Shop All Products</h1>
      <div className="flex justify-between items-center mb-6">
        <div className="flex">
          <FilterComponent />
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none bg-black text-white px-4 py-2 pr-8 border-l border-white"
            >
              <option>Featured</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Customer Rating</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
              <ChevronDown className="h-4 w-4" />
            </div>
          </div>
        </div>
      </div>
      <ProductCard heading="" shop={true} />
      <ProductCard heading="" shop={true} />
    </div>
  );
}
