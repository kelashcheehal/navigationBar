"use client";

import { Heart, X, Trash2 } from "lucide-react";

export default function WishlistModal({ isOpen, onClose }) {
  // Mock data
  const wishlistItems = [
    {
      id: 1,
      name: "Modern Leather Sofa",
      price: 1299,
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      id: 2,
      name: "Oak Dining Table",
      price: 899,
      image: "/placeholder.svg?height=80&width=80",
    },
  ];

  return (
    <>
      <div
        className={`fixed inset-0 bg-black/50 z-[60] transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={onClose}
      />

      <div
        className={`fixed inset-y-0 right-0 w-full md:w-[400px] bg-white z-[70] transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-[#2C1810]" />
            <h2 className="text-xl font-bold text-[#2C1810]">
              Wishlist ({wishlistItems.length})
            </h2>
          </div>
          <button
            onClick={onClose}
            className="text-[#2C1810] hover:text-[#D4A574] transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex flex-col h-[calc(100vh-80px)] overflow-y-auto p-6 no-scrollbar">
          {wishlistItems.length > 0 ? (
            <div className="space-y-6">
              {wishlistItems.map((item) => (
                <div key={item.id} className="flex gap-4">
                  <div className="w-20 h-20 bg-gray-100 rounded-sm overflow-hidden">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-medium text-[#2C1810] mb-1">
                      {item.name}
                    </h3>
                    <p className="text-[#D4A574] font-bold mb-3">
                      ${item.price}
                    </p>
                    <button className="text-xs font-medium text-[#2C1810] hover:text-[#D4A574] underline decoration-[#D4A574]">
                      ADD TO CART
                    </button>
                  </div>
                  <button className="text-gray-400 hover:text-red-500 self-start">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <Heart className="w-12 h-12 text-gray-200 mb-4" />
              <p className="text-gray-500">Your wishlist is empty</p>
              <button
                onClick={onClose}
                className="mt-4 px-6 py-2 bg-[#2C1810] text-white text-sm font-bold uppercase tracking-wider hover:bg-[#D4A574] transition-colors"
              >
                Start Shopping
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
