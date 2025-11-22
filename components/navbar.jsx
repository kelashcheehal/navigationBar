"use client";

import Link from "next/link";
import { Search, Menu, ShoppingCart, Heart } from "lucide-react";
import { useState } from "react";
import MobileMenu from "./mobile-menu";
import UserMenu from "./user-menu";
import SearchModal from "./search-modal";
import WishlistModal from "./wishlist-modal";
import CartModal from "./cart-modal";

const navigationItems = [
  { name: "HOME", href: "/home" },
  { name: "PRODUCTS", href: "/products" },
  { name: "NEW PRODUCTS", href: "/new-products" },
  {
    name: "CATEGORY",
    href: "/category",
    dropdown: [
      { name: "Swing Chair", href: "/outdoor-furniture/swing-chair" },
      { name: "Outdoor Sofa", href: "/outdoor-furniture/sofa" },
      { name: "Outdoor Sets", href: "/outdoor-furniture/sets" },
      { name: "Outdoor Furniture", href: "/outdoor-furniture/all" },
      { name: "Outdoor Chair", href: "/outdoor-furniture/chair" },
      { name: "Outdoor Benches", href: "/outdoor-furniture/benches" },
      { name: "Outdoor Tables", href: "/outdoor-furniture/tables" },
    ],
  },
  { name: "ABOUT", href: "/about" },
  { name: "HELP", href: "/help" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [activeModal, setActiveModal] = useState(null); // 'search', 'wishlist', 'cart' or null

  return (
    <>
      <nav className="w-full bg-white border-b border-gray-200 relative z-50 font-sans">
        {/* Top Navigation */}
        <div className="mx-auto max-w-[1400px] px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2 group z-50 relative"
            >
              <div className="w-10 h-10 bg-[#D4A574] rounded flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="w-6 h-6"
                  stroke="white"
                  strokeWidth="2"
                >
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-[#2C1810] text-[20px] font-bold tracking-[0.15em] uppercase">
                  WOODEN
                </span>
                <span className="text-[#D4A574] text-[20px] font-medium tracking-[0.15em] uppercase -mt-1">
                  BAZAR
                </span>
              </div>
            </Link>

            {/* Main Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navigationItems.map((item) => (
                <div key={item.name} className="relative group">
                  <Link
                    href={item.href}
                    className="text-[13px] font-normal tracking-widest text-black hover:text-[#D4A574] transition-colors duration-300 relative py-2"
                  >
                    {item.name}
                    <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#D4A574] transition-all duration-300 group-hover:w-full" />
                  </Link>

                  {/* Dropdown Menu */}
                  {item.dropdown && (
                    <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                      <div className="bg-white border border-gray-200 shadow-lg min-w-[200px] rounded-sm animate-in fade-in slide-in-from-top-2 duration-300">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-6 py-3 text-[13px] text-[#2C1810] hover:bg-gray-50 hover:text-[#D4A574] transition-colors duration-200 border-b border-gray-100 last:border-0"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Action Icons */}
            <div className="hidden lg:flex items-center gap-6">
              <button
                onClick={() => setActiveModal("search")}
                className="text-[#2C1810] hover:text-[#D4A574] stroke-0 transition-colors duration-300"
                aria-label="Search"
              >
                <Search className="w-5 h-5" strokeWidth={1.5} />
              </button>

              <UserMenu isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />

              <button
                onClick={() => setActiveModal("wishlist")}
                className="text-[#2C1810] hover:text-[#D4A574] transition-colors duration-300"
                aria-label="Wishlist"
              >
                <Heart className="w-5 h-5" strokeWidth={1.5} />
              </button>

              <button
                onClick={() => setActiveModal("cart")}
                className="relative text-[#2C1810] hover:text-[#D4A574] transition-colors duration-300"
                aria-label="Cart"
              >
                <ShoppingCart className="w-5 h-5" strokeWidth={1.5} />
                {/* This would typically come from a cart context */}
                <span className="absolute -top-2 -right-2 w-5 h-5 bg-[#2C1810] text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                  1
                </span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-4 lg:hidden">
              <button
                onClick={() => setActiveModal("cart")}
                className="relative text-black hover:text-[#D4A574] transition-colors duration-300"
                aria-label="Cart"
              >
                <ShoppingCart className="w-5 h-5" strokeWidth={1} />
                <span className="absolute -top-2 -right-2 w-5 h-5 bg-[#2C1810] text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                  1
                </span>
              </button>

              <button
                className="text-[#2C1810] z-50 relative stroke-2"
                onClick={() => setIsMobileMenuOpen(true)}
                aria-label="Menu"
              >
                <Menu className="w-6 h-6" strokeWidth={1} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Components */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        navigationItems={navigationItems}
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
        onOpenWishlist={() => {
          setIsMobileMenuOpen(false);
          setActiveModal("wishlist");
        }}
      />

      <SearchModal
        isOpen={activeModal === "search"}
        onClose={() => setActiveModal(null)}
      />

      <WishlistModal
        isOpen={activeModal === "wishlist"}
        onClose={() => setActiveModal(null)}
      />

      <CartModal
        isOpen={activeModal === "cart"}
        onClose={() => setActiveModal(null)}
      />
    </>
  );
}
