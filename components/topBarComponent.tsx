"use client";

import React, { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Link } from "lucide-react";
import { getAllTopBars } from "@/lib/database/actions/topBar.actions";

// const messages = [
//   "Get any 2 100ml PERFUMES for just ₹949",
//   "Free shipping on orders over ₹999",
//   "New fragrances just arrived!",
// ];
export default function TopBarComponent() {
  const [messages, setMessages] = useState<any>([]);
  useEffect(() => {
    async function fetchBanners() {
      try {
        await getAllTopBars()
          .then((res) => setMessages(res?.topbars))
          .catch((err) => console.log(err));
      } catch (error: any) {
        console.log(error);
      }
    }
    fetchBanners();
  }, []);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="bg-black text-white py-2 px-4 relative">
      <div className="embla overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex">
          {messages.map((message: any, index: number) => (
            <div key={index} className="embla__slide flex-[0_0_100%] min-w-0">
              <div className="text-center text-sm sm:text-base">
                {message.title}
              </div>
              {message.button.title && (
                <Link href={message.button.link}>
                  <button className={`bg-[${message.button.color}]`}>
                    {message.button.title}
                  </button>
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
      <button
        className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white"
        onClick={scrollPrev}
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white"
        onClick={scrollNext}
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  );
}
