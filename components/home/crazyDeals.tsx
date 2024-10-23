import React from "react";

const CrazyDealsComponent = ({
  crazyDealsHomeData,
}: {
  crazyDealsHomeData: any;
}) => {
  return (
    <div className="container mx-auto px-4 mb-[20px]">
      <div className="heading my-[10px] ownContainer text-center uppercase sm:my-[40px]">
        Crazy Deals
      </div>
      <div className="relative">
        <div className="flex overflow-x-auto gap-[20px] sm:flex-wrap sm:justify-center scroll-smooth no-scrollbar">
          {crazyDealsHomeData.offers.map((deal: any) => (
            <div key={deal._id} className="flex-shrink-0 w-[80vw] sm:w-[347px]">
              <img
                src={deal.images[0].url} // Assuming your image object has a `url` property
                alt={deal.title}
                className="w-full h-auto object-cover"
              />
              <p className="text-center uppercase textGa font-[500]">
                {deal.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CrazyDealsComponent;
