"use client";

import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { CiInstagram } from "react-icons/ci";

const reviews = [
  {
    id: 1,
    name: "Sanna Thakur",
    instagram: "sannathakur_",
    image: "https://placehold.co/200x200",
    rating: 5,
    text: "VIBECART has raised the bar for the perfume industry, Such good quality at very affordable price",
  },
  {
    id: 2,
    name: "Rahul Mehta",
    instagram: "rahul_mehta92",
    image: "https://placehold.co/200x200",
    rating: 5,
    text: "Impressed by the longevity of these fragrances. VIBECART offers luxury scents at unbeatable prices.",
  },
  {
    id: 3,
    name: "Priya Sharma",
    instagram: "priya.sharma",
    image: "https://placehold.co/200x200",
    rating: 5,
    text: "Found my signature scent with VIBECART. The attention to detail in their perfumes is remarkable.",
  },
];

export default function CustomerReviews() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8">
      <h2 className="mb-12 heading text-center">
        WHAT OUR CUSTOMERS HAVE TO SAY
      </h2>
      <div className="relative">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {reviews.map((review) => (
              <div key={review.id} className="flex-[0_0_100%] min-w-0 px-4">
                <div className="bg-white rounded-lg  p-6 flex flex-col items-center">
                  <img
                    src={review.image}
                    alt={`${review.name}'s profile`}
                    className="w-24 h-24 rounded-full mb-6 object-cover"
                    // width={24}
                    // height={24}
                  />
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-6 h-6 ${
                          i < review.rating
                            ? "text-yellow-400 fill-current"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-center mb-6 text-lg">{review.text}</p>
                  <p className="font-semibold text-xl mb-1">{review.name}</p>
                  <p className="text-gray-600 flex justify-center items-center gap-0">
                    <CiInstagram size={15} />
                    {review.instagram}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-transparent rounded-full p-2"
          onClick={scrollPrev}
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-transparent rounded-full p-2"
          onClick={scrollNext}
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}
