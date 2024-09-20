import React from "react";
import Image from "next/image";

const categories = [
  { name: "COSMETICS", image: "https://placehold.co/300x300" },
  { name: "SKINCARE", image: "https://placehold.co/300x300" },
  { name: "LUXURY PERFUMES", image: "https://placehold.co/300x300" },
  { name: "BATH & BODY", image: "https://placehold.co/300x300" },
  { name: "BODY DEOS", image: "https://placehold.co/300x300" },
  { name: "GIFT SETS", image: "https://placehold.co/300x300" },
];
const CategorySection = () => {
  return (
    <div>
      <div className="container mx-auto px-4 mb-[20px]">
        <div className="heading my-[10px] ownContainer text-center uppercase sm:my-[40px]">
          LUXURY CATEGORIES
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="bg-gray-100">
                <img
                  src={category.image}
                  alt={category.name}
                  width={300}
                  height={300}
                  className="w-full h-auto object-cover"
                />
              </div>
              <span className="text-sm font-medium text-center">
                {category.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategorySection;
