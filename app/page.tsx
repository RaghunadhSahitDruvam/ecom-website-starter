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
import { getTopSellingProducts } from "@/lib/database/actions/product.actions";
import { getAllSubCateGoriesForUnisex } from "@/lib/database/actions/unisex.subCategories.actions";

export const revalidate = 120;

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
  const topSellingProducts = await getTopSellingProducts().catch((err) =>
    console.log(err)
  );
  const transformedProducts = topSellingProducts.map((product: any) => ({
    id: product._id,
    name: product.name,
    category: product.category, // You might need to format this
    image: product.subProducts[0]?.images[0].url || "", // Adjust to match your image structure
    rating: product.rating,
    reviews: product.numReviews,
    price: product.subProducts[0]?.price || 0, // Adjust to match your pricing structure
    originalPrice: product.subProducts[0]?.originalPrice || 0, // Add logic for original price
    discount: product.subProducts[0]?.discount || 0,
    isBestseller: product.featured,
    isSale: product.subProducts[0]?.isSale || false, // Adjust if you have sale logic
  }));
  console.log(transformedProducts);
  return (
    <div>
      <BannerCarousel WebsiteBannerCarousels={WebsiteBannerCarousels} />
      <SpecialCombosComponent specialCombosHomeData={specialCombosHomeData} />
      <ProductCard heading="Best Sellers" products={transformedProducts} />
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
