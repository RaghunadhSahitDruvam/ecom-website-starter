import React from "react";

const comboData = [
  {
    id: 1,
    title: "Daily Essential Kit",
    imgSrc: "https://placehold.co/400x323",
    altText: "Slide 1",
  },
  {
    id: 2,
    title: "Impeccable Matte Set of Three",
    imgSrc: "https://placehold.co/400x323",
    altText: "Slide 2",
  },
  {
    id: 3,
    title: "Fragrance Team Set",
    imgSrc: "https://placehold.co/400x323",
    altText: "Slide 3",
  },
];

const SpecialCombosComponent = () => {
  return (
    <div className="container mx-auto px-4 mb-[20px]">
      <div className="heading my-[10px] ownContainer text-center uppercase sm:my-[40px]">
        SPECIAL COMBOS
      </div>
      <div className="relative">
        <div className="flex overflow-x-auto gap-[20px] sm:flex-wrap sm:justify-center scroll-smooth no-scrollbar">
          {comboData.map((combo) => (
            <div key={combo.id} className="flex-shrink-0 w-[80vw] sm:w-[347px]">
              <img
                src={combo.imgSrc}
                alt={combo.altText}
                className="w-full h-auto object-cover"
              />
              <p className="text-center uppercase textGa font-[500]">
                {combo.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpecialCombosComponent;
