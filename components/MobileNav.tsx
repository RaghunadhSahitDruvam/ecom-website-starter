"use client";
import { useStore, useAtom } from "jotai";
import { Home, Menu, Grid, ShoppingBag, User } from "lucide-react";
import Link from "next/link";
import { hamburgerMenuState, cartMenuState, accountMenuState } from "./store";

export default function MobileNavComponent() {
  const [hamMenuOpen, setHamMenuOpen] = useAtom(hamburgerMenuState, {
    store: useStore(),
  });
  const [cartMenuOpen, setCartMenuOpen] = useAtom(cartMenuState, {
    store: useStore(),
  });
  const [accountMenuOpen, setAccountMenuOpen] = useAtom(accountMenuState, {
    store: useStore(),
  });
  const handleOnClickHamurgerMenu = () => {
    setHamMenuOpen(true);
  };
  const handleOnClickCartMenu = () => {
    setCartMenuOpen(true);
  };
  const handleOnClickAccountMenu = () => {
    setAccountMenuOpen(true);
  };
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 md:hidden">
      <div className="flex justify-around items-center h-16">
        <Link
          href="/"
          className="flex flex-col items-center text-gray-600 hover:text-gray-900 "
        >
          <Home className="w-6 h-6" />
          <span className="text-xs mt-1  para">Home</span>
        </Link>
        <Link
          href="#"
          className="flex flex-col items-center text-gray-600 hover:text-gray-900 "
          onClick={() => handleOnClickHamurgerMenu()}
        >
          <Menu className="w-6 h-6" />
          <span className="text-xs mt-1  para">Menu</span>
        </Link>
        <Link
          href="/shop"
          className="flex flex-col items-center text-gray-600 hover:text-gray-900 "
        >
          <Grid className="w-6 h-6" />
          <span className="text-xs mt-1  para">Shop</span>
        </Link>
        <Link
          href="#"
          className="flex flex-col items-center text-gray-600 hover:text-gray-900  relative"
          onClick={() => handleOnClickCartMenu()}
        >
          <ShoppingBag className="w-6 h-6" />
          <span className="text-xs mt-1  para">Cart</span>
          <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
            1
          </span>
        </Link>
        <Link
          href="#"
          className="flex flex-col items-center text-gray-600 hover:text-gray-900 "
          onClick={() => handleOnClickAccountMenu()}
        >
          <User className="w-6 h-6" />
          <span className="text-xs mt-1 para">Account</span>
        </Link>
      </div>
    </nav>
  );
}
