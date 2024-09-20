import BannerCarousel from "@/components/home/bannerCarousel";
import BlogImages from "@/components/home/blogImages";
import CategorySection from "@/components/home/categorySection";
import CrazyDealsComponent from "@/components/home/crazyDeals";
import ProductCard from "@/components/home/productCard";
import CustomerReviews from "@/components/home/reviewSection";
import SpecialCombosComponent from "@/components/home/specialCombos";
import WhyWebsiteComponent from "@/components/home/WhyWebsiteComponent";
import React from "react";

const Page = () => {
  return (
    <div>
      <BannerCarousel />
      <SpecialCombosComponent />
      <ProductCard heading="Best Sellers" />
      <CategorySection />
      <CrazyDealsComponent />
      <WhyWebsiteComponent />
      <CustomerReviews />
      <BlogImages />
    </div>
  );
};

export default Page;
