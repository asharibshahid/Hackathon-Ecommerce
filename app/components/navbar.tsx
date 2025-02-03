"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useUser, SignInButton, SignedIn, SignedOut, useClerk } from "@clerk/nextjs";

const Navbar = () => {
  const { signOut } = useClerk();
  const [isVisible, setIsVisible] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const { user} = useUser();

  useEffect(() => {
    setIsClient(true); // Ensures this runs only on the client
  }, []);

  if (!isClient) return null; // Prevents SSR mismatches

  const categories = [
    { name: "Wallets", href: "/components/wallet" },
    { name: "Perfume", href: "/components/perfume" },
    { name: "Electonics", href: "/components/electronics" },
    { name: "Caps", href: "/components/caps" },
    { name: "Hoodies", href: "/components/Hoddie" },
    { name: "T-Shirts", href: "/components/tshirt" },
    { name: "jewelries", href: "/components/jewelry" },
   { name: "Hijabs", href: "/components/hijabs" },
   { name: "Shoes", href: "/components/shoes" }
  ];

  return (
    <header className="body-font bg-black text-white border-4 border-gray-600 hover:shadow-lg transition-shadow p-1">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        {/* Logo */}
        <div className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <Link href="/">
            <Image
              src="/thd.jpg"
              alt="Logo"
              width={50}
              height={50}
              className="bg-black cursor-pointer"
              priority // Ensures no hydration error
            />
          </Link>
        </div>
        <span className="ml-3 text-xl text-emerald-400">NovaCart</span>

        {/* Navigation */}
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400 flex flex-wrap items-center text-base justify-center space-x-4">
          <Link href="/" className="hover:text-white">Home</Link>
       
          <Link href="/components/jewelry" className="hover:text-white">Jewelry</Link>
          <Link href="/components/clothing" className="hover:text-white">Clothing</Link>

          {/* Category Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => setIsVisible(true)}
            onMouseLeave={() => setTimeout(() => setIsVisible(false), 1000)}
          >
            <div className="flex items-center cursor-pointer">
              <span>Category</span>
              <span className="ml-1">▼</span>
            </div>
            {isVisible && (
              <ul className="absolute left-0 mt-2 bg-white text-black shadow-lg rounded z-50">
                {categories.map((item) => (
                  <li key={item.name} className="px-4 py-2 hover:bg-gray-100">
                    <Link href={item.href}>{item.name}</Link>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <Link href="/services" className="hover:text-white">Services</Link>
        </nav>

        {/* Authentication and User Profile */}
        <div className="space-x-4">
          <SignedOut>
            <SignInButton mode="modal">
              <button className="inline-flex items-center bg-emerald-400 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
                Sign Up
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-4 h-4 ml-1"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </SignInButton>
          </SignedOut>

          <SignedIn>
            <div className="flex items-center space-x-4">
              {/* User Profile */}
              <div className="flex items-center">
                {/* Accessing user image */}
                <img
                  src={user?.imageUrl || "/default-profile.jpg"}
                  alt="Profile"
                  className="w-8 h-8 rounded-full"
                />
                <span className="ml-2 text-sm font-semibold text-white">
                  {user?.fullName || "User"}
                </span>
              </div>

              {/* Sign Out Button */}
              <button
                onClick={() => signOut()}
                className="px-4 py-2 bg-red-600 rounded hover:bg-red-500"
              >
                Sign Out
              </button>
            </div>
          </SignedIn>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
