import { Star, Minus, Plus, Clock, Award, Droplet, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import Accordian from "@/components/product/accordian";
import ReviewComponent from "@/components/product/review";
import ProductCard from "@/components/home/productCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Marquee from "react-fast-marquee";

export const ProductPage = () => {
  const images = [
    "https://placehold.co/500x500",
    "https://placehold.co/500x500?text=Second+Image",
    "https://placehold.co/500x500?text=Third+Image",
  ];
  return (
    <>
      <Marquee className="bg-[#FFF579] flex justify-between gap-[50px] p-4 sm:hidden">
        <p className="para mx-4">✨ Free delivery on all PrePaid Orders</p>
        <p className="para mx-4">
          🎁 Buy Any 3 products and get 1 gift for free
        </p>
        <p className="para mx-4">
          1 Body wash cleanser + 5 SKINCARE PRODUCTS @ ₹1500
        </p>
      </Marquee>

      <div className="max-w-7xl ownContainer pb-6 px-6 pt-2">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 mb-[20px]">
          <div className="w-full lg:w-1/2">
            <Carousel className="w-full">
              <CarouselContent>
                {images.map((imageSrc, index) => (
                  <CarouselItem key={index}>
                    <div className="p-1">
                      <img
                        src={imageSrc}
                        alt={`Product image ${index + 1}`}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
          <div className="w-full lg:w-1/2 space-y-4">
            <h1 className="text-2xl lg:subHeading">
              Luxury Perfume Gift Set For Men - 4 x 20ml
            </h1>
            <p className="text-xs lg:text-sm text-gray-500">EAU DE PARFUM</p>
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < 4
                        ? "text-yellow-400 fill-yellow-400"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm font-medium">4.7</span>
              <span className="text-sm text-gray-500">(1221 Reviews)</span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl lg:text-3xl font-bold">₹525.00</span>
              <span className="text-lg text-gray-500 line-through">
                ₹860.00
              </span>
              <span className="text-red-500 font-semibold">-39%</span>
            </div>
            <p className="text-sm text-gray-500">Inclusive of all taxes</p>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="icon">
                <Minus className="h-4 w-4" />
              </Button>
              <span className="w-12 text-center">1</span>
              <Button variant="outline" size="icon">
                <Plus className="h-4 w-4" />
              </Button>
            </div>
            <Button className="w-full bg-black text-white hover:bg-gray-800 ">
              ADD TO CART
            </Button>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
              {[
                { icon: Clock, text: "LONG LASTING" },
                { icon: Award, text: "IFRA - CERTIFIED" },
                { icon: Droplet, text: "IMPORTED OILS" },
                { icon: MapPin, text: "MAKE IN INDIA" },
              ].map(({ icon: Icon, text }, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center bg-gray-100 p-3 justify-center"
                >
                  <div className="rounded-full">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-xs mt-2">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Accordian />
        <ReviewComponent />
        <ProductCard heading={"YOU MAY ALSO LIKE"} />
      </div>
    </>
  );
};
export default ProductPage;