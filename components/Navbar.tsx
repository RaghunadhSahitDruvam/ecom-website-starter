import React from "react";

import { Search, User, Menu, Package, Truck, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { RiDiscountPercentFill } from "react-icons/ri";
import { LuStore } from "react-icons/lu";
import { GrLike } from "react-icons/gr";
import { GiPerfumeBottle } from "react-icons/gi";
import { FaBath } from "react-icons/fa";
import { PiHighlighterCircleBold } from "react-icons/pi";
import { MdFace4 } from "react-icons/md";
import Link from "next/link";
import CartDrawer from "./CartDrawer";
import SignInUpPopup from "./auth";

export default function Navbar() {
  const navItems = [
    { name: "CRAZY DEALS", icon: <RiDiscountPercentFill size={24} /> },
    { name: "SHOP ALL", icon: <LuStore size={24} /> },
    { name: "BESTSELLERS", icon: <GrLike size={24} /> },
    { name: "PERFUMES", icon: <GiPerfumeBottle size={24} />, hasSubmenu: true },
    { name: "BATH & BODY", icon: <FaBath size={24} />, hasSubmenu: true },
    { name: "MAKEUP", icon: <PiHighlighterCircleBold size={24} /> },
    { name: "SKINCARE", icon: <MdFace4 size={24} />, hasSubmenu: true },
  ];

  return (
    <nav className="w-full bg-white ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-15 ">
          <div className="flex items-center lg:w-1/3">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden mr-2">
                  <Menu size={24} />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="left"
                className="w-[300px] sm:w-[400px] overflow-y-auto"
              >
                <div className="flex items-center space-x-4 mb-2">
                  <User
                    size={40}
                    className=" border-2 border-black p-1 rounded-full"
                  />
                  <div>
                    <p className="text-sm font-medium">Download our app</p>
                    <p className="text-sm text-muted-foreground">
                      and get 10% OFF!
                    </p>
                  </div>
                </div>
                <Button className="w-full mb-2 bg-red-500 hover:bg-red-600 text-white rounded-none">
                  Download App
                </Button>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <Button
                    variant="outline"
                    className="flex items-center justify-center space-x-2 bg-[#E4E4E4] rounded-none"
                  >
                    <Package size={20} />
                    <span>MY ORDERS</span>
                  </Button>
                  <Button
                    variant="outline"
                    className="flex items-center justify-center space-x-2 bg-[#E4E4E4] rounded-none"
                  >
                    <Truck size={20} />
                    <span>TRACK ORDER</span>
                  </Button>
                </div>
                <div className="space-y-4">
                  {navItems.map((item) => (
                    <div
                      key={item.name}
                      className="flex items-center justify-between py-2 border-b border-b-gray-300"
                    >
                      <div className="flex items-center space-x-4">
                        {item.icon}
                        <span className="font-medium">{item.name}</span>
                      </div>
                      {item.hasSubmenu && <ChevronRight size={20} />}
                    </div>
                  ))}
                </div>
                <div className="mt-6 bg-green-500 p-4 rounded-lg">
                  <p className="text-white font-bold">NEW LAUNCH ALERT!</p>
                </div>
              </SheetContent>
            </Sheet>
            {/* for lg screen */}
            <div className="hidden lg:block w-full max-w-xs">
              <div className="relative">
                <Search
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={20}
                />
                <input
                  type="search"
                  placeholder="Search"
                  className="pl-10 pr-4 py-2 w-full border-b-2 border-black"
                />
              </div>
            </div>
          </div>

          <div className="flex-1 flex items-center justify-center lg:w-1/3">
            <Link href={"/"}>
              {" "}
              <h1 className="text-2xl font-bold">VIBECART</h1>
            </Link>
          </div>

          <div className="flex items-center justify-end lg:w-1/3">
            <SignInUpPopup />
            <CartDrawer />
          </div>
        </div>
        {/* for sm screen */}

        <div className="lg:hidden">
          <div className="relative">
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 "
              size={20}
            />
            <input
              type="search"
              placeholder="Search for your favourite products"
              className="pl-10 pr-4 py-1 w-full border-b-2 border-black mb-2"
            />
          </div>
        </div>
      </div>

      <div className="hidden lg:block border-t border-gray-200 mt-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-evenly py-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href="#"
                className="text-sm font-medium text-gray-700 hover:text-gray-900 group transition duration-300"
              >
                {item.name}

                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black"></span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
