"use client";
import Image from "next/image";
import { useState } from "react";
import { IoIosArrowRoundForward, IoMdMenu, IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="relative">
      <div className="max-w-[1160px] mx-auto flex justify-between items-center py-[40px] text-sm">
        <div>
          <Image src="/assets/logo.png" alt="logo" width={109} height={30} />
        </div>

        <ul className="hidden md:flex gap-8">
          <li className="hover:text-[#CAEF45] transition-all cursor-pointer">
            About
          </li>
          <li className="hover:text-[#CAEF45] transition-all cursor-pointer">
            Price
          </li>
          <li className="hover:text-[#CAEF45] transition-all cursor-pointer">
            Features
          </li>
          <li className="hover:text-[#CAEF45] transition-all cursor-pointer">
            Integration
          </li>
          <li className="hover:text-[#CAEF45] transition-all cursor-pointer">
            Blog
          </li>
          <li className="hover:text-[#CAEF45] transition-all cursor-pointer">
            Contact
          </li>
        </ul>

        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center gap-1">
            <Image src="/assets/cart.png" alt="cart" width={20} height={20} />
            Cart <span className="text-[#FA7A68]">0</span>
          </div>
          <button>Login</button>
          <button className="bg-black text-white px-[20px] py-[12px] rounded-[30px] flex items-center gap-1 hover:bg-[#CAEF45] hover:text-black transition-all">
            Sign Up <IoIosArrowRoundForward size={26} />
          </button>
        </div>

        <div className="md:hidden flex items-center">
          <button onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? (
              <IoMdClose size={30} />
            ) : (
              <IoMdMenu size={30} />
            )}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden fixed left-0 top-0 h-full w-full bg-white shadow-lg transition-all duration-300 z-20">
          <div className="flex justify-end p-4">
            <button onClick={toggleMobileMenu}>
              <IoMdClose size={30} />
            </button>
          </div>
          <ul className="flex flex-col items-center gap-4 py-4 mt-8">
            <li>About</li>
            <li>Price</li>
            <li>Features</li>
            <li>Integration</li>
            <li>Blog</li>
            <li>Contact</li>
            <div className="flex items-center gap-1">
              <Image src="/assets/cart.png" alt="cart" width={20} height={20} />
              Cart <span className="text-[#FA7A68]">0</span>
            </div>
            <button>Login</button>
            <button className="bg-black text-white px-[20px] py-[12px] rounded-[30px] flex items-center gap-1 hover:bg-[#CAEF45] hover:text-black transition-all">
              Sign Up <IoIosArrowRoundForward size={26} />
            </button>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
