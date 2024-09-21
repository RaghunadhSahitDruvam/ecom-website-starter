import React from "react";

const SpecialCombosComponent = () => {
  return (
    <div className="container mx-auto px-4 mb-[20px]">
      <div className="heading my-[10px] ownContainer text-center uppercase sm:my-[40px]">
        SPECIAL COMBOS
      </div>
      <div className="relative">
        <div className="flex overflow-x-auto gap-[20px] sm:flex-wrap sm:justify-center scroll-smooth no-scrollbar">
          <div className="flex-shrink-0 w-[80vw] sm:w-[347px]">
            <img
              src={"https://placehold.co/400x323"}
              alt={`Slide 1`}
              className="w-full h-auto object-cover"
            />
            <p className="text-center uppercase textGa font-[500]">
              Daily Essential Kit
            </p>
          </div>
          <div className="flex-shrink-0 w-[80vw] sm:w-[347px]">
            <img
              src={"https://placehold.co/400x323"}
              alt={`Slide 2`}
              className="w-full h-auto object-cover"
            />
            <p className="text-center uppercase textGa font-[500]">
              Impeccable Matte Set of Three
            </p>
          </div>
          <div className="flex-shrink-0 w-[80vw] sm:w-[347px]">
            <img
              src={"https://placehold.co/400x323"}
              alt={`Slide 3`}
              className="w-full h-auto object-cover"
            />
            <p className="text-center uppercase textGa font-[500]">
              Fragrance Team Set
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialCombosComponent;
