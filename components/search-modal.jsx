"use client"

import { Search, X } from "lucide-react"
import { useEffect, useRef } from "react"

export default function SearchModal({ isOpen, onClose }) {
  const inputRef = useRef(null)

  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current.focus(), 100)
    }
  }, [isOpen])

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-[60] transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={`fixed inset-y-0 right-0 w-full md:w-[400px] bg-white z-[70] transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <h2 className="text-xl font-bold text-[#2C1810]">Search</h2>
          <button onClick={onClose} className="text-[#2C1810] hover:text-[#D4A574] transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6 overflow-y-auto no-scrollbar h-full">
          <div className="relative">
            <input
              ref={inputRef}
              type="text"
              placeholder="Search products..."
              className="w-full px-4 py-3 pr-12 border border-gray-200 rounded-sm focus:outline-none focus:border-[#D4A574] focus:ring-1 focus:ring-[#D4A574]"
            />
            <button className="absolute right-3 top-3 text-gray-400 hover:text-[#D4A574]">
              <Search className="w-6 h-6" />
            </button>
          </div>

          <div className="mt-8">
            <h3 className="text-sm font-medium text-gray-500 mb-4">POPULAR SEARCHES</h3>
            <div className="flex flex-wrap gap-2">
              {["Sofa", "Dining Table", "Bed", "Outdoor Chair", "Lamp"].map((term) => (
                <button
                  key={term}
                  className="px-3 py-1 bg-gray-100 text-sm text-[#2C1810] rounded-full hover:bg-[#D4A574] hover:text-white transition-colors"
                >
                  {term}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
