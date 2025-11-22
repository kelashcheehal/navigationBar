"use client";

import {
  Search,
  User,
  Package,
  LogOut,
  ChevronDown,
  X,
  Heart,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function MobileMenu({
  isOpen,
  onClose,
  navigationItems,
  secondaryNavigation,
  isLoggedIn,
  setIsLoggedIn,
  onOpenWishlist,
}) {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (name) => {
    if (openDropdown === name) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(name);
    }
  };

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-[60] transition-opacity duration-300 lg:hidden ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={onClose}
      />

      {/* Menu Drawer */}
      <div
        className={`fixed inset-y-0 right-0 w-[350px] bg-white z-[70] transform transition-transform duration-300 ease-in-out lg:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4 border-b border-gray-100">
            <span className="text-lg font-bold text-[#2C1810]">Menu</span>
            <button
              onClick={onClose}
              className="p-2 text-[#2C1810] hover:text-[#D4A574] transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-6 space-y-4 no-scrollbar">
            {/* Search Bar for Mobile */}
            <div className="relative mb-4">
              <input
                type="text"
                placeholder="Search..."
                className="w-full px-4 py-2 border border-gray-200 rounded-sm focus:outline-none focus:border-[#D4A574]"
              />
              <Search className="absolute right-3 top-2.5 w-5 h-5 text-gray-400" />
            </div>

            {/* Main Navigation Items */}
            {navigationItems.map((item) => (
              <div
                key={item.name}
                className="border-b border-gray-100 last:border-0"
              >
                {item.dropdown ? (
                  <div>
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      className="flex items-center justify-between w-full py-3 text-[#2C1810] font-medium"
                    >
                      {item.name}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-300 ${
                          openDropdown === item.name ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        openDropdown === item.name
                          ? "max-h-[500px] opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="bg-gray-50 px-4 py-2 space-y-2 mb-3">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block py-2 text-sm text-gray-600 hover:text-[#D4A574]"
                            onClick={onClose}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="block py-3 text-[#2C1810] font-medium hover:text-[#D4A574]"
                    onClick={onClose}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Action Icons */}
          <div className="p-6 border-t border-gray-100 bg-gray-50">
            {isLoggedIn ? (
              <div className="flex flex-col gap-4 w-full">
                <div className="flex items-center gap-3 pb-4 border-b border-gray-200">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#2C1810] shadow-sm">
                    <User className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[#2C1810]">
                      John Doe
                    </p>
                    <p className="text-xs text-gray-500">john@example.com</p>
                  </div>
                </div>
                <Link
                  href="/account"
                  onClick={onClose}
                  className="flex items-center gap-2 text-[#2C1810] hover:text-[#D4A574]"
                >
                  <User className="w-5 h-5" />
                  <span className="text-sm font-medium">My Account</span>
                </Link>
                <button
                  onClick={onOpenWishlist}
                  className="flex items-center gap-2 text-[#2C1810] hover:text-[#D4A574]"
                >
                  <Heart className="w-5 h-5" />
                  <span className="text-sm font-medium">Wishlist</span>
                </button>
                <Link
                  href="/orders"
                  onClick={onClose}
                  className="flex items-center gap-2 text-[#2C1810] hover:text-[#D4A574]"
                >
                  <Package className="w-5 h-5" />
                  <span className="text-sm font-medium">Orders</span>
                </Link>
                <button
                  onClick={() => {
                    setIsLoggedIn(false);
                    onClose();
                  }}
                  className="flex items-center gap-2 text-red-600 hover:text-red-700"
                >
                  <LogOut className="w-5 h-5" />
                  <span className="text-sm font-medium">Logout</span>
                </button>
              </div>
            ) : (
              <div className="flex flex-col gap-4">
                <Link
                  href="/login"
                  onClick={onClose}
                  className="flex items-center gap-2 text-[#2C1810] hover:text-[#D4A574]"
                >
                  <User className="w-5 h-5" />
                  <span className="text-sm font-medium">Login / Register</span>
                </Link>
                <button
                  onClick={onOpenWishlist}
                  className="flex items-center gap-2 text-[#2C1810] hover:text-[#D4A574]"
                >
                  <Heart className="w-5 h-5" />
                  <span className="text-sm font-medium">Wishlist</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
