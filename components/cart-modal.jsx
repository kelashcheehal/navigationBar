"use client";

import { ShoppingCart, X, Trash2, Plus, Minus } from "lucide-react";
import { useState } from "react";

export default function CartModal({ isOpen, onClose }) {
  const [items, setItems] = useState([
    {
      id: 1,
      name: "Modern Leather Sofa",
      price: 1299,
      quantity: 1,
      image: "/placeholder.svg?height=80&width=80",
    },
  ]);

  const updateQuantity = (id, delta) => {
    setItems(
      items.map((item) => {
        if (item.id === id) {
          const newQuantity = Math.max(1, item.quantity + delta);
          return { ...item, quantity: newQuantity };
        }
        return item;
      })
    );
  };

  const removeItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const subtotal = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

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
            <ShoppingCart className="w-5 h-5 text-[#2C1810]" />
            <h2 className="text-xl font-bold text-[#2C1810]">
              Shopping Cart ({items.length})
            </h2>
          </div>
          <button
            onClick={onClose}
            className="text-[#2C1810] hover:text-[#D4A574] transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex flex-col h-[calc(100vh-80px)]">
          <div className="flex-1 overflow-y-auto p-6 no-scrollbar">
            {items.length > 0 ? (
              <div className="space-y-6">
                {items.map((item) => (
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
                      <p className="text-[#D4A574] font-bold mb-2">
                        ${item.price}
                      </p>
                      <div className="flex items-center gap-3">
                        <div className="flex items-center border border-gray-200 rounded-sm">
                          <button
                            onClick={() => updateQuantity(item.id, -1)}
                            className="p-1 hover:bg-gray-100 text-[#2C1810]"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-2 text-xs font-medium">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, 1)}
                            className="p-1 hover:bg-gray-100 text-[#2C1810]"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-gray-400 hover:text-red-500 self-start"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <ShoppingCart className="w-12 h-12 text-gray-200 mb-4" />
                <p className="text-gray-500">Your cart is empty</p>
                <button
                  onClick={onClose}
                  className="mt-4 px-6 py-2 bg-[#2C1810] text-white text-sm font-bold uppercase tracking-wider hover:bg-[#D4A574] transition-colors"
                >
                  Start Shopping
                </button>
              </div>
            )}
          </div>

          {items.length > 0 && (
            <div className="p-6 border-t border-gray-100 bg-gray-50">
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm font-medium text-[#2C1810]">
                  Subtotal
                </span>
                <span className="text-lg font-bold text-[#D4A574]">
                  ${subtotal}
                </span>
              </div>
              <p className="text-xs text-gray-500 mb-4">
                Shipping and taxes calculated at checkout.
              </p>
              <button className="w-full py-3 bg-[#2C1810] text-white font-bold uppercase tracking-wider hover:bg-[#D4A574] transition-colors rounded-sm">
                Checkout
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
