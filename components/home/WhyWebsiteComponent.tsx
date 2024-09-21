import { Rabbit, Droplet, Wallet, Users } from "lucide-react";
import Image from "next/image";

export default function WhyWebsiteComponent() {
  const features = [
    {
      icon: Rabbit,
      title: "CRUELTY FREE",
      description:
        "Compassion in every drop: Our promise of ethical, cruelty-free products.",
    },
    {
      icon: Droplet,
      title: "FRAGRANCE FORWARD",
      description: "Opulent and imported fragrance oils in each creation.",
    },
    {
      icon: Wallet,
      title: "AFFORDABLE LUXURY",
      description:
        "Delivering Exceptional Quality and Sophistication at an Affordable Price.",
    },
    {
      icon: Users,
      title: "GENDER NEUTRAL",
      description:
        "Enhance your self-care ritual with bath, body, and personal care products for everyone.",
    },
  ];

  return (
    <div className="container mx-auto px-4 mb-[20px] my-[10px]">
      <h2 className="heading text-center my-[40px] ">WHY VIBECART?</h2>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            {/* <feature.icon className="w-12 h-12 sm:w-16 sm:h-16 mb-2 sm:mb-4" /> */}
            <Image
              src={`/images/features/${index + 1}.png`}
              alt="_"
              height={100}
              width={100}
              className="sm:w-[50px] sm:h-[50px] mb-[20px]"
            />
            <h3 className="text-sm sm:text-lg mb-1 sm:mb-2 textGap text-[#1A1B18]">
              {feature.title}
            </h3>
            <p className="text-xs sm:text-sm textGap text-[#595A5C]">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
