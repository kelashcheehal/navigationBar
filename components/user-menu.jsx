"use client";

import Link from "next/link";
import { User, Package, Settings, LogOut } from "lucide-react";

export default function UserMenu({ isLoggedIn, setIsLoggedIn }) {
  if (!isLoggedIn) {
    return (
      <Link
        href="/login"
        className="text-[#2C1810] hover:text-[#D4A574] transition-colors duration-300"
        aria-label="Login"
      >
        <User className="w-5 h-5" />
      </Link>
    );
  }

  return (
    <div className="relative group">
      <button
        className="text-[#2C1810] hover:text-[#D4A574] transition-colors duration-300 flex items-center py-2"
        aria-label="Account"
      >
        <User className="w-5 h-5" strokeWidth={1.5} />
      </button>
      {/* Account Dropdown */}
      <div className="absolute top-full right-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
        <div className="bg-white border border-gray-200 shadow-lg min-w-[200px] rounded-sm animate-in fade-in slide-in-from-top-2 duration-300">
          <div className="px-4 py-3 border-b border-gray-100">
            <p className="text-sm font-medium text-[#2C1810]">John Doe</p>
            <p className="text-xs text-gray-500">john@example.com</p>
          </div>
          <Link
            href="/account"
            className="flex items-center gap-2 px-4 py-2 text-sm text-[#2C1810] hover:bg-gray-50 hover:text-[#D4A574] transition-colors"
          >
            <User className="w-4 h-4" />
            My Account
          </Link>
          <Link
            href="/orders"
            className="flex items-center gap-2 px-4 py-2 text-sm text-[#2C1810] hover:bg-gray-50 hover:text-[#D4A574] transition-colors"
          >
            <Package className="w-4 h-4" />
            Orders
          </Link>
          <Link
            href="/settings"
            className="flex items-center gap-2 px-4 py-2 text-sm text-[#2C1810] hover:bg-gray-50 hover:text-[#D4A574] transition-colors"
          >
            <Settings className="w-4 h-4" />
            Settings
          </Link>
          <button
            onClick={() => setIsLoggedIn(false)}
            className="w-full flex items-center gap-2 px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors border-t border-gray-100"
          >
            <LogOut className="w-4 h-4" />
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
