import BannerCarousel from "@/components/home/bannerCarousel";
import BlogImages from "@/components/home/blogImages";
import CategorySection from "@/components/home/categorySection";
import CrazyDealsComponent from "@/components/home/crazyDeals";
import FeaturedProducts from "@/components/home/featuredProducts";
import ProductCard from "@/components/home/productCard";
import CustomerReviews from "@/components/home/reviewSection";
import SpecialCombosComponent from "@/components/home/specialCombos";
import WhyWebsiteComponent from "@/components/home/WhyWebsiteComponent";
import { fetchAllWebsiteBanners } from "@/lib/database/actions/banner.actions";
import { getAllFeaturedProducts } from "@/lib/database/actions/featured.products.actions";
import {
  getAllCrazyDealOffers,
  getAllSpecialComboOffers,
} from "@/lib/database/actions/homescreenoffers.actions";
import { getAllSubCateGoriesForUnisex } from "@/lib/database/actions/unisex.subCategories.actions";
import React from "react";

const Page = async () => {
  const WebsiteBannerCarousels: any = await fetchAllWebsiteBanners().catch(
    (err) => console.log(err)
  );
  const SubCateGoriesForUnisex: any =
    await getAllSubCateGoriesForUnisex().catch((err) => console.log(err));
  const specialCombosHomeData: any = await getAllSpecialComboOffers().catch(
    (err) => console.log(err)
  );
  const crazyDealsHomeData: any = await getAllCrazyDealOffers().catch((err) =>
    console.log(err)
  );
  const featuredProducts: any = await getAllFeaturedProducts().catch((err) =>
    console.log(err)
  );
  return (
    <div>
      <BannerCarousel WebsiteBannerCarousels={WebsiteBannerCarousels} />
      <SpecialCombosComponent specialCombosHomeData={specialCombosHomeData} />
      <ProductCard heading="Best Sellers" />
      <CategorySection subCategories={SubCateGoriesForUnisex} />
      <FeaturedProducts products={featuredProducts.featuredProducts} />
      <CrazyDealsComponent crazyDealsHomeData={crazyDealsHomeData} />
      <WhyWebsiteComponent />
      <CustomerReviews />
      <BlogImages />
    </div>
  );
};

export default Page;
