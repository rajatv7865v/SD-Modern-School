"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const navLinks = [
    { href: "/", label: "Home" },
    {
      href: "/about",
      label: "About Us",
    },
   
    {
      href: "/facilities",
      label: "Facilities",
    },
    
    // { href: "/faculty", label: "Faculty" },
    { href: "/downloads", label: "Downloads" },
    { href: "/gallery", label: "Photo Gallery" },
    { href: "/contact", label: "Contact" },
  ];

  const handleDropdownToggle = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  return (
    <header className="sticky top-0 z-50">
      {/* Top Info Bar */}
      <div className="bg-primary-700 text-white py-2 text-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-4 md:gap-6">
              <a
                href="tel:+918448776603"
                className="flex items-center gap-2 hover:text-primary-200 transition-colors"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span className="hidden sm:inline">084487 76603</span>
                <span className="sm:hidden">Call Us</span>
              </a>
              <a
                href="mailto:info@sdmodern.com"
                className="flex items-center gap-2 hover:text-primary-200 transition-colors"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span className="hidden sm:inline">info@sdmodern.com</span>
                <span className="sm:hidden">Email</span>
              </a>
              <a 
                href="https://www.google.com/maps/search/?api=1&query=Gijhore+Sector+53+Noida+Uttar+Pradesh+201307" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hidden md:flex items-center gap-2 hover:text-primary-200 transition-colors"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>Gijhore, Sector 53, Noida, Uttar Pradesh 201307</span>
              </a>
              
            </div>
            <div className="flex items-center gap-3">
             
              
              <a
                href="https://www.google.com/maps/search/?api=1&query=Gijhore+Sector+53+Noida+Uttar+Pradesh+201307"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary-200 transition-colors"
                aria-label="Google Maps"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
              </a>
              
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-20 h-18 bg-primary-600 rounded-full flex items-center justify-center">
          <Image src="/logo/logo.jpeg" alt="S.D Modern School" width={140} height={100} className='rounded-full'/>
              </div>
              
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-4">
              {navLinks.map((link) => (
                <div key={link.label || link.href} className="relative group">
                  {link.submenu ? (
                    <>
                      <button
                        onClick={() => handleDropdownToggle(link.label)}
                        className="text-gray-700 hover:text-primary-600 font-medium transition-colors px-3 py-2"
                      >
                        {link.label}
                        <svg
                          className="inline-block ml-1 w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                      {openDropdown === link.label && (
                        <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                          {link.submenu.map((subItem) => (
                            <Link
                              key={subItem.href}
                              href={subItem.href}
                              className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors"
                              onClick={() => setOpenDropdown(null)}
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={link.href || "#"}
                      className="text-gray-700 hover:text-primary-600 font-medium transition-colors px-3 py-2 block"
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
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

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden mt-4 pb-4 space-y-2">
              {navLinks.map((link) => (
                <div key={link.label || link.href}>
                  {link.submenu ? (
                    <>
                      <button
                        onClick={() => handleDropdownToggle(link.label)}
                        className="w-full flex items-center justify-between px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600 rounded-lg transition-colors"
                      >
                        <span>{link.label}</span>
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                      {openDropdown === link.label && (
                        <div className="ml-4 mt-2 space-y-1">
                          {link.submenu.map((subItem) => (
                            <Link
                              key={subItem.href}
                              href={subItem.href}
                              className="block px-4 py-2 text-gray-600 hover:bg-primary-50 hover:text-primary-600 rounded-lg transition-colors"
                              onClick={() => {
                                setIsMenuOpen(false);
                                setOpenDropdown(null);
                              }}
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={link.href || "#"}
                      className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600 rounded-lg transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
