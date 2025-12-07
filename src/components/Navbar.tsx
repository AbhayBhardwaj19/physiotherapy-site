"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="glass fixed w-full top-0 z-50 border-b border-primary/20 backdrop-blur-xl bg-white/80 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold gradient-text hover:scale-105 transition-transform duration-300">
              PhysioCare
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              <Link
                href="#home"
                className="text-gray-700 hover:text-primary px-4 py-2 rounded-xl text-base font-semibold transition-all duration-300 hover:bg-primary/10 hover:scale-105"
                aria-label="Home"
              >
                Home
              </Link>
              <Link
                href="#services"
                className="text-gray-700 hover:text-primary px-4 py-2 rounded-xl text-base font-semibold transition-all duration-300 hover:bg-primary/10 hover:scale-105"
                aria-label="Services"
              >
                Services
              </Link>
              <Link
                href="#about"
                className="text-gray-700 hover:text-primary px-4 py-2 rounded-xl text-base font-semibold transition-all duration-300 hover:bg-primary/10 hover:scale-105"
                aria-label="About"
              >
                About
              </Link>
              <Link
                href="#contact"
                className="text-gray-700 hover:text-primary px-4 py-2 rounded-xl text-base font-semibold transition-all duration-300 hover:bg-primary/10 hover:scale-105"
                aria-label="Contact"
              >
                Contact
              </Link>
              <Link
                href="/book"
                className="bg-gradient-to-r from-primary to-accent text-white px-6 py-2.5 rounded-xl text-base font-bold hover:shadow-glow transition-all duration-300 transform hover:scale-105 shadow-lg"
                aria-label="Book Appointment"
              >
                Book
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-gray-700 hover:text-primary hover:bg-gray-50 focus:outline-none transition-all duration-200"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-100">
            <Link
              href="#home"
              className="text-gray-700 hover:text-primary hover:bg-gray-50 block px-3 py-2 rounded-lg text-base font-medium transition-all duration-200"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="#services"
              className="text-gray-700 hover:text-primary hover:bg-gray-50 block px-3 py-2 rounded-lg text-base font-medium transition-all duration-200"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link
              href="#about"
              className="text-gray-700 hover:text-primary hover:bg-gray-50 block px-3 py-2 rounded-lg text-base font-medium transition-all duration-200"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="#contact"
              className="text-gray-700 hover:text-primary hover:bg-gray-50 block px-3 py-2 rounded-lg text-base font-medium transition-all duration-200"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <Link
              href="/book"
              className="bg-primary text-white block px-3 py-2 rounded-lg text-base font-semibold hover:bg-opacity-90 transition-all duration-200"
              onClick={() => setIsOpen(false)}
            >
              Book
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
